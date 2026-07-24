import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import logoImg from '../assets/logo-littles.png';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0A1128] text-white pt-16 pb-12 overflow-hidden border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Hallmark Ft5 Statement Status Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-4">
            <img
              src={logoImg}
              alt="Little's Heaven Logo"
              className="h-12 sm:h-14 w-auto object-contain bg-white/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/10"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Little's Heaven Child Care & Early Learning
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Inspiring young minds to learn, grow, and shine every day in a safe, clean, and nurturing early education sanctuary.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pt-10">
          
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
              Campus Location
            </h3>
            <div className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>Federal Bank, Dasarahalli Main Rd, Bhuvaneswari Nagar, Hebbal, Bengaluru, Karnataka 560024</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
              Direct Contact
            </h3>
            <ul className="space-y-2.5 text-slate-300 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+917736181828" className="hover:text-white transition-colors">+91 77361 81828</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:contact@littlesheaven.edu.in" className="hover:text-white transition-colors">contact@littlesheaven.edu.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="#home" className="hover:text-white transition-colors">www.littlesheaven.edu.in</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
              Operating Hours
            </h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <p><strong className="text-white">Monday - Friday:</strong> 6:00 AM - 7:00 PM</p>
              <p><strong className="text-white">Saturday:</strong> 6:00 AM Onward</p>
              <p><strong className="text-white">Sunday:</strong> Closed</p>
            </div>
          </div>

        </div>

        {/* Hallmark Ft5 Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-500 font-semibold gap-4">
          <p>© {new Date().getFullYear()} Little's Heaven. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
