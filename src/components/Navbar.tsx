import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "Digital Услуги", path: "/digital" },
  ];

  const homeItems = [
    { name: "О компании", path: "/#О компании" },
    { name: "Тарифы", path: "/#Тарифы" },
    { name: "Процесс", path: "/#Процесс" },
    { name: "Преимущества", path: "/#Преимущества" },
  ];

  const displayItems = location.pathname === "/" ? [...navItems, ...homeItems.slice(1)] : navItems;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-xl">i</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter">iMperius</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {displayItems.map((item) => (
            item.path.startsWith("/#") ? (
              <a key={item.name} href={item.path.substring(1)} className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
                {item.name}
              </a>
            ) : (
              <Link key={item.name} to={item.path} className={`text-sm font-medium transition-colors ${location.pathname === item.path ? "text-gold" : "text-white/70 hover:text-gold"}`}>
                {item.name}
              </Link>
            )
          ))}
          <div className="flex items-center gap-4">
            <a href="tel:+79667003303" className="text-sm font-bold text-white hover:text-gold transition-colors">
              +7 (966) 700-33-03
            </a>
            <button className="px-5 py-2 border border-gold/50 text-gold text-sm font-semibold rounded-full hover:bg-gold hover:text-black transition-all">
              Связаться
            </button>
          </div>
        </div>

        {/* Mobile Phone & Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <a href="tel:+79667003303" className="text-xs font-bold text-gold">
            +7 (966) 700-33-03
          </a>
          <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4"
        >
          <a href="tel:+79667003303" className="text-xl font-bold text-gold mb-2">
            +7 (966) 700-33-03
          </a>
          {displayItems.map((item) => (
            item.path.startsWith("/#") ? (
              <a key={item.name} href={item.path.substring(1)} className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>
            ) : (
              <Link key={item.name} to={item.path} className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            )
          ))}
          <button className="w-full py-3 bg-gold text-black font-bold rounded-lg mt-2">
            Получить аудит
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
