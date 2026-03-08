import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { img: gallery1, label: "Zabudowa salonu" },
  { img: gallery2, label: "Szafa przesuwna – industrialny beton" },
  { img: gallery3, label: "Zabudowa z biurkiem" },
  { img: gallery4, label: "Komoda do sypialni" },
  { img: gallery5, label: "Łazienka – szafka pod umywalkę" },
  { img: gallery6, label: "Szafa z drzwiami przesuwnymi i lustrem" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="realizacje" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nasze Realizacje</h2>
          <p className="section-subtitle">Wybrane projekty z różnych kategorii.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="gallery-card aspect-[4/3]"
              onClick={() => setLightbox(i)}
            >
              <img src={photo.img} alt={photo.label} loading="lazy" />
              <div className="gallery-overlay">
                <span>{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[lightbox].img}
            alt={photos[lightbox].label}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-cream font-body text-sm">
            {photos[lightbox].label}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
