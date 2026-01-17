import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Sparkles />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-light rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-coral rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="mb-8"
        >
          <span className="text-8xl md:text-9xl animate-heartbeat inline-block">💕</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-script text-gradient mb-6"
        >
          Happy Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl md:text-4xl font-script text-foreground mb-8"
        >
          My Dearest Love ♥
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center gap-4 text-4xl"
        >
          {["🎂", "🎁", "🎈", "🎉", "💝"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('love-letter')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-romantic text-primary-foreground px-8 py-4 rounded-full font-display font-semibold text-lg shadow-romantic hover:shadow-glow transition-all duration-300"
          >
            Read My Love Letter 💌
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-primary text-2xl">↓</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
