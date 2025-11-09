
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function Numerology() {
  const [birthdate, setBirthdate] = React.useState("");
  const [result, setResult] = React.useState(null);
  const { toast } = useToast();

  const calculateLifePathNumber = (date) => {
    const dateString = date.replace(/-/g, "");
    let sum = 0;
    for (let digit of dateString) {
      sum += parseInt(digit);
    }

    while (sum > 9) {
      let newSum = 0;
      sum.toString().split("").forEach(digit => {
        newSum += parseInt(digit);
      });
      sum = newSum;
    }

    return sum;
  };

  const getNumberMeaning = (number) => {
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
    };
    return meanings[number];
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

    const number = calculateLifePathNumber(birthdate);
    setResult({
      number,
      meaning: getNumberMeaning(number),
    });

    toast({
      title: "Life Path Number Calculated!",
      description: "Your numerological insights are ready.",
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
          Discover your Life Path Number and its meaning
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="zodiac-card"
        >
          <h2 className="text-xl font-semibold mb-4">Enter Your Birthdate</h2>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full p-2 rounded-md border bg-background"
          />
          <Button
            onClick={handleCalculate}
            className="w-full mt-4"
            disabled={!birthdate}
          >
            Calculate Life Path Number
          </Button>
        </motion.div>

        {result && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="numerology-result"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">
                Your Life Path Number is {result.number}
              </h2>
            </div>
            <p className="text-lg leading-relaxed">{result.meaning}</p>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="bg-card rounded-xl p-8 border">
          <h3 className="text-2xl font-semibold mb-4">About Life Path Numbers</h3>
          <p className="text-muted-foreground">
            Your Life Path Number reveals your life's purpose and the path you're
            destined to follow. It's calculated using your complete birthdate and
            provides insights into your character, opportunities, and challenges.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Numerology;
