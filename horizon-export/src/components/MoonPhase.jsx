import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function MoonPhase() {
  const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().split('T')[0]);
  const [moonData, setMoonData] = React.useState(null);
  const { toast } = useToast();

  // Simplified moon phase calculation
  // For production, you'd use a proper astronomical library
  const calculateMoonPhase = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    // Julian day calculation
    let jd = Math.floor(365.25 * (year + 4800)) + 
             Math.floor(30.6001 * (month + 1)) + 
             day - 32045;

    if (month < 3) {
      jd -= Math.floor(0.25 * (year + 4799));
    }

    // Days since last new moon (approximate)
    const daysSinceNewMoon = (jd - 2451549.5) % 29.53058867;
    
    // Determine phase
    let phase;
    let phaseName;
    let phaseDescription;
    let illumination;
    let zodiacSign;
    let zodiacEmoji;

    if (daysSinceNewMoon < 1.84) {
      phase = "New Moon";
      phaseName = "New Moon";
      phaseDescription = "A time for new beginnings, setting intentions, and planting seeds for the future.";
      illumination = 0;
      zodiacSign = getZodiacSign(day, month);
      zodiacEmoji = "🌑";
    } else if (daysSinceNewMoon < 5.53) {
      phase = "Waxing Crescent";
      phaseName = "Waxing Crescent";
      phaseDescription = "Time to take action on your intentions. Begin new projects and make commitments.";
      illumination = (daysSinceNewMoon / 1.84) * 50;
      zodiacSign = getZodiacSign(day, month);
      zodiacEmoji = "🌒";
    } else if (daysSinceNewMoon < 9.22) {
      phase = "First Quarter";
      phaseName = "First Quarter";
      phaseDescription = "Challenges may arise. Stay focused and make necessary adjustments.";
      illumination = 50;
      zodiacSign = getZodiacSign(day, month);
      zodiacEmoji = "🌓";
    } else if (daysSinceNewMoon < 12.91) {
      phase = "Waxing Gibbous";
      phaseName = "Waxing Gibbous";
      phaseDescription = "Refine and adjust your plans. Make improvements before the full moon.";
      illumination = 50 + ((daysSinceNewMoon - 9.22) / 3.69) * 50;
      zodiacSign = getZodiacSign(day, month);
      zodiacEmoji = "🌔";
    } else if (daysSinceNewMoon < 16.61) {
      phase = "Full Moon";
      phaseName = "Full Moon";
      phaseDescription = "Peak energy and illumination. Time for release, gratitude, and celebration.";
      illumination = 100;
      zodiacSign = getZodiacSign(day, month);
      zodiacEmoji = "🌕";
    } else if (daysSinceNewMoon < 20.30) {
      phase = "Waning Gibbous";
      phaseName = "Waning Gibbous";
      phaseDescription = "Share wisdom and give thanks. Reflect on what you've learned.";
      illumination = 100 - ((daysSinceNewMoon - 16.61) / 3.69) * 50;
      zodiacSign = getZodiacSign(day, month);
      zodiacEmoji = "🌖";
    } else if (daysSinceNewMoon < 23.99) {
      phase = "Last Quarter";
      phaseName = "Last Quarter";
      phaseDescription = "Release what no longer serves you. Forgive and let go.";
      illumination = 50;
      zodiacSign = getZodiacSign(day, month);
      zodiacEmoji = "🌗";
    } else {
      phase = "Waning Crescent";
      phaseName = "Waning Crescent";
      phaseDescription = "Rest, reflect, and prepare for the new cycle. Release and surrender.";
      illumination = 50 - ((daysSinceNewMoon - 23.99) / 5.54) * 50;
      zodiacSign = getZodiacSign(day, month);
      zodiacEmoji = "🌘";
    }

    return {
      phase,
      phaseName,
      phaseDescription,
      illumination: Math.round(illumination),
      zodiacSign,
      zodiacEmoji,
      daysSinceNewMoon: Math.round(daysSinceNewMoon * 10) / 10,
      nextNewMoon: 29.53 - daysSinceNewMoon,
    };
  };

  const getZodiacSign = (day, month) => {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    return "Pisces";
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const moonInfo = calculateMoonPhase(date);
    setMoonData(moonInfo);
    toast({
      title: "Moon Phase Calculated",
      description: `The moon is in ${moonInfo.phaseName} phase.`,
    });
  };

  React.useEffect(() => {
    const moonInfo = calculateMoonPhase(selectedDate);
    setMoonData(moonInfo);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Moon Phase Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Discover the current moon phase and its spiritual significance
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="zodiac-card"
        >
          <h2 className="text-xl font-semibold mb-4">Select Date</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            className="w-full p-3 rounded-md border bg-background mb-4"
          />
          <Button
            onClick={() => {
              const today = new Date().toISOString().split('T')[0];
              handleDateChange(today);
            }}
            variant="outline"
            className="w-full"
          >
            Use Today's Date
          </Button>
        </motion.div>

        {moonData && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="zodiac-card text-center"
          >
            <div className="text-6xl mb-4">{moonData.zodiacEmoji}</div>
            <h2 className="text-2xl font-bold mb-2">{moonData.phaseName}</h2>
            <p className="text-muted-foreground mb-4">
              {moonData.illumination}% Illuminated
            </p>
            <div className="w-full bg-muted rounded-full h-4 mb-4">
              <div
                className="bg-primary h-4 rounded-full transition-all duration-500"
                style={{ width: `${moonData.illumination}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Moon in {moonData.zodiacSign}
            </p>
            <p className="text-sm text-muted-foreground">
              Day {moonData.daysSinceNewMoon.toFixed(1)} of lunar cycle
            </p>
          </motion.div>
        )}
      </div>

      {moonData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-8 border shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Spiritual Meaning
          </h3>
          <p className="text-lg leading-relaxed text-muted-foreground text-center mb-6">
            {moonData.phaseDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-accent/50 rounded-lg">
              <p className="text-sm font-semibold mb-2">Phase</p>
              <p className="text-muted-foreground">{moonData.phaseName}</p>
            </div>
            <div className="text-center p-4 bg-accent/50 rounded-lg">
              <p className="text-sm font-semibold mb-2">Illumination</p>
              <p className="text-muted-foreground">{moonData.illumination}%</p>
            </div>
            <div className="text-center p-4 bg-accent/50 rounded-lg">
              <p className="text-sm font-semibold mb-2">Next New Moon</p>
              <p className="text-muted-foreground">
                {moonData.nextNewMoon.toFixed(1)} days
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-lg">
            <h4 className="font-semibold mb-3">Moon Phase Activities</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {moonData.phase === "New Moon" && (
                <>
                  <li>• Set new intentions and goals</li>
                  <li>• Plant seeds (literally or metaphorically)</li>
                  <li>• Start new projects</li>
                  <li>• Meditate on what you want to manifest</li>
                </>
              )}
              {moonData.phase === "Waxing Crescent" && (
                <>
                  <li>• Take action on your intentions</li>
                  <li>• Make plans and commitments</li>
                  <li>• Build momentum</li>
                  <li>• Gather resources</li>
                </>
              )}
              {moonData.phase === "First Quarter" && (
                <>
                  <li>• Overcome challenges</li>
                  <li>• Make adjustments to your plans</li>
                  <li>• Stay focused and determined</li>
                  <li>• Take decisive action</li>
                </>
              )}
              {moonData.phase === "Waxing Gibbous" && (
                <>
                  <li>• Refine and improve your work</li>
                  <li>• Make final adjustments</li>
                  <li>• Stay patient and persistent</li>
                  <li>• Prepare for the peak</li>
                </>
              )}
              {moonData.phase === "Full Moon" && (
                <>
                  <li>• Celebrate achievements</li>
                  <li>• Release what no longer serves you</li>
                  <li>• Express gratitude</li>
                  <li>• Charge crystals and tools</li>
                </>
              )}
              {moonData.phase === "Waning Gibbous" && (
                <>
                  <li>• Share wisdom and knowledge</li>
                  <li>• Give thanks and gratitude</li>
                  <li>• Reflect on lessons learned</li>
                  <li>• Teach and mentor others</li>
                </>
              )}
              {moonData.phase === "Last Quarter" && (
                <>
                  <li>• Forgive and let go</li>
                  <li>• Release negative patterns</li>
                  <li>• Cleanse your space</li>
                  <li>• Practice detachment</li>
                </>
              )}
              {moonData.phase === "Waning Crescent" && (
                <>
                  <li>• Rest and recharge</li>
                  <li>• Reflect on the past cycle</li>
                  <li>• Prepare for renewal</li>
                  <li>• Surrender and trust</li>
                </>
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MoonPhase;

