import { motion } from "framer-motion";
import { Heart, Moon, Star } from "lucide-react";

const CelestialFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 border-t border-gold/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative elements */}
        <motion.div
          className="flex justify-center items-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-5 h-5 text-gold/50" />
          </motion.div>
          
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Moon className="w-8 h-8 text-gold" />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-5 h-5 text-gold/50" />
          </motion.div>
        </motion.div>

        <motion.p
          className="font-elegant text-lg text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          "In all the world, there is no heart for me like yours."
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 text-gold font-display"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span>Created with</span>
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 text-gold fill-current" />
          </motion.div>
          <span>for my Universe</span>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-gold/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-elegant text-sm text-muted-foreground/60">
            ✨ {currentYear} • To The One Who Holds My Heart • ✨
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default CelestialFooter;
