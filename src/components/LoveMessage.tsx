import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";

const LoveMessage = () => {
  return (
    <section id="love-message" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gold/20 shadow-cosmic"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-xl" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/40 rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/40 rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-xl" />

          <motion.div
            className="flex justify-center mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Quote className="w-10 h-10 text-gold rotate-180" />
          </motion.div>

          <h2 className="font-display text-3xl md:text-5xl text-center text-gradient-gold mb-8">
            A Letter From My Heart
          </h2>

          <div className="font-elegant text-lg md:text-xl text-foreground/90 leading-relaxed space-y-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              My Beloved,
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              From the moment our paths crossed under the stars, I knew that the universe 
              had conspired to bring us together. Your smile is my sunrise, your laughter 
              my favorite melody, and your love – the greatest gift I've ever received.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              On this special day, I want you to know that every beat of my heart 
              whispers your name. You make ordinary moments extraordinary, and I fall 
              deeper in love with you with each passing day.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="italic text-gold"
            >
              Happy Birthday, my eternal starlight. Here's to another year of 
              adventures, dreams, and endless love together.
            </motion.p>

            <motion.div
              className="flex justify-center pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <Heart className="w-8 h-8 text-gold fill-current animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="font-display text-2xl text-gold"
            >
              Forever Yours ∞
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveMessage;
