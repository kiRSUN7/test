const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gold rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-sm">i</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">iMperius</span>
        </div>

        <div className="flex gap-8 text-xs uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-gold transition-colors">Telegram</a>
          <a href="#" className="hover:text-gold transition-colors">WhatsApp</a>
          <a href="#" className="hover:text-gold transition-colors">Email</a>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-white/20">
          © 2026 iMperius Global Scaling. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
