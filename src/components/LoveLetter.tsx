import { motion } from "framer-motion";

const LoveLetter = () => {
  return (
    <section id="love-letter" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blush to-background opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ rotateY: -90 }}
          whileInView={{ rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/30 relative"
        >
          {/* Decorative corner hearts */}
          <span className="absolute -top-4 -left-4 text-4xl">💗</span>
          <span className="absolute -top-4 -right-4 text-4xl">💗</span>
          <span className="absolute -bottom-4 -left-4 text-4xl">💗</span>
          <span className="absolute -bottom-4 -right-4 text-4xl">💗</span>

          <h2 className="text-5xl md:text-6xl font-script text-gradient text-center mb-8">
            My Love Letter 💌
          </h2>

          <div className="space-y-6 text-lg md:text-xl font-display text-foreground leading-relaxed">
            <p className="text-center">
              <span className="font-script text-2xl text-primary">To the most amazing person in my life,</span>
            </p>
            
            <p>
              On this special day, I want you to know just how much you mean to me. 
              Every moment with you is a gift, and every day I fall more in love with you. 💕
            </p>
            
            <p>
              Your smile lights up my world, your laughter is my favorite melody, 
              and your love makes everything beautiful. You are my sunshine, my moon, 
              and all my stars. ✨
            </p>
            
            <p>
              Thank you for being you – for your kindness, your patience, and your endless love. 
              You make me want to be a better person every single day.
            </p>
            
            <p className="text-center font-script text-2xl text-primary pt-4">
              Happy Birthday, my love! 🎂<br />
              Here's to celebrating you today and always.
            </p>

            <p className="text-right font-script text-2xl text-primary">
              Forever yours,<br />
              With all my love 💝
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating decorations */}
      <motion.div
        className="absolute top-10 left-10 text-4xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-4xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        🌺
      </motion.div>
    </section>
  );
};

export default LoveLetter;
