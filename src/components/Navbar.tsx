import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onOpenEnroll: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnroll, onOpenTour }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const prevScrollPos = useRef(0);
  const activeSectionRef = useRef('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 25);

      const isScrollingUp = prevScrollPos.current > currentScrollPos;
      const isNearTop = currentScrollPos < 80;
      setVisible(isScrollingUp || isNearTop || mobileMenuOpen);
      prevScrollPos.current = currentScrollPos;

      const sectionMapping: { id: string; targetNav: string }[] = [
        { id: 'home', targetNav: 'home' },
        { id: 'about', targetNav: 'about' },
        { id: 'programs', targetNav: 'programs' },
        { id: 'gallery', targetNav: 'gallery' },
        { id: 'reviews', targetNav: 'reviews' },
        { id: 'contact', targetNav: 'contact' },
      ];

      let currentActive = 'home';
      const isAtBottom =
        window.innerHeight + currentScrollPos >= document.body.offsetHeight - 80;

      if (isAtBottom) {
        currentActive = 'contact';
      } else if (currentScrollPos >= 90) {
        const scrollPos = currentScrollPos + 200;
        for (const item of sectionMapping) {
          const el = document.getElementById(item.id);
          if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset;
            if (scrollPos >= top) {
              currentActive = item.targetNav;
            }
          }
        }
      }

      if (currentActive !== activeSectionRef.current) {
        activeSectionRef.current = currentActive;
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl transition-all duration-400 rounded-full border ${
          scrolled
            ? 'bg-white/92 backdrop-blur-2xl border-white/95 shadow-[0_12px_40px_rgba(37,99,235,0.12),inset_0_1px_1px_rgba(255,255,255,1)] py-2.5 px-5 sm:px-7'
            : 'bg-white/75 backdrop-blur-xl border-white/85 shadow-[0_8px_32px_rgba(37,99,235,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] py-3.5 px-6 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer select-none"
            id="nav-logo-link"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-extrabold font-sans tracking-tight text-slate-900 block leading-none">
                Little's Heaven
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase text-blue-600 block mt-0.5">
                Child Care & Early Learning
              </span>
            </div>
          </a>

          {/* Clean Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.id}`}
                  className={`text-xs xl:text-sm font-extrabold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button onClick={onOpenEnroll} id="nav-contact-btn" size="sm" variant="primary">
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-white/80 border border-white/90 text-slate-700 hover:bg-white shadow-xs transition-all cursor-pointer"
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
          initial={{ opacity: 0, y: -14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -14, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
                  className={`px-4 py-3 rounded-2xl text-sm font-extrabold transition-all flex items-center justify-between ${
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
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
