import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-2">PEL-MAX</h3>
            <p className="font-body text-primary-foreground/70 text-sm italic">
              Projektujemy. Produkujemy. Montujemy.
            </p>
          </div>
          <nav className="space-y-2">
            <p className="font-body font-bold text-sm uppercase tracking-wider mb-3 text-gold">Nawigacja</p>
            {[
              { href: "#o-nas", label: "O nas" },
              { href: "#oferta", label: "Oferta" },
              { href: "#kuchnie", label: "Kuchnie" },
              { href: "#realizacje", label: "Realizacje" },
              { href: "#kontakt", label: "Kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div>
            <p className="font-body font-bold text-sm uppercase tracking-wider mb-3 text-gold">Śledź nas</p>
            <a
              href="https://www.facebook.com/profile.php?id=100086573005163"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-body text-sm">Facebook</span>
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © 2025 PEL-MAX Meble Na Wymiar. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
