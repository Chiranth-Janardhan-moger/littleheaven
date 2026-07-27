import React, { useRef, useState } from 'react';
import { INSTAGRAM_REELS } from '../data/preschoolData';
import { InstagramReel } from '../types';
import {
  Instagram,
  Sparkles,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  VolumeX,
  X,
  Heart,
  Share2,
  Music,
  ExternalLink
} from 'lucide-react';

export const InstagramReels: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedReel, setSelectedReel] = useState<InstagramReel | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedReels((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="relative py-16 sm:py-24 bg-slate-900 text-white overflow-hidden" id="instagram-gallery">
      {/* Background Subtle Gradient Glows matching website theme */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Header Area */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          {/* Section label with Instagram icon and handle in gold/accent color */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-4 shadow-inner">
            <Instagram className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-wide text-amber-400 uppercase">
              @littlesheaven.official
            </span>
          </div>

          {/* Main Heading: "As Seen On Instagram" in Luxury Serif Font */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-luxury tracking-tight text-white mb-3 drop-shadow-md">
            As Seen On Instagram
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            Tag <span className="text-amber-400 font-semibold">#LittlesHeaven</span> to be featured on our official global gallery.
          </p>
        </div>

        {/* Carousel Container with Controls */}
        <div className="relative group/carousel">
          {/* Desktop Left Scroll Button */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Scroll Left"
            className="hidden sm:flex absolute left-2 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700/80 shadow-2xl backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Desktop Right Scroll Button */}
          <button
            onClick={() => handleScroll('right')}
            aria-label="Scroll Right"
            className="hidden sm:flex absolute right-2 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700/80 shadow-2xl backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* 2. Horizontal Reel Carousel Grid */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-4"
          >
            {INSTAGRAM_REELS.map((reel) => {
              const isLiked = likedReels[reel.id];

              return (
                <div
                  key={reel.id}
                  onClick={() => {
                    setSelectedReel(reel);
                    setIsPlaying(true);
                  }}
                  className="snap-center shrink-0 w-[220px] sm:w-[260px] md:w-[280px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer border border-slate-800/80 bg-slate-950 shadow-xl hover:shadow-2xl hover:border-amber-500/40 transition-all duration-500"
                >
                  {/* Reel Image */}
                  <img
                    src={reel.image}
                    alt={reel.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* 3. Reel Cards & Hover Effects */}
                  {/* Floating Instagram badge in top-right corner over a translucent glassmorphism background */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all duration-300 z-10">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>

                  {/* Audio badge in top-left corner */}
                  {reel.audioTitle && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-slate-200 shadow-md flex items-center gap-1.5 z-10 max-w-[130px] truncate">
                      <Music className="w-3 h-3 text-amber-400 shrink-0 animate-pulse" />
                      <span className="truncate">{reel.audioTitle}</span>
                    </div>
                  )}

                  {/* Bottom gradient overlay: bg-gradient-to-t from-black/85 via-black/40 to-transparent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 text-white transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                    {/* Caption: 2-line truncated */}
                    <p className="text-xs sm:text-sm font-medium leading-snug line-clamp-2 text-slate-100 mb-3 drop-shadow-sm">
                      {reel.caption}
                    </p>

                    {/* Metadata: Likes count with sparkle icon & Comments count with message icon */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs font-semibold text-slate-200">
                      <div className="flex items-center gap-3">
                        {/* Likes count with Sparkle Icon */}
                        <button
                          onClick={(e) => toggleLike(reel.id, e)}
                          className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                          title="Like Reel"
                        >
                          {isLiked ? (
                            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                          ) : (
                            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                          )}
                          <span>{reel.likes}</span>
                        </button>

                        {/* Comments count with Message Icon */}
                        <div className="flex items-center gap-1 hover:text-sky-300 transition-colors">
                          <MessageCircle className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>{reel.comments}</span>
                        </div>
                      </div>

                      {/* Reel tag */}
                      <span className="text-[11px] font-bold text-amber-400/90 tracking-wide">
                        {reel.tag}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Footer CTA banner */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hallmark btn-shine-sweep px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2"
          >
            <Instagram className="w-5 h-5 text-slate-950" />
            <span>Follow Us @littlesheaven.official</span>
            <ExternalLink className="w-4 h-4 text-slate-950/80 ml-1" />
          </a>
        </div>
      </div>

      {/* Interactive Reel Lightbox / Modal */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] max-h-[85vh] bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between">
            {/* Modal Reel Background Image */}
            <img
              src={selectedReel.image}
              alt={selectedReel.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top Bar Controls */}
            <div className="relative z-10 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 p-0.5 shadow-md">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-none">
                    {selectedReel.handle}
                  </h4>
                  <span className="text-[10px] text-slate-300 font-medium">
                    {selectedReel.audioTitle || 'Original Audio'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                  )}
                </button>

                <button
                  onClick={() => setSelectedReel(null)}
                  className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Play/Pause Overlay indicator */}
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative z-10 flex-1 flex items-center justify-center cursor-pointer"
            >
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl animate-in zoom-in-75 duration-200">
                  <Play className="w-8 h-8 text-amber-400 fill-amber-400 ml-1" />
                </div>
              )}
            </div>

            {/* Bottom Content & Meta Bar */}
            <div className="relative z-10 p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent text-white space-y-3">
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-100 drop-shadow-md">
                {selectedReel.caption}
              </p>

              {/* Hashtags & Sound */}
              <div className="flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span className="bg-amber-500/20 px-2.5 py-1 rounded-md border border-amber-500/30">
                  {selectedReel.tag}
                </span>
                <span className="text-[11px] text-slate-300 font-medium">
                  {selectedReel.views} views
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs font-semibold">
                <div className="flex items-center gap-4">
                  <button
                    onClick={(e) => toggleLike(selectedReel.id, e)}
                    className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {likedReels[selectedReel.id] ? (
                      <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-bounce" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-amber-400" />
                    )}
                    <span>{selectedReel.likes}</span>
                  </button>

                  <div className="flex items-center gap-1.5 text-slate-200">
                    <MessageCircle className="w-5 h-5 text-sky-400" />
                    <span>{selectedReel.comments}</span>
                  </div>
                </div>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>View on IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
