import { motion } from "framer-motion";
import { Cake, Gift, PartyPopper, Heart, Sparkles, Crown } from "lucide-react";

const wishes = [
  {
    icon: Crown,
    title: "Be the Queen/King You Are",
    message: "Today is YOUR day to shine brighter than any star in the galaxy",
  },
  {
    icon: Gift,
    title: "Endless Surprises",
    message: "May life gift you with beautiful moments and dreams come true",
  },
  {
    icon: Heart,
    title: "Love Without Limits",
    message: "May our love continue to grow deeper than the cosmos itself",
  },
  {
    icon: Sparkles,
    title: "Magic in Every Moment",
    message: "May your year ahead be filled with wonder and enchantment",
  },
  {
    icon: PartyPopper,
    title: "Joy Overflowing",
    message: "May laughter and happiness follow you wherever you go",
  },
  {
    icon: Cake,
    title: "Sweet Celebrations",
    message: "May every celebration be as sweet as you are to me",
  },
];

const BirthdayWishes = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="hsl(45, 80%, 65%)" />
            <circle cx="50" cy="80" r="1" fill="hsl(45, 80%, 65%)" />
            <circle cx="150" cy="30" r="1" fill="hsl(45, 80%, 65%)" />
            <circle cx="180" cy="150" r="1" fill="hsl(45, 80%, 65%)" />
            <line x1="10" y1="10" x2="50" y2="80" stroke="hsl(45, 80%, 65%)" strokeWidth="0.5" />
            <line x1="50" y1="80" x2="150" y2="30" stroke="hsl(45, 80%, 65%)" strokeWidth="0.5" />
            <line x1="150" y1="30" x2="180" y2="150" stroke="hsl(45, 80%, 65%)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#constellation)" />
      </svg>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Cake className="w-12 h-12 text-gold mx-auto" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            Birthday Wishes
          </h2>
          <p className="font-elegant text-xl text-muted-foreground">
            Written in the stars, meant for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px hsl(45 80% 65% / 0.15)",
              }}
            >
              {/* Glowing corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <wish.icon className="w-7 h-7 text-gold" />
              </motion.div>

              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                {wish.title}
              </h3>
              
              <p className="font-elegant text-muted-foreground leading-relaxed">
                {wish.message}
              </p>

              {/* Decorative star */}
              <motion.div
                className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-gold/50" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BirthdayWishes;
