import { motion } from "framer-motion";
import { Image, Star, Camera } from "lucide-react";
import { useState } from "react";

const memories = [
  { id: 1, title: "Our First Dance", placeholder: "First special moment" },
  { id: 2, title: "Starlit Night", placeholder: "Under the stars" },
  { id: 3, title: "Adventures Together", placeholder: "Our journey" },
  { id: 4, title: "Cozy Moments", placeholder: "Quiet times" },
  { id: 5, title: "Laughter & Joy", placeholder: "Happy memories" },
  { id: 6, title: "Forever Us", placeholder: "Our love story" },
];

const MemoryGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-gold animate-pulse" fill="currentColor" />
            <Camera className="w-6 h-6 text-gold" />
            <Star className="w-5 h-5 text-gold animate-pulse" fill="currentColor" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            Our Constellation of Memories
          </h2>
          <p className="font-elegant text-xl text-muted-foreground">
            Each moment with you is a star in our universe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(memory.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.03 }}
            >
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-deep via-navy-light to-purple-cosmic" />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image className="w-16 h-16 text-gold/30" />
              </div>

              {/* Stars decoration */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gold rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    opacity: hoveredId === memory.id ? [0.3, 1, 0.3] : 0.3,
                    scale: hoveredId === memory.id ? [1, 1.5, 1] : 1,
                  }}
                  transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                />
              ))}

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 border-2 border-gold/0 rounded-2xl"
                animate={{
                  borderColor: hoveredId === memory.id ? "hsl(45 80% 65% / 0.5)" : "hsl(45 80% 65% / 0)",
                  boxShadow: hoveredId === memory.id 
                    ? "0 0 30px hsl(45 80% 65% / 0.3), inset 0 0 30px hsl(45 80% 65% / 0.1)" 
                    : "0 0 0 transparent",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay with title */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-6"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: hoveredId === memory.id ? 1 : 0.7 }}
              >
                <motion.h3
                  className="font-display text-xl text-gold mb-1"
                  animate={{ y: hoveredId === memory.id ? 0 : 10 }}
                >
                  {memory.title}
                </motion.h3>
                <motion.p
                  className="font-elegant text-silver/80 text-sm"
                  animate={{ 
                    opacity: hoveredId === memory.id ? 1 : 0,
                    y: hoveredId === memory.id ? 0 : 10,
                  }}
                >
                  {memory.placeholder}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center font-elegant text-muted-foreground mt-8 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ✨ Add your precious photos to make this gallery come alive ✨
        </motion.p>
      </div>
    </section>
  );
};

export default MemoryGallery;
