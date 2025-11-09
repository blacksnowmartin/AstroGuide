
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const zodiacSigns = [
  { name: "Aries", dates: "March 21 - April 19" },
  { name: "Taurus", dates: "April 20 - May 20" },
  { name: "Gemini", dates: "May 21 - June 20" },
  { name: "Cancer", dates: "June 21 - July 22" },
  { name: "Leo", dates: "July 23 - August 22" },
  { name: "Virgo", dates: "August 23 - September 22" },
  { name: "Libra", dates: "September 23 - October 22" },
  { name: "Scorpio", dates: "October 23 - November 21" },
  { name: "Sagittarius", dates: "November 22 - December 21" },
  { name: "Capricorn", dates: "December 22 - January 19" },
  { name: "Aquarius", dates: "January 20 - February 18" },
  { name: "Pisces", dates: "February 19 - March 20" },
];

const horoscopeMessages = {
  Aries: "Today brings exciting opportunities for leadership. Trust your instincts!",
  Taurus: "Focus on self-care and material comfort. A financial opportunity awaits.",
  Gemini: "Communication flows smoothly today. Share your brilliant ideas!",
  Cancer: "Trust your intuition in emotional matters. Family brings joy.",
  Leo: "Your creative energy shines bright. Express yourself boldly!",
  Virgo: "Details matter today. Your analytical skills bring success.",
  Libra: "Balance and harmony are highlighted. Relationships flourish.",
  Scorpio: "Transformation is key today. Embrace positive changes.",
  Sagittarius: "Adventure calls! Explore new horizons with confidence.",
  Capricorn: "Career goals align with the stars. Take that next step!",
  Aquarius: "Innovation is your strength today. Think outside the box!",
  Pisces: "Your intuition is heightened. Trust your inner voice.",
};

function DailyHoroscope() {
  const [selectedSign, setSelectedSign] = React.useState(null);
  const { toast } = useToast();

  const handleSignSelect = (sign) => {
    setSelectedSign(sign);
    toast({
      title: `${sign.name} Horoscope`,
      description: "Your daily horoscope has been updated!",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Daily Horoscope</h1>
        <p className="text-lg text-muted-foreground">
          Select your zodiac sign to receive your daily cosmic guidance
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {zodiacSigns.map((sign, index) => (
          <motion.div
            key={sign.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`zodiac-card cursor-pointer ${
              selectedSign?.name === sign.name
                ? "border-primary bg-primary/5"
                : ""
            }`}
            onClick={() => handleSignSelect(sign)}
          >
            <h3 className="text-lg font-semibold mb-2">{sign.name}</h3>
            <p className="text-sm text-muted-foreground">{sign.dates}</p>
          </motion.div>
        ))}
      </div>

      {selectedSign && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-6 shadow-lg border"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">{selectedSign.name}</h2>
            <p className="text-muted-foreground">{selectedSign.dates}</p>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              {horoscopeMessages[selectedSign.name]}
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              onClick={() =>
                toast({
                  title: "Horoscope Refreshed",
                  description: "Your cosmic guidance has been updated!",
                })
              }
            >
              Refresh Horoscope
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default DailyHoroscope;
