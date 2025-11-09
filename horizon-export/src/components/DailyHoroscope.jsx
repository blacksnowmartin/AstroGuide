
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodiacSigns } from "@/lib/zodiacData";

const horoscopeMessages = {
  Aries: {
    overall: "Today brings exciting opportunities for leadership. Trust your instincts and take bold action!",
    love: "Passion is in the air. Single Aries may meet someone exciting, while couples should plan a spontaneous date.",
    career: "Your leadership skills are highlighted. A promotion or new project opportunity may arise.",
    health: "Energy levels are high. Engage in physical activities, but avoid overexertion.",
  },
  Taurus: {
    overall: "Focus on self-care and material comfort. A financial opportunity awaits those who are patient.",
    love: "Romance blooms with stability. Focus on building trust and creating beautiful moments together.",
    career: "Financial matters look positive. Review budgets and consider long-term investments.",
    health: "Pay attention to your body's needs. Relaxation and proper nutrition are essential.",
  },
  Gemini: {
    overall: "Communication flows smoothly today. Share your brilliant ideas and connect with others.",
    love: "Conversations deepen relationships. Express your feelings openly and listen to your partner.",
    career: "Networking opportunities abound. Your communication skills open new doors.",
    health: "Mental clarity is key. Meditation and journaling will help balance your busy mind.",
  },
  Cancer: {
    overall: "Trust your intuition in emotional matters. Family and home bring joy and comfort.",
    love: "Emotional connections deepen. Show vulnerability and nurture your relationships.",
    career: "Teamwork and collaboration bring success. Your caring nature is appreciated.",
    health: "Focus on emotional well-being. Spend time with loved ones and practice self-care.",
  },
  Leo: {
    overall: "Your creative energy shines bright. Express yourself boldly and share your talents.",
    love: "Romance is passionate and dramatic. Grand gestures and heartfelt expressions are favored.",
    career: "Your creativity and charisma open doors. Consider pursuing artistic or leadership roles.",
    health: "Vitality is high. Engage in activities that bring joy and express your personality.",
  },
  Virgo: {
    overall: "Details matter today. Your analytical skills bring success in all areas of life.",
    love: "Practical gestures show love. Help your partner with tasks and create organized plans together.",
    career: "Attention to detail pays off. Review contracts and focus on quality work.",
    health: "Routine and organization support well-being. Maintain healthy habits and regular check-ups.",
  },
  Libra: {
    overall: "Balance and harmony are highlighted. Relationships flourish with cooperation and understanding.",
    love: "Partnerships are blessed. Single Libras may find romance, couples should focus on harmony.",
    career: "Diplomacy and negotiation skills shine. Collaborative projects bring success.",
    health: "Balance is key. Alternate activity with rest, and maintain social connections.",
  },
  Scorpio: {
    overall: "Transformation is key today. Embrace positive changes and let go of what no longer serves.",
    love: "Deep connections intensify. Honest conversations and emotional intimacy are favored.",
    career: "Your intensity and determination lead to breakthroughs. Trust your instincts.",
    health: "Focus on transformation. Consider new wellness routines and release old patterns.",
  },
  Sagittarius: {
    overall: "Adventure calls! Explore new horizons with confidence and embrace opportunities for growth.",
    love: "Excitement and adventure in relationships. Plan trips or try new activities together.",
    career: "Expansion and learning opportunities arise. Consider further education or travel for work.",
    health: "Stay active and explore. Outdoor activities and new experiences boost well-being.",
  },
  Capricorn: {
    overall: "Career goals align with the stars. Take that next step toward your ambitions.",
    love: "Stability and commitment are favored. Build foundations for long-term relationships.",
    career: "Professional success is within reach. Set goals and work systematically toward them.",
    health: "Structure supports health. Maintain routines and focus on long-term wellness goals.",
  },
  Aquarius: {
    overall: "Innovation is your strength today. Think outside the box and embrace unique solutions.",
    love: "Friendship forms the basis of romance. Connect with like-minded individuals.",
    career: "Original ideas and technology bring success. Embrace innovation and collaboration.",
    health: "Mental and social well-being are priorities. Connect with communities and share ideas.",
  },
  Pisces: {
    overall: "Your intuition is heightened. Trust your inner voice and embrace your creative and spiritual side.",
    love: "Romance is dreamy and intuitive. Follow your heart and express your feelings artistically.",
    career: "Creative and compassionate work brings fulfillment. Trust your instincts in decisions.",
    health: "Spiritual and emotional well-being are key. Meditation and creative expression heal.",
  },
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
            transition={{ delay: index * 0.05 }}
            className={`zodiac-card cursor-pointer transition-all ${
              selectedSign?.name === sign.name
                ? "border-primary bg-primary/5 scale-105"
                : "hover:scale-102"
            }`}
            onClick={() => handleSignSelect(sign)}
          >
            <h3 className="text-lg font-semibold mb-2">{sign.name}</h3>
            <p className="text-sm text-muted-foreground">{sign.dates}</p>
            <p className="text-xs text-muted-foreground mt-1">{sign.element}</p>
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
            <p className="text-sm text-muted-foreground mt-2">
              Daily Horoscope for {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <Tabs defaultValue="overall" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overall">Overall</TabsTrigger>
              <TabsTrigger value="love">Love</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
            </TabsList>

            <TabsContent value="overall" className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {horoscopeMessages[selectedSign.name]?.overall}
              </p>
            </TabsContent>

            <TabsContent value="love" className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {horoscopeMessages[selectedSign.name]?.love}
              </p>
            </TabsContent>

            <TabsContent value="career" className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {horoscopeMessages[selectedSign.name]?.career}
              </p>
            </TabsContent>

            <TabsContent value="health" className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {horoscopeMessages[selectedSign.name]?.health}
              </p>
            </TabsContent>
          </Tabs>

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
