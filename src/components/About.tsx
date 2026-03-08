import { motion } from "framer-motion";
import { Ruler, Factory, Wrench } from "lucide-react";

const cards = [
  {
    icon: Ruler,
    title: "Projekt na miarę",
    desc: "Każde meble projektujemy od podstaw, zgodnie z Twoimi potrzebami.",
  },
  {
    icon: Factory,
    title: "Własna produkcja",
    desc: "Kontrolujemy każdy etap od projektu do montażu.",
  },
  {
    icon: Wrench,
    title: "Profesjonalny montaż",
    desc: "Kompleksowa realizacja pod klucz.",
  },
];

const About = () => {
  return (
    <section id="o-nas" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-lg text-gold mb-2 italic">Projektujemy. Produkujemy. Montujemy.</p>
          <h2 className="section-title">Dlaczego PEL-MAX?</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
