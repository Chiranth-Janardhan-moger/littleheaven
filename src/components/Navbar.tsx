import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onOpenEnroll: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnroll, onOpenTour }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const sectionMapping: { id: string; targetNav: string }[] = [
        { id: 'home', targetNav: 'home' },
        { id: 'about', targetNav: 'about' },
        { id: 'programs', targetNav: 'programs' },
        { id: 'gallery', targetNav: 'gallery' },
        { id: 'reviews', targetNav: 'reviews' },
        { id: 'contact', targetNav: 'contact' },
      ];

      const scrollPos = window.scrollY + 180;
      let currentActive = 'home';

      for (const item of sectionMapping) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset;
          if (scrollPos >= top) {
            currentActive = item.targetNav;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 96;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-5 transition-all duration-500">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-full ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl border border-white/90 shadow-[0_12px_40px_rgba(37,99,235,0.14)] py-2.5 px-5 sm:px-7'
            : 'bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(37,99,235,0.06)] py-3.5 px-6 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
            id="nav-logo-link"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-extrabold font-sans tracking-tight text-slate-800 block leading-none">
                Little's Heaven
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-blue-600 block mt-0.5">
                Child Care & Early Learning
              </span>
            </div>
          </a>

          {/* Hallmark N5 Desktop Nav Links with Sliding Active Pill */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-white/60 p-1.5 rounded-full border border-white/80 backdrop-blur-md shadow-inner relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.id}`}
                  className={`relative px-4 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-colors duration-300 z-10 cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTabPill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 rounded-full shadow-md shadow-blue-500/30 -z-10"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button onClick={onOpenEnroll} id="nav-enroll-btn" size="sm" variant="primary">
              <span>Enroll Now</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-white/80 border border-white/90 text-slate-700 hover:bg-white shadow-sm transition-all cursor-pointer"
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden mt-3 mx-auto max-w-7xl bg-white/95 backdrop-blur-2xl border border-white/90 rounded-3xl p-5 shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 mt-2">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnroll();
                }}
                className="w-full justify-center"
                size="md"
                variant="primary"
              >
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
