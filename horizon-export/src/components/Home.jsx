
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Discover Your Cosmic Journey
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the mysteries of the stars, understand your zodiac sign, and
          unlock the secrets of numerology with AstroGuide.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="zodiac-card"
        >
          <h3 className="text-xl font-semibold mb-3">Daily Horoscope</h3>
          <p className="text-muted-foreground mb-4">
            Get your personalized daily astrological guidance and insights.
          </p>
          <Link to="/daily-horoscope">
            <Button>Read Your Stars</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="zodiac-card"
        >
          <h3 className="text-xl font-semibold mb-3">Zodiac Signs</h3>
          <p className="text-muted-foreground mb-4">
            Explore detailed characteristics and traits of all zodiac signs.
          </p>
          <Link to="/zodiac-signs">
            <Button>Explore Signs</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="zodiac-card"
        >
          <h3 className="text-xl font-semibold mb-3">Compatibility</h3>
          <p className="text-muted-foreground mb-4">
            Discover how well you match with other zodiac signs.
          </p>
          <Link to="/compatibility">
            <Button>Check Match</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="zodiac-card"
        >
          <h3 className="text-xl font-semibold mb-3">Numerology</h3>
          <p className="text-muted-foreground mb-4">
            Calculate your life path number and understand its meaning.
          </p>
          <Link to="/numerology">
            <Button>Calculate Now</Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img 
            alt="Mystical cosmic background"
            className="w-full h-64 object-cover rounded-2xl"
           src="https://images.unsplash.com/photo-1584431717465-a0e3453e23af" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Begin Your Spiritual Journey
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Let the stars guide you through life's journey. Discover the ancient
          wisdom of astrology and numerology, tailored just for you.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
