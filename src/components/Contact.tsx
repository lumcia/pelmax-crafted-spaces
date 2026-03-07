import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Facebook } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: { name: form.name, contact: form.contact, message: form.message },
      });
      if (error) throw error;
      toast.success("Dziękujemy! Skontaktujemy się z Tobą wkrótce.");
      setForm({ name: "", contact: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skontaktuj się z nami</h2>
          <p className="section-subtitle">Zapytaj o wycenę lub umów się na konsultację.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Imię i nazwisko</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Telefon lub e-mail</label>
              <input
                type="text"
                required
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Wiadomość</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light text-foreground font-body font-bold px-8 py-4 rounded-sm tracking-wide transition-colors duration-300 text-sm uppercase"
            >
              Wyślij wiadomość
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-body font-bold text-foreground">Adres</p>
                <p className="font-body text-muted-foreground">Helenów 11A, 62-817 Żelazków<br />Wielkopolska, Polska</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-body font-bold text-foreground">Telefon</p>
                <a
                  href="tel:+48698570489"
                  className="font-body text-gold hover:text-gold-light transition-colors"
                >
                  +48 698 570 489
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Facebook className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-body font-bold text-foreground">Facebook</p>
                <a
                  href="https://www.facebook.com/profile.php?id=100086573005163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gold hover:text-gold-light transition-colors"
                >
                  PEL-MAX Meble Na Wymiar
                </a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-64 border border-border">
              <iframe
                title="Lokalizacja PEL-MAX"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19544.5!2d18.1!3d51.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b3a0e6b7c8b0d%3A0x1!2sZelazk%C3%B3w!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
