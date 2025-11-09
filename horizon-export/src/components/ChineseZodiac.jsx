import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chineseZodiacSigns, getChineseZodiac, getElement } from "@/lib/chineseZodiacData";

function ChineseZodiac() {
  const [birthYear, setBirthYear] = React.useState("");
  const [result, setResult] = React.useState(null);
  const { toast } = useToast();

  const calculateZodiac = () => {
    if (!birthYear || birthYear < 1900 || birthYear > 2100) {
      toast({
        title: "Please enter a valid year",
        description: "Year must be between 1900 and 2100",
        variant: "destructive",
      });
      return;
    }

    const year = parseInt(birthYear);
    const zodiac = getChineseZodiac(year);
    const element = getElement(year);

    setResult({
      zodiac,
      element,
      year,
    });

    toast({
      title: "Chinese Zodiac Calculated!",
      description: `You are a ${zodiac.name} (${element} element)`,
    });
  };

  React.useEffect(() => {
    // Set default to current year and calculate
    const currentYear = new Date().getFullYear().toString();
    setBirthYear(currentYear);
    const year = parseInt(currentYear);
    const zodiac = getChineseZodiac(year);
    const element = getElement(year);
    setResult({
      zodiac,
      element,
      year,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Chinese Zodiac</h1>
        <p className="text-lg text-muted-foreground">
          Discover your Chinese zodiac sign and learn about its characteristics
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="zodiac-card"
        >
          <h2 className="text-xl font-semibold mb-4">Enter Your Birth Year</h2>
          <input
            type="number"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            placeholder="e.g., 1990"
            min="1900"
            max="2100"
            className="w-full p-3 rounded-md border bg-background mb-4"
          />
          <Button
            onClick={calculateZodiac}
            className="w-full"
            disabled={!birthYear}
          >
            Calculate Chinese Zodiac
          </Button>
        </motion.div>

        {result && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="zodiac-card text-center"
          >
            <h2 className="text-2xl font-bold mb-2">
              {result.zodiac.name} ({result.element})
            </h2>
            <p className="text-muted-foreground mb-4">Born in {result.year}</p>
            <div className="text-6xl mb-4">
              {result.zodiac.name === "Rat" && "🐀"}
              {result.zodiac.name === "Ox" && "🐂"}
              {result.zodiac.name === "Tiger" && "🐅"}
              {result.zodiac.name === "Rabbit" && "🐇"}
              {result.zodiac.name === "Dragon" && "🐉"}
              {result.zodiac.name === "Snake" && "🐍"}
              {result.zodiac.name === "Horse" && "🐴"}
              {result.zodiac.name === "Sheep" && "🐑"}
              {result.zodiac.name === "Monkey" && "🐵"}
              {result.zodiac.name === "Rooster" && "🐓"}
              {result.zodiac.name === "Dog" && "🐕"}
              {result.zodiac.name === "Pig" && "🐷"}
            </div>
            <p className="text-sm text-muted-foreground">
              Element: {result.element}
            </p>
          </motion.div>
        )}
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-8 border shadow-lg"
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="traits">Traits</TabsTrigger>
              <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
              <TabsTrigger value="luck">Luck</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {result.zodiac.description}
              </p>
            </TabsContent>

            <TabsContent value="traits" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {result.zodiac.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-muted-foreground">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Weaknesses</h4>
                  <ul className="space-y-2">
                    {result.zodiac.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">⚠</span>
                        <span className="text-muted-foreground">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="compatibility" className="space-y-4">
              <h4 className="font-semibold mb-3">Most Compatible With</h4>
              <div className="flex gap-2 flex-wrap">
                {result.zodiac.compatibility.map((comp, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent rounded-full text-sm font-semibold"
                  >
                    {comp}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                These signs tend to have harmonious relationships with {result.zodiac.name}.
              </p>
            </TabsContent>

            <TabsContent value="luck" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Lucky Colors</h4>
                  <div className="flex gap-2 flex-wrap">
                    {result.zodiac.luckyColors.map((color, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Lucky Numbers</h4>
                  <div className="flex gap-2 flex-wrap">
                    {result.zodiac.luckyNumbers.map((num, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">
          All Chinese Zodiac Signs
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {chineseZodiacSigns.map((sign, index) => (
            <motion.div
              key={sign.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="zodiac-card cursor-pointer hover:scale-105 transition-transform"
              onClick={() => {
                const year = sign.years[sign.years.length - 1].toString();
                setBirthYear(year);
                const zodiac = getChineseZodiac(parseInt(year));
                const element = getElement(parseInt(year));
                setResult({
                  zodiac,
                  element,
                  year: parseInt(year),
                });
                toast({
                  title: "Chinese Zodiac Selected!",
                  description: `You are a ${zodiac.name} (${element} element)`,
                });
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">
                  {sign.name === "Rat" && "🐀"}
                  {sign.name === "Ox" && "🐂"}
                  {sign.name === "Tiger" && "🐅"}
                  {sign.name === "Rabbit" && "🐇"}
                  {sign.name === "Dragon" && "🐉"}
                  {sign.name === "Snake" && "🐍"}
                  {sign.name === "Horse" && "🐴"}
                  {sign.name === "Sheep" && "🐑"}
                  {sign.name === "Monkey" && "🐵"}
                  {sign.name === "Rooster" && "🐓"}
                  {sign.name === "Dog" && "🐕"}
                  {sign.name === "Pig" && "🐷"}
                </div>
                <h4 className="font-semibold">{sign.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {sign.element}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ChineseZodiac;

