import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4 tracking-tight">
          PEL-MAX
        </h1>
        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-gold mb-6 italic">
          Meble Na Wymiar
        </p>
        <p className="font-body text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Meble projektowane i produkowane na zamówienie – dopasowane do Twojej przestrzeni.
        </p>
        <a
          href="#kontakt"
          className="inline-block bg-gold hover:bg-gold-light text-foreground font-body font-bold px-8 py-4 rounded-sm tracking-wide transition-colors duration-300 text-sm uppercase"
        >
          Zapytaj o wycenę
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#o-nas" className="text-cream/60 hover:text-cream transition-colors">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
