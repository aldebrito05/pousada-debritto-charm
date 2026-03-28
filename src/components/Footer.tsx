const Footer = () => (
  <footer className="bg-foreground text-background py-10">
    <div className="container max-w-6xl mx-auto px-4 text-center">
      <p className="font-display text-lg font-semibold mb-2">Pousada D'Brito</p>
      <p className="font-body text-sm text-background/60">
        Rua Valentina Rosa de Oliveira, 107 — Itaoca, Itapemirim/ES
      </p>
      <p className="font-body text-xs text-background/40 mt-4">
        © {new Date().getFullYear()} Pousada D'Brito. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
