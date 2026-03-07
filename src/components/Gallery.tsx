import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { img: gallery1, label: "Zabudowa salonu" },
  { img: gallery2, label: "Garderoba na wymiar" },
  { img: gallery3, label: "Meble biurowe" },
  { img: gallery4, label: "Sypialnia z zabudową" },
  { img: gallery5, label: "Łazienka – szafka pod umywalkę" },
  { img: gallery6, label: "Wyposażenie sklepu" },
];

const Gallery = () => {
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
            >
              <img src={photo.img} alt={photo.label} loading="lazy" />
              <div className="gallery-overlay">
                <span>{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
