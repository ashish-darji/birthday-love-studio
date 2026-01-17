import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blush to-background" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-7xl mb-6"
        >
          💝
        </motion.div>

        <h3 className="text-4xl md:text-5xl font-script text-gradient mb-4">
          Made with Love
        </h3>

        <p className="font-display text-lg text-muted-foreground mb-8">
          Celebrating the most wonderful person in my life
        </p>

        <div className="flex justify-center gap-4 text-3xl">
          {["💕", "💖", "💗", "💓", "💞"].map((heart, i) => (
            <motion.span
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 font-script text-2xl text-primary"
        >
          I love you more than words can say 💌
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
