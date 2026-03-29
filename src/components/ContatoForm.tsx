import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContatoForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast({
        title: "Preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    if (name.length > 100 || email.length > 255 || message.length > 2000) {
      toast({
        title: "Texto muito longo",
        description: "Por favor, reduza o tamanho dos campos.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from("contact_submissions")
      .insert({ name, email, message });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
      return;
    }

    setIsSuccess(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary-foreground/10 rounded-2xl p-10 text-center max-w-lg mx-auto"
      >
        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
        <h3 className="font-display text-2xl font-bold mb-2">Mensagem enviada!</h3>
        <p className="font-body text-primary-foreground/70">
          Obrigado pelo contato. Retornaremos em breve.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left">
      <div>
        <label htmlFor="name" className="block font-body text-sm mb-1 text-primary-foreground/70">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          maxLength={100}
          value={form.name}
          onChange={handleChange}
          placeholder="Seu nome"
          className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-body text-sm mb-1 text-primary-foreground/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          maxLength={255}
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-body text-sm mb-1 text-primary-foreground/70">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          maxLength={2000}
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Sua mensagem..."
          className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground hover:opacity-90 transition-opacity rounded-xl px-8 py-4 font-body font-bold text-lg disabled:opacity-50"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </form>
  );
};

export default ContatoForm;
