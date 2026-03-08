import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import catKitchen from "@/assets/cat-kitchen.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catShop from "@/assets/cat-shop.jpg";
import catLiving from "@/assets/cat-living.jpg";
import catWardrobe from "@/assets/cat-wardrobe.jpg";
import catSliding from "@/assets/cat-sliding.png";

const categories = [
  { img: catKitchen, name: "Meble kuchenne", desc: "Funkcjonalne i eleganckie kuchnie dopasowane do każdej przestrzeni." },
  { img: catOffice, name: "Meble biurowe", desc: "Ergonomiczne rozwiązania dla nowoczesnych biur i gabinetów." },
  { img: catShop, name: "Meble sklepowe", desc: "Wyposażenie handlowe, które przyciąga klientów." },
  { img: catLiving, name: "Meble pokojowe", desc: "Komfortowe meble do salonu i sypialni na wymiar." },
  { img: catWardrobe, name: "Szafy na wymiar", desc: "Zabudowy szaf i garderób wykorzystujące każdy centymetr." },
  { img: catSliding, name: "Szafy przesuwne", desc: "Nowoczesne szafy z drzwiami przesuwnymi – oszczędność miejsca i styl." },
];

const Offer = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="oferta" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nasza Oferta</h2>
          <p className="section-subtitle">Tworzymy meble na wymiar do każdego wnętrza.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gallery-card aspect-[4/3]"
              onClick={() => setLightbox(i)}
            >
              <img src={cat.img} alt={cat.name} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-heading text-xl font-semibold text-cream mb-1">{cat.name}</h3>
                <p className="font-body text-sm text-cream/80">{cat.desc}</p>
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
            src={categories[lightbox].img}
            alt={categories[lightbox].name}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-cream font-body text-sm">
            {categories[lightbox].name}
          </p>
        </div>
      )}
    </section>
  );
};

export default Offer;
