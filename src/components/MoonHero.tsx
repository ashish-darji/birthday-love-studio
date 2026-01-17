import { motion } from "framer-motion";
import { Star, Moon, Sparkles } from "lucide-react";

const MoonHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating moon */}
      <motion.div
        className="absolute top-20 right-10 md:right-20 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Moon className="w-32 h-32 md:w-48 md:h-48 text-gold-light" fill="currentColor" />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Decorative stars */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              <Star className="w-4 h-4 text-gold" fill="currentColor" />
            </motion.div>
          ))}
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <span className="text-gradient-gold">Happy Birthday</span>
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Sparkles className="w-6 h-6 text-gold animate-pulse" />
          <h2 className="font-elegant text-2xl md:text-4xl text-silver italic">
            My Dearest Love
          </h2>
          <Sparkles className="w-6 h-6 text-gold animate-pulse" />
        </motion.div>

        <motion.p
          className="font-elegant text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Like the stars that light up the night sky, you illuminate my entire universe. 
          On this magical day, I celebrate the most beautiful soul I've ever known.
        </motion.p>

        {/* Glowing button */}
        <motion.button
          className="relative px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-display text-lg rounded-full glow-gold overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('love-message')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="relative z-10">Read My Heart ✨</span>
          <motion.div
            className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-30"
            initial={false}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-gold rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoonHero;
