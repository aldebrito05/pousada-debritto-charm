import { motion } from "framer-motion";
import { MapPin, Bus, Car, Plane, TrainFront, ParkingCircle, Coffee } from "lucide-react";

const items = [
  { icon: MapPin, text: "A 1 quadra da praia e do centro comercial de Itaoca" },
  { icon: Bus, text: "Próximo à Estação de Ônibus São Geraldo" },
  { icon: Car, text: "Fácil acesso de carro — destino Itaoca" },
  { icon: Plane, text: "Via aérea — destino Vitória" },
  { icon: TrainFront, text: "De trem com lindas paisagens até Vitória" },
  { icon: ParkingCircle, text: "Estacionamento de cortesia para clientes" },
];

const Localizacao = () => {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Localização
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Rua Valentina Rosa de Oliveira, 107 — Itaoca, Itapemirim/ES
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border"
            >
              <item.icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <p className="font-body text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm"
        >
          <Coffee className="w-4 h-4" />
          <span>* Não servimos café da manhã</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Localizacao;
