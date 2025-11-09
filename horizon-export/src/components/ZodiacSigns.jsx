
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodiacSigns } from "@/lib/zodiacData";

function ZodiacSigns() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Zodiac Signs</h1>
        <p className="text-lg text-muted-foreground">
          Explore the unique characteristics and traits of each zodiac sign
        </p>
      </motion.div>

      <Tabs defaultValue="Aries" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
          {zodiacSigns.map((sign) => (
            <TabsTrigger
              key={sign.name}
              value={sign.name}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {sign.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {zodiacSigns.map((sign) => (
          <TabsContent key={sign.name} value={sign.name}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="zodiac-card">
                <h2 className="text-2xl font-bold mb-4">{sign.name}</h2>
                <p className="text-muted-foreground mb-4">{sign.dates}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Element</h3>
                    <p className="text-muted-foreground">{sign.element}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality</h3>
                    <p className="text-muted-foreground">{sign.quality}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ruling Planet</h3>
                    <p className="text-muted-foreground">{sign.rulingPlanet}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Symbol</h3>
                    <p className="text-muted-foreground">{sign.symbol}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Key Traits</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {sign.traits.map((trait) => (
                        <li key={trait}>{trait}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Strengths</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {sign.strengths.map((strength) => (
                        <li key={strength}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Weaknesses</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {sign.weaknesses.map((weakness) => (
                        <li key={weakness}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="zodiac-card">
                <h3 className="font-semibold mb-4">About {sign.name}</h3>
                <p className="text-muted-foreground mb-6">{sign.description}</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Love & Relationships</h4>
                    <p className="text-muted-foreground text-sm">{sign.loveDescription}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Career</h4>
                    <p className="text-muted-foreground text-sm">{sign.careerDescription}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lucky Numbers</h4>
                    <div className="flex gap-2 flex-wrap">
                      {sign.luckyNumbers.map((num) => (
                        <span key={num} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lucky Colors</h4>
                    <p className="text-muted-foreground">
                      {sign.luckyColors.join(", ")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Most Compatible With</h4>
                    <div className="flex gap-2 flex-wrap">
                      {sign.compatibleSigns.map((compSign) => (
                        <span key={compSign} className="px-3 py-1 bg-accent rounded-full text-sm">
                          {compSign}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default ZodiacSigns;
