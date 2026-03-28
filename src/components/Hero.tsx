import { motion } from "framer-motion";
import heroImg from "@/assets/hero-beach.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Praia de Itaoca, Espírito Santo"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/80 mb-4"
        >
          Itaoca — Espírito Santo
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Pousada D'Brito
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-light"
        >
          Venha se divertir em uma das melhores praias do Espírito Santo com todo o conforto e comodidade que você merece!
        </motion.p>
        <motion.a
          href="https://wa.me/5528999921722"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-block bg-accent text-accent-foreground font-body font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
        >
          Reserve pelo WhatsApp
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-wave"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground/70">
          <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
