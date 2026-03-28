import { motion } from "framer-motion";
import quartoImg from "@/assets/quarto.jpg";
import casaImg from "@/assets/casa.jpg";
import { Fan, Tv, Bath, BedDouble, Refrigerator } from "lucide-react";

const amenityIcon = (name: string) => {
  const cls = "w-5 h-5 text-primary";
  switch (name) {
    case "fan": return <Fan className={cls} />;
    case "tv": return <Tv className={cls} />;
    case "bath": return <Bath className={cls} />;
    case "bed": return <BedDouble className={cls} />;
    case "fridge": return <Refrigerator className={cls} />;
    default: return null;
  }
};

const quartos = [
  {
    title: "Quartos da Pousada",
    image: quartoImg,
    description:
      "Nossos quartos possuem ventilador de teto, geladeira, TV, banheiro e camas confortáveis. Alguns quartos possuem cama de casal, outros camas de solteiro e outros possuem os dois tipos.",
    amenities: ["fan", "fridge", "tv", "bath", "bed"],
  },
  {
    title: "Casa da Pousada",
    image: casaImg,
    description:
      "A Casa possui 2 quartos, 1 banheiro, cozinha completa (geladeira, fogão, mesa, talheres, panelas), varanda com vista para a rua, ventiladores, TV, 1 cama de casal e 3 camas de solteiro. Capacidade para até 8 pessoas.",
    amenities: ["fan", "fridge", "tv", "bath", "bed"],
  },
];

const Quartos = () => {
  return (
    <section id="quartos" className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Acomodações
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Conforto e praticidade a uma quadra da praia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {quartos.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={q.image}
                  alt={q.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {q.title}
                </h3>
                <p className="font-body text-muted-foreground mb-5 leading-relaxed">
                  {q.description}
                </p>
                <div className="flex gap-4">
                  {q.amenities.map((a) => (
                    <span key={a} className="p-2 rounded-md bg-ocean-light">
                      {amenityIcon(a)}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quartos;
