import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import kitchen1 from "@/assets/kitchen-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import kitchen3 from "@/assets/kitchen-3.jpg";
import kitchen4 from "@/assets/kitchen-4.jpg";
import kitchen5 from "@/assets/kitchen-5.jpg";
import kitchen6 from "@/assets/kitchen-6.jpg";
import kitchen7 from "@/assets/kitchen-7.jpg";
import kitchen8 from "@/assets/kitchen-8.jpg";
import kitchen9 from "@/assets/kitchen-9.jpg";

const kitchenPhotos = [
  { img: kitchen1, label: "Kuchnia nowoczesna – zabudowa na wymiar" },
  { img: kitchen2, label: "Kuchnia z wyspą – serce Twojego domu" },
  { img: kitchen3, label: "Kuchnia skandynawska – fronty matowe" },
  { img: kitchen4, label: "Kuchnia klasyczna – szafy do sufitu" },
  { img: kitchen5, label: "Kuchnia z frontami w kolorze niebieskim" },
  { img: kitchen6, label: "Kuchnia w kształcie U – potencjał każdego centymetra" },
  { img: kitchen7, label: "Kuchnia minimalistyczna – gładkie powierzchnie" },
  { img: kitchen8, label: "Kuchnia dwukolorowa – czerń i biel" },
  { img: kitchen9, label: "Detale – okucia i uchwyty premium" },
];

const KitchenGallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="kuchnie" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Realizacje – Meble Kuchenne</h2>
          <p className="section-subtitle">Każda kuchnia to osobna historia. Oto niektóre z naszych realizacji.</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {kitchenPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="gallery-card break-inside-avoid cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <img src={photo.img} alt={photo.label} loading="lazy" className="w-full rounded-lg" />
              <div className="gallery-overlay rounded-lg">
                <span>{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.facebook.com/profile.php?id=100086573005163"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-walnut-light text-primary-foreground font-body font-bold px-8 py-4 rounded-sm tracking-wide transition-colors duration-300 text-sm uppercase"
          >
            Zobacz więcej realizacji
          </a>
        </div>
      </div>

      {/* Lightbox */}
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
            src={kitchenPhotos[lightbox].img}
            alt={kitchenPhotos[lightbox].label}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-cream font-body text-sm">
            {kitchenPhotos[lightbox].label}
          </p>
        </div>
      )}
    </section>
  );
};

export default KitchenGallery;
