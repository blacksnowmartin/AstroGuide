
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Numerology() {
  const [birthdate, setBirthdate] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [result, setResult] = React.useState(null);
  const { toast } = useToast();

  const letterToNumber = (letter) => {
    const mapping = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
      J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
      S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
    };
    return mapping[letter.toUpperCase()] || 0;
  };

  const reduceToSingleDigit = (num) => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
  };

  const calculateLifePathNumber = (date) => {
    const dateString = date.replace(/-/g, "");
    let sum = 0;
    for (let digit of dateString) {
      sum += parseInt(digit);
    }
    return reduceToSingleDigit(sum);
  };

  const calculateExpressionNumber = (name) => {
    if (!name) return null;
    const nameWithoutSpaces = name.replace(/\s/g, "");
    let sum = 0;
    for (let letter of nameWithoutSpaces) {
      sum += letterToNumber(letter);
    }
    return reduceToSingleDigit(sum);
  };

  const calculateSoulNumber = (name) => {
    if (!name) return null;
    const vowels = "AEIOU";
    let sum = 0;
    for (let letter of name.toUpperCase()) {
      if (vowels.includes(letter)) {
        sum += letterToNumber(letter);
      }
    }
    return reduceToSingleDigit(sum);
  };

  const calculatePersonalityNumber = (name) => {
    if (!name) return null;
    const vowels = "AEIOU";
    let sum = 0;
    for (let letter of name.toUpperCase()) {
      if (!vowels.includes(letter) && letter !== " ") {
        sum += letterToNumber(letter);
      }
    }
    return reduceToSingleDigit(sum);
  };

  const getLifePathMeaning = (number) => {
    const meanings = {
      1: "The Leader: Independent, ambitious, and innovative. You're a natural born leader with strong determination.",
      2: "The Mediator: Diplomatic, sensitive, and cooperative. You excel in partnerships and bringing harmony.",
      3: "The Creator: Expressive, optimistic, and creative. You have a natural gift for communication and art.",
      4: "The Builder: Practical, reliable, and hardworking. You create solid foundations for success.",
      5: "The Freedom Seeker: Adventurous, versatile, and progressive. You thrive on change and freedom.",
      6: "The Nurturer: Responsible, caring, and protective. You have a natural ability to help and heal others.",
      7: "The Seeker: Analytical, introspective, and spiritual. You seek deeper meaning and understanding.",
      8: "The Achiever: Ambitious, successful, and material-oriented. You have natural business and leadership abilities.",
      9: "The Humanitarian: Compassionate, selfless, and wise. You work towards the greater good of humanity.",
      11: "The Intuitive: Highly intuitive, inspirational, and idealistic. You have great spiritual potential.",
      22: "The Master Builder: Practical idealist with the ability to turn dreams into reality on a large scale.",
      33: "The Master Teacher: Compassionate, healing, and dedicated to uplifting humanity.",
    };
    return meanings[number] || meanings[reduceToSingleDigit(number)];
  };

  const getExpressionMeaning = (number) => {
    const meanings = {
      1: "Natural leader with creative talents. Express yourself through innovation and originality.",
      2: "Diplomatic and cooperative. Your expression thrives in partnerships and harmony.",
      3: "Creative and expressive. Use your artistic talents and communication skills.",
      4: "Practical and methodical. Express yourself through organization and building.",
      5: "Versatile and adventurous. Express yourself through change and freedom.",
      6: "Nurturing and responsible. Express yourself through service and care.",
      7: "Analytical and spiritual. Express yourself through knowledge and wisdom.",
      8: "Ambitious and material-oriented. Express yourself through achievement and success.",
      9: "Humanitarian and compassionate. Express yourself through service to others.",
      11: "Inspirational and intuitive. Express yourself through spiritual guidance.",
      22: "Master builder. Express yourself through large-scale projects and achievements.",
      33: "Master teacher. Express yourself through healing and uplifting others.",
    };
    return meanings[number] || meanings[reduceToSingleDigit(number)];
  };

  const getSoulMeaning = (number) => {
    const meanings = {
      1: "Your soul desires independence and leadership. You crave being first and in control.",
      2: "Your soul desires peace, harmony, and partnership. You seek emotional connection.",
      3: "Your soul desires creative expression and joy. You want to share your talents.",
      4: "Your soul desires security and stability. You seek a solid foundation.",
      5: "Your soul desires freedom and adventure. You crave variety and excitement.",
      6: "Your soul desires to nurture and care for others. You seek love and family.",
      7: "Your soul desires spiritual understanding and solitude. You seek truth and wisdom.",
      8: "Your soul desires material success and recognition. You seek power and achievement.",
      9: "Your soul desires to serve humanity. You seek universal love and compassion.",
      11: "Your soul desires spiritual enlightenment and inspiration.",
      22: "Your soul desires to build something lasting and meaningful.",
      33: "Your soul desires to teach and heal others on a grand scale.",
    };
    return meanings[number] || meanings[reduceToSingleDigit(number)];
  };

  const getPersonalityMeaning = (number) => {
    const meanings = {
      1: "You appear confident, independent, and assertive. People see you as a natural leader.",
      2: "You appear diplomatic, gentle, and cooperative. People see you as peace-loving.",
      3: "You appear creative, optimistic, and expressive. People see you as artistic and fun.",
      4: "You appear practical, reliable, and organized. People see you as dependable.",
      5: "You appear adventurous, versatile, and exciting. People see you as dynamic.",
      6: "You appear nurturing, responsible, and caring. People see you as loving.",
      7: "You appear mysterious, analytical, and spiritual. People see you as wise.",
      8: "You appear ambitious, powerful, and successful. People see you as a leader.",
      9: "You appear compassionate, wise, and humanitarian. People see you as giving.",
      11: "You appear inspirational and spiritually aware.",
      22: "You appear as a master builder and practical idealist.",
      33: "You appear as a master teacher and healer.",
    };
    return meanings[number] || meanings[reduceToSingleDigit(number)];
  };

  const handleCalculate = () => {
    if (!birthdate) {
      toast({
        title: "Please enter your birthdate",
        description: "Birthdate is required for calculation",
        variant: "destructive",
      });
      return;
    }

    const lifePath = calculateLifePathNumber(birthdate);
    const expression = fullName ? calculateExpressionNumber(fullName) : null;
    const soul = fullName ? calculateSoulNumber(fullName) : null;
    const personality = fullName ? calculatePersonalityNumber(fullName) : null;

    setResult({
      lifePath: {
        number: lifePath,
        meaning: getLifePathMeaning(lifePath),
      },
      expression: expression ? {
        number: expression,
        meaning: getExpressionMeaning(expression),
      } : null,
      soul: soul ? {
        number: soul,
        meaning: getSoulMeaning(soul),
      } : null,
      personality: personality ? {
        number: personality,
        meaning: getPersonalityMeaning(personality),
      } : null,
    });

    toast({
      title: "Numerology Calculated!",
      description: `Life Path: ${lifePath}${expression ? `, Expression: ${expression}` : ""}`,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Numerology Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Discover your Life Path, Expression, Soul, and Personality numbers
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="zodiac-card"
        >
          <h2 className="text-xl font-semibold mb-4">Enter Your Information</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Birthdate (Required)</label>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="w-full p-3 rounded-md border bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Full Name (Optional - for Expression, Soul, Personality)</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full birth name"
                className="w-full p-3 rounded-md border bg-background"
              />
            </div>
          </div>
          <Button
            onClick={handleCalculate}
            className="w-full mt-4"
            disabled={!birthdate}
          >
            Calculate Numerology
          </Button>
        </motion.div>

        {result && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="numerology-result"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Your Numbers</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Life Path</p>
                  <p className="text-3xl font-bold">{result.lifePath.number}</p>
                </div>
                {result.expression && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Expression</p>
                    <p className="text-3xl font-bold">{result.expression.number}</p>
                  </div>
                )}
                {result.soul && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Soul</p>
                    <p className="text-3xl font-bold">{result.soul.number}</p>
                  </div>
                )}
                {result.personality && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Personality</p>
                    <p className="text-3xl font-bold">{result.personality.number}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-8 border shadow-lg mb-8"
        >
          <Tabs defaultValue="lifePath" className="w-full">
            <TabsList className={`grid w-full mb-6 ${
              [result.expression, result.soul, result.personality].filter(Boolean).length === 3
                ? "grid-cols-4"
                : [result.expression, result.soul, result.personality].filter(Boolean).length === 2
                ? "grid-cols-3"
                : [result.expression, result.soul, result.personality].filter(Boolean).length === 1
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}>
              <TabsTrigger value="lifePath">Life Path</TabsTrigger>
              {result.expression && <TabsTrigger value="expression">Expression</TabsTrigger>}
              {result.soul && <TabsTrigger value="soul">Soul</TabsTrigger>}
              {result.personality && <TabsTrigger value="personality">Personality</TabsTrigger>}
            </TabsList>

            <TabsContent value="lifePath" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">Life Path Number: {result.lifePath.number}</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {result.lifePath.meaning}
              </p>
            </TabsContent>

            {result.expression && (
              <TabsContent value="expression" className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">Expression Number: {result.expression.number}</h3>
                  <p className="text-sm text-muted-foreground">Also known as Destiny Number</p>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {result.expression.meaning}
                </p>
              </TabsContent>
            )}

            {result.soul && (
              <TabsContent value="soul" className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">Soul Number: {result.soul.number}</h3>
                  <p className="text-sm text-muted-foreground">Also known as Heart's Desire Number</p>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {result.soul.meaning}
                </p>
              </TabsContent>
            )}

            {result.personality && (
              <TabsContent value="personality" className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">Personality Number: {result.personality.number}</h3>
                  <p className="text-sm text-muted-foreground">How others perceive you</p>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {result.personality.meaning}
                </p>
              </TabsContent>
            )}
          </Tabs>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="bg-card rounded-xl p-8 border">
          <h3 className="text-2xl font-semibold mb-4">About Numerology Numbers</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-semibold mb-2">Life Path Number</h4>
              <p className="text-sm text-muted-foreground">
                Calculated from your birthdate, this number reveals your life's purpose and the path you're destined to follow.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Expression Number</h4>
              <p className="text-sm text-muted-foreground">
                Calculated from your full birth name, this number reveals your natural talents and how you express yourself.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Soul Number (Heart's Desire)</h4>
              <p className="text-sm text-muted-foreground">
                Calculated from vowels in your name, this number reveals your inner desires and what motivates you.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Personality Number</h4>
              <p className="text-sm text-muted-foreground">
                Calculated from consonants in your name, this number reveals how others perceive you.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Numerology;
