import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-starlight"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Shooting stars */}
      <motion.div
        className="absolute w-1 h-1 bg-gold rounded-full"
        style={{ top: "10%", left: "20%" }}
        animate={{
          x: [0, 300],
          y: [0, 200],
          opacity: [1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeOut",
        }}
      >
        <div className="absolute w-20 h-0.5 bg-gradient-to-l from-gold to-transparent -left-20 top-0" />
      </motion.div>
      
      <motion.div
        className="absolute w-1 h-1 bg-gold-light rounded-full"
        style={{ top: "30%", right: "10%" }}
        animate={{
          x: [0, -250],
          y: [0, 180],
          opacity: [1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 12,
          delay: 4,
          ease: "easeOut",
        }}
      >
        <div className="absolute w-16 h-0.5 bg-gradient-to-r from-gold-light to-transparent -right-16 top-0" />
      </motion.div>
    </div>
  );
};

export default StarField;
