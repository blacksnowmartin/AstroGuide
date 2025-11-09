import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tarotCards, tarotSpreadTypes, getRandomCards } from "@/lib/tarotData";

function TarotReading() {
  const [selectedSpread, setSelectedSpread] = React.useState("single");
  const [reading, setReading] = React.useState(null);
  const [flippedCards, setFlippedCards] = React.useState({});
  const { toast } = useToast();

  const drawCards = () => {
    const spread = tarotSpreadTypes[selectedSpread];
    const cards = getRandomCards(spread.cards);
    
    setReading({
      spread: spread.name,
      cards: cards.map((card, index) => ({
        ...card,
        position: spread.positions ? spread.positions[index] : null,
      })),
      date: new Date().toLocaleDateString(),
    });

    // Reset flipped cards
    setFlippedCards({});

    toast({
      title: "Cards Drawn!",
      description: `Your ${spread.name} reading is ready.`,
    });
  };

  const flipCard = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const saveReading = () => {
    if (reading) {
      const savedReadings = JSON.parse(localStorage.getItem("tarotReadings") || "[]");
      savedReadings.push(reading);
      localStorage.setItem("tarotReadings", JSON.stringify(savedReadings));
      toast({
        title: "Reading Saved",
        description: "Your tarot reading has been saved to your history.",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Tarot Card Reading</h1>
        <p className="text-lg text-muted-foreground">
          Receive guidance and insight from the ancient wisdom of tarot cards
        </p>
      </motion.div>

      <div className="mb-8">
        <Tabs value={selectedSpread} onValueChange={setSelectedSpread} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="single">Single Card</TabsTrigger>
            <TabsTrigger value="threeCard">Three Card</TabsTrigger>
            <TabsTrigger value="celticCross">Celtic Cross</TabsTrigger>
          </TabsList>

          {Object.entries(tarotSpreadTypes).map(([key, spread]) => (
            <TabsContent key={key} value={key} className="text-center">
              <div className="zodiac-card max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-2">{spread.name}</h3>
                <p className="text-muted-foreground mb-4">{spread.description}</p>
                {spread.positions && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold mb-2">Card Positions:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {spread.positions.map((pos, idx) => (
                        <li key={idx}>{idx + 1}. {pos}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="text-center mb-8">
        <Button size="lg" onClick={drawCards}>
          Draw Cards
        </Button>
      </div>

      <AnimatePresence>
        {reading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">{reading.spread}</h2>
              <p className="text-muted-foreground">Reading Date: {reading.date}</p>
            </div>

            <div
              className={`grid gap-4 ${
                reading.cards.length === 1
                  ? "grid-cols-1 max-w-md mx-auto"
                  : reading.cards.length === 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {reading.cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`zodiac-card cursor-pointer min-h-[400px] ${
                      flippedCards[index] ? "bg-primary/5" : ""
                    }`}
                    onClick={() => flipCard(index)}
                  >
                    {!flippedCards[index] ? (
                      <div className="text-center py-8">
                        <div className="w-32 h-48 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center mb-4">
                          <span className="text-4xl">🃏</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Click to reveal card
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-center">
                          <h3 className="text-xl font-bold mb-1">{card.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            card.reversed
                              ? "bg-red-500/20 text-red-600 dark:text-red-400"
                              : "bg-green-500/20 text-green-600 dark:text-green-400"
                          }`}>
                            {card.reversed ? "Reversed" : "Upright"}
                          </span>
                        </div>

                        {card.position && (
                          <div className="text-center">
                            <p className="text-sm font-semibold text-primary">
                              {card.position}
                            </p>
                          </div>
                        )}

                        <div className="space-y-2">
                          <div>
                            <p className="text-sm font-semibold mb-1">Meaning:</p>
                            <p className="text-sm text-muted-foreground">
                              {card.reversed ? card.reversed : card.meaning}
                            </p>
                          </div>

                          <div>
                            <p className="text-sm font-semibold mb-1">Description:</p>
                            <p className="text-sm text-muted-foreground">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button onClick={saveReading} variant="outline">
                Save Reading
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TarotReading;

