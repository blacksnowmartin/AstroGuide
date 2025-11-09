
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const zodiacSigns = [
  {
    name: "Aries",
    dates: "March 21 - April 19",
    element: "Fire",
    traits: ["Confident", "Courageous", "Enthusiastic"],
    luckyNumbers: [1, 9, 17],
    luckyColors: ["Red", "Orange"],
    description:
      "Aries is a natural born leader, always ready to blaze a trail and take on challenges head-first.",
  },
  {
    name: "Taurus",
    dates: "April 20 - May 20",
    element: "Earth",
    traits: ["Patient", "Reliable", "Determined"],
    luckyNumbers: [2, 6, 15],
    luckyColors: ["Green", "Pink"],
    description:
      "Taurus is known for being reliable, practical, and devoted, with a strong appreciation for beauty and comfort.",
  },
  {
    name: "Gemini",
    dates: "May 21 - June 20",
    element: "Air",
    traits: ["Adaptable", "Outgoing", "Intelligent"],
    luckyNumbers: [3, 12, 21],
    luckyColors: ["Yellow", "Blue"],
    description:
      "Gemini is versatile, expressive, and quick-witted, with a natural curiosity about life and others.",
  },
  // Add more zodiac signs...
];

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
                    <h3 className="font-semibold mb-2">Key Traits</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {sign.traits.map((trait) => (
                        <li key={trait}>{trait}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="zodiac-card">
                <h3 className="font-semibold mb-4">About {sign.name}</h3>
                <p className="text-muted-foreground mb-6">{sign.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Lucky Numbers</h4>
                    <p className="text-muted-foreground">
                      {sign.luckyNumbers.join(", ")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lucky Colors</h4>
                    <p className="text-muted-foreground">
                      {sign.luckyColors.join(", ")}
                    </p>
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
