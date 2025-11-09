
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

function Compatibility() {
  const [sign1, setSign1] = React.useState("");
  const [sign2, setSign2] = React.useState("");
  const [result, setResult] = React.useState(null);
  const { toast } = useToast();

  const calculateCompatibility = () => {
    if (!sign1 || !sign2) {
      toast({
        title: "Please select both signs",
        description: "Both zodiac signs are required for compatibility check",
        variant: "destructive",
      });
      return;
    }

    // Simple compatibility calculation for demo
    const score = Math.floor(Math.random() * 41) + 60; // 60-100
    const getDescription = (score) => {
      if (score >= 90) return "Perfect Match! The stars align perfectly for this combination.";
      if (score >= 80) return "Great Match! There's strong cosmic harmony between these signs.";
      if (score >= 70) return "Good Match! This combination has potential for growth.";
      return "Fair Match! Some effort may be needed to maintain harmony.";
    };

    setResult({
      score,
      description: getDescription(score),
    });

    toast({
      title: "Compatibility Calculated!",
      description: "Your cosmic match has been revealed.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Zodiac Compatibility</h1>
        <p className="text-lg text-muted-foreground">
          Discover how compatible you are with other zodiac signs
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="zodiac-card"
        >
          <h2 className="text-xl font-semibold mb-4">Select First Sign</h2>
          <div className="grid grid-cols-2 gap-2">
            {zodiacSigns.map((sign) => (
              <Button
                key={sign}
                variant={sign1 === sign ? "default" : "outline"}
                onClick={() => setSign1(sign)}
                className="w-full"
              >
                {sign}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="zodiac-card"
        >
          <h2 className="text-xl font-semibold mb-4">Select Second Sign</h2>
          <div className="grid grid-cols-2 gap-2">
            {zodiacSigns.map((sign) => (
              <Button
                key={sign}
                variant={sign2 === sign ? "default" : "outline"}
                onClick={() => setSign2(sign)}
                className="w-full"
              >
                {sign}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="text-center mb-8">
        <Button
          size="lg"
          onClick={calculateCompatibility}
          disabled={!sign1 || !sign2}
        >
          Calculate Compatibility
        </Button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-8 text-center"
        >
          <div className="compatibility-score mx-auto mb-6">
            <span className="text-4xl font-bold">{result.score}%</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            {sign1} & {sign2}
          </h3>
          <p className="text-lg text-muted-foreground">{result.description}</p>
        </motion.div>
      )}
    </div>
  );
}

export default Compatibility;
