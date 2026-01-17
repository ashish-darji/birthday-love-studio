import { motion } from "framer-motion";
import { useState } from "react";

// Placeholder images - these can be replaced with actual photos
const galleryImages = [
  { id: 1, placeholder: "memories together" },
  { id: 2, placeholder: "special moments" },
  { id: 3, placeholder: "our adventures" },
  { id: 4, placeholder: "precious times" },
  { id: 5, placeholder: "love and laughter" },
  { id: 6, placeholder: "forever memories" },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background opacity-30" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-script text-gradient text-center mb-4"
        >
          Our Beautiful Memories 📸
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-display text-lg mb-12"
        >
          Every picture tells a story of our love 💕
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedImage(image.id)}
              className="cursor-pointer group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-romantic border-4 border-rose-light/50 bg-gradient-to-br from-rose-light via-secondary to-coral">
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-6xl mb-4">📷</span>
                  <p className="font-script text-2xl text-foreground capitalize">
                    {image.placeholder}
                  </p>
                  <p className="font-display text-sm text-muted-foreground mt-2">
                    Add your photo here
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="text-4xl"
                  >
                    💖
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add more photos hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 font-display text-muted-foreground"
        >
          ✨ Replace these placeholders with your cherished photos ✨
        </motion.p>
      </motion.div>

      {/* Modal for viewing image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-card rounded-3xl p-8 max-w-lg w-full text-center shadow-glow"
          >
            <span className="text-8xl">💝</span>
            <p className="font-script text-3xl text-primary mt-4">
              Add your beautiful photo here!
            </p>
            <p className="font-display text-muted-foreground mt-2">
              Click anywhere to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ImageGallery;
