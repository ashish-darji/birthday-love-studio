import { motion } from "framer-motion";

const wishes = [
  { emoji: "🌟", text: "May all your dreams come true" },
  { emoji: "💫", text: "Wishing you endless happiness" },
  { emoji: "🌈", text: "May life bring you beautiful surprises" },
  { emoji: "🦋", text: "Hoping your day is as special as you are" },
  { emoji: "🌸", text: "May love surround you always" },
  { emoji: "✨", text: "Wishing you a year full of magic" },
];

const WishesSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-light/20 via-background to-coral/20" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-script text-gradient text-center mb-16"
        >
          Birthday Wishes 🎀
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
              className="bg-card rounded-2xl p-6 text-center shadow-romantic border border-rose-light/30 hover:shadow-glow transition-shadow duration-300"
            >
              <motion.span
                className="text-5xl inline-block mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {wish.emoji}
              </motion.span>
              <p className="font-display text-lg text-foreground">{wish.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WishesSection;
