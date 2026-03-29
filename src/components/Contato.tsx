import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import ContatoForm from "./ContatoForm";

const Contato = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Contate-nos
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-10 max-w-lg mx-auto">
            Entre em contato para reservas e informações
          </p>

          <ContatoForm />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <a
              href="tel:+5528999921722"
              className="flex items-center gap-3 bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors rounded-xl px-8 py-4 font-body text-lg"
            >
              <Phone className="w-5 h-5" />
              28 99992-1722
            </a>
            <a
              href="https://wa.me/5528999921722"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-accent text-accent-foreground hover:opacity-90 transition-opacity rounded-xl px-8 py-4 font-body font-bold text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;
