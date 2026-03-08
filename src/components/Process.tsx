import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Konsultacja", desc: "Omawiamy Twoje oczekiwania i potrzeby." },
  { num: "2", title: "Pomiar", desc: "Wykonujemy pomiar i przedstawiamy plan." },
  { num: "3", title: "Produkcja", desc: "Wykonujemy meble w naszym zakładzie." },
  { num: "4", title: "Montaż", desc: "Instalujemy gotowe meble u Ciebie." },
];

const Process = () => {
  return (
    <section id="proces" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Jak pracujemy?
          </h2>
          <p className="text-lg text-primary-foreground/70 font-body">Od pomysłu do realizacji – w czterech prostych krokach.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-5xl font-heading font-bold text-gold mb-4">{step.num}</div>
              <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">{step.title}</h3>
              <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
