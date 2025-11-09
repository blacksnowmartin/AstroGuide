
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodiacSigns, getCompatibility } from "@/lib/zodiacData";

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

    if (sign1 === sign2) {
      toast({
        title: "Same Sign Selected",
        description: "Select two different signs for compatibility analysis",
        variant: "destructive",
      });
      return;
    }

    const compatibility = getCompatibility(sign1, sign2);
    
    if (!compatibility) {
      toast({
        title: "Error",
        description: "Unable to calculate compatibility",
        variant: "destructive",
      });
      return;
    }

    // Get sign data for additional insights
    const sign1Data = zodiacSigns.find(s => s.name === sign1);
    const sign2Data = zodiacSigns.find(s => s.name === sign2);

    // Calculate relationship insights
    const getRelationshipTips = () => {
      const tips = [];
      if (sign1Data.element === sign2Data.element) {
        tips.push(`Both signs share the ${sign1Data.element} element, creating natural understanding.`);
      } else if (
        (sign1Data.element === "Fire" && sign2Data.element === "Air") ||
        (sign1Data.element === "Air" && sign2Data.element === "Fire") ||
        (sign1Data.element === "Water" && sign2Data.element === "Earth") ||
        (sign1Data.element === "Earth" && sign2Data.element === "Water")
      ) {
        tips.push("Your elements complement each other well, creating balance.");
      } else {
        tips.push("Your different elements may require understanding and compromise.");
      }
      
      if (compatibility.score >= 85) {
        tips.push("This is a highly compatible match with strong potential for long-term happiness.");
      } else if (compatibility.score >= 70) {
        tips.push("This relationship has good potential but will benefit from open communication.");
      } else {
        tips.push("This combination may require extra effort, but understanding differences can lead to growth.");
      }
      
      return tips;
    };

    const getStrengths = () => {
      const strengths = [];
      if (sign1Data.element === sign2Data.element || 
          (sign1Data.element === "Fire" && sign2Data.element === "Air") ||
          (sign1Data.element === "Air" && sign2Data.element === "Fire")) {
        strengths.push("Shared energy and enthusiasm");
      }
      if (compatibility.score >= 80) {
        strengths.push("Strong emotional connection");
        strengths.push("Mutual respect and understanding");
      }
      if (sign1Data.compatibleSigns.includes(sign2)) {
        strengths.push("Astrologically favorable match");
      }
      return strengths.length > 0 ? strengths : ["Potential for growth through differences"];
    };

    const getChallenges = () => {
      const challenges = [];
      if (sign1Data.element !== sign2Data.element && 
          !((sign1Data.element === "Fire" && sign2Data.element === "Air") ||
            (sign1Data.element === "Air" && sign2Data.element === "Fire") ||
            (sign1Data.element === "Water" && sign2Data.element === "Earth") ||
            (sign1Data.element === "Earth" && sign2Data.element === "Water"))) {
        challenges.push("Different approaches to life and emotions");
      }
      if (compatibility.score < 70) {
        challenges.push("May require extra communication and compromise");
      }
      if (sign1Data.quality !== sign2Data.quality) {
        challenges.push("Different relationship styles and needs");
      }
      return challenges.length > 0 ? challenges : ["Minor adjustments may be needed"];
    };

    setResult({
      score: compatibility.score,
      type: compatibility.type,
      description: compatibility.description,
      tips: getRelationshipTips(),
      strengths: getStrengths(),
      challenges: getChallenges(),
      sign1Data,
      sign2Data,
    });

    toast({
      title: "Compatibility Calculated!",
      description: `${sign1} & ${sign2}: ${compatibility.score}% compatibility`,
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
                key={sign.name}
                variant={sign1 === sign.name ? "default" : "outline"}
                onClick={() => setSign1(sign.name)}
                className="w-full"
              >
                {sign.name}
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
                key={sign.name}
                variant={sign2 === sign.name ? "default" : "outline"}
                onClick={() => setSign2(sign.name)}
                className="w-full"
              >
                {sign.name}
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
          className="bg-card rounded-xl p-8 border shadow-lg"
        >
          <div className="text-center mb-8">
            <div className="compatibility-score mx-auto mb-6">
              <span className="text-4xl font-bold">{result.score}%</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              {sign1} & {sign2}
            </h3>
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
              result.score >= 85 ? "bg-green-500/20 text-green-600 dark:text-green-400" :
              result.score >= 70 ? "bg-blue-500/20 text-blue-600 dark:text-blue-400" :
              "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
            }`}>
              {result.type} Match
            </span>
          </div>

          <Tabs defaultValue="overall" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overall">Overall</TabsTrigger>
              <TabsTrigger value="strengths">Strengths</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="tips">Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="overall" className="space-y-4">
              <p className="text-lg text-muted-foreground text-center mb-6">
                {result.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="zodiac-card">
                  <h4 className="font-semibold mb-2">{sign1}</h4>
                  <p className="text-sm text-muted-foreground">Element: {result.sign1Data.element}</p>
                  <p className="text-sm text-muted-foreground">Quality: {result.sign1Data.quality}</p>
                  <p className="text-sm text-muted-foreground">Ruling Planet: {result.sign1Data.rulingPlanet}</p>
                </div>
                <div className="zodiac-card">
                  <h4 className="font-semibold mb-2">{sign2}</h4>
                  <p className="text-sm text-muted-foreground">Element: {result.sign2Data.element}</p>
                  <p className="text-sm text-muted-foreground">Quality: {result.sign2Data.quality}</p>
                  <p className="text-sm text-muted-foreground">Ruling Planet: {result.sign2Data.rulingPlanet}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="strengths" className="space-y-4">
              <h4 className="font-semibold text-lg mb-4">Relationship Strengths</h4>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-muted-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-4">
              <h4 className="font-semibold text-lg mb-4">Potential Challenges</h4>
              <ul className="space-y-2">
                {result.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">⚠</span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="tips" className="space-y-4">
              <h4 className="font-semibold text-lg mb-4">Relationship Tips</h4>
              <ul className="space-y-3">
                {result.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                    <span className="text-primary mt-1">💡</span>
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </motion.div>
      )}
    </div>
  );
}

export default Compatibility;
