import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#quartos", label: "Acomodações" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/20 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-primary-foreground">
          Pousada D'Brito
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/40 backdrop-blur-md border-t border-primary-foreground/10 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-primary-foreground/90 text-base"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
