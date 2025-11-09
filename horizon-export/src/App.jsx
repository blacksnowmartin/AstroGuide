
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import DailyHoroscope from "@/components/DailyHoroscope";
import ZodiacSigns from "@/components/ZodiacSigns";
import Compatibility from "@/components/Compatibility";
import Numerology from "@/components/Numerology";
import TarotReading from "@/components/TarotReading";
import MoonPhase from "@/components/MoonPhase";
import ChineseZodiac from "@/components/ChineseZodiac";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

function App() {
  const { toast } = useToast();
  const [showDailyTip, setShowDailyTip] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowDailyTip(true);
      toast({
        title: "✨ Daily Tip",
        description: "Take a moment to reflect on your cosmic journey today.",
        duration: 5000,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/daily-horoscope"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <DailyHoroscope />
                </motion.div>
              }
            />
            <Route
              path="/zodiac-signs"
              element={
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ZodiacSigns />
                </motion.div>
              }
            />
            <Route
              path="/compatibility"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Compatibility />
                </motion.div>
              }
            />
            <Route
              path="/numerology"
              element={
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Numerology />
                </motion.div>
              }
            />
            <Route
              path="/tarot"
              element={
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TarotReading />
                </motion.div>
              }
            />
            <Route
              path="/moon-phase"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoonPhase />
                </motion.div>
              }
            />
            <Route
              path="/chinese-zodiac"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChineseZodiac />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {showDailyTip && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="daily-tip"
        >
          <h3 className="text-lg font-semibold mb-2">✨ Cosmic Wisdom</h3>
          <p className="text-sm text-muted-foreground">
            The stars align to remind you: Your potential is limitless as the
            universe itself.
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default App;
