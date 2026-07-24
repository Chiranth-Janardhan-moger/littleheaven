import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/917736181828?text=Hello%21%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Little%27s%20Heaven%20Child%20Care%20%26%20Early%20Learning.';

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center group pointer-events-auto select-none">
      
      {/* Desktop Tooltip */}
      <div className="hidden md:flex items-center gap-2 mr-3 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-[0_8px_20px_rgba(37,211,102,0.2)] opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
        <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
          <span className="text-base animate-bounce">💬</span>
          Chat with us on WhatsApp
        </span>
        {/* Tooltip Pointing Arrow */}
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white/95 border-t border-r border-emerald-200/80 rotate-45" />
      </div>

      {/* WhatsApp Action Button Container */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 ease-out cursor-pointer"
      >
        {/* Ambient Hover Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Inner Solid Surface */}
        <div className="relative w-full h-full rounded-full bg-[#25D366] flex items-center justify-center overflow-hidden">
          {/* Official WhatsApp SVG Vector Icon */}
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-current transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.634 0 5.11 1.028 6.972 2.89 1.861 1.863 2.888 4.339 2.887 6.974 0 5.447-4.43 9.877-9.873 9.877m0-18.067c-6.643 0-12.038 5.396-12.038 12.04 0 2.12.553 4.188 1.605 6.012l-1.706 6.231 6.376-1.672a12.002 12.002 0 005.76 1.468h.005c6.642 0 12.037-5.395 12.038-12.04.001-3.218-1.252-6.242-3.533-8.523a12.001 12.001 0 00-8.507-3.516" />
          </svg>
        </div>
      </a>
    </div>
  );
};


