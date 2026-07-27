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
      const scrollAmount = direction === 'left' ? -260 : 260;
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
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-sky-50/40 via-white to-blue-50/30 text-slate-900 overflow-hidden" id="instagram-gallery">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Header Area (Matching Theme Colors) */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          {/* Section label matching theme */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md mb-3 shadow-xs">
            <Instagram className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-wide text-blue-700 uppercase">
              @littlesheaven.official
            </span>
          </div>

          {/* Main Heading: "As Seen On Instagram" in Luxury Serif Font */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-luxury tracking-tight text-slate-900 mb-2.5">
            As Seen On Instagram
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
            Tag <span className="text-blue-600 font-semibold">#LittlesHeaven</span> to be featured on our official global gallery.
          </p>
        </div>

        {/* Carousel Container with Controls */}
        <div className="relative group/carousel">
          {/* Desktop Left Scroll Button */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Scroll Left"
            className="hidden sm:flex absolute left-1 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-200 shadow-md shadow-blue-500/10 backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Desktop Right Scroll Button */}
          <button
            onClick={() => handleScroll('right')}
            aria-label="Scroll Right"
            className="hidden sm:flex absolute right-1 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-200 shadow-md shadow-blue-500/10 backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 2. Horizontal Reel Carousel Grid (Small Cards: w-[160px] sm:w-[190px] md:w-[210px]) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-1 sm:px-3"
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
                  className="snap-center shrink-0 w-[160px] sm:w-[190px] md:w-[210px] aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer border border-slate-200/80 bg-slate-900 shadow-md hover:shadow-xl hover:border-blue-400 hover:shadow-blue-500/15 transition-all duration-500"
                >
                  {/* Reel Image */}
                  <img
                    src={reel.image}
                    alt={reel.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Instagram Badge in top-right corner */}
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 z-10">
                    <Instagram className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Audio badge in top-left corner */}
                  {reel.audioTitle && (
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[9px] font-semibold text-slate-200 shadow-xs flex items-center gap-1 z-10 max-w-[100px] truncate">
                      <Music className="w-2.5 h-2.5 text-sky-400 shrink-0 animate-pulse" />
                      <span className="truncate">{reel.audioTitle}</span>
                    </div>
                  )}

                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-3 text-white transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                    {/* 2-line truncated caption */}
                    <p className="text-[11px] sm:text-xs font-medium leading-tight line-clamp-2 text-slate-100 mb-2 drop-shadow-xs">
                      {reel.caption}
                    </p>

                    {/* Metadata: Likes count with sparkle icon & Comments count with message icon */}
                    <div className="flex items-center justify-between pt-1.5 border-t border-white/20 text-[11px] font-semibold text-slate-200">
                      <div className="flex items-center gap-2.5">
                        {/* Likes count with Sparkle Icon */}
                        <button
                          onClick={(e) => toggleLike(reel.id, e)}
                          className="flex items-center gap-1 hover:text-sky-300 transition-colors"
                          title="Like Reel"
                        >
                          {isLiked ? (
                            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          )}
                          <span>{reel.likes}</span>
                        </button>

                        {/* Comments count with Message Icon */}
                        <div className="flex items-center gap-1 hover:text-sky-300 transition-colors">
                          <MessageCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{reel.comments}</span>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold text-sky-400 tracking-tight">
                        {reel.tag}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Theme-Matching Primary Button CTA Banner */}
        <div className="mt-8 sm:mt-10 text-center flex items-center justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hallmark btn-shine-sweep px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-700 hover:to-sky-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-white" />
            <span>Follow Us @littlesheaven.official</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/90 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Interactive Reel Lightbox / Modal */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-[9/16] max-h-[82vh] bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between">
            {/* Modal Reel Background Image */}
            <img
              src={selectedReel.image}
              alt={selectedReel.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top Bar Controls */}
            <div className="relative z-10 p-3.5 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5 shadow-md">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                    <Instagram className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-none">
                    {selectedReel.handle}
                  </h4>
                  <span className="text-[9px] text-slate-300 font-medium">
                    {selectedReel.audioTitle || 'Original Audio'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                </button>

                <button
                  onClick={() => setSelectedReel(null)}
                  className="p-1.5 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Play/Pause Overlay indicator */}
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative z-10 flex-1 flex items-center justify-center cursor-pointer"
            >
              {!isPlaying && (
                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl animate-in zoom-in-75 duration-200">
                  <Play className="w-7 h-7 text-sky-400 fill-sky-400 ml-1" />
                </div>
              )}
            </div>

            {/* Bottom Content & Meta Bar */}
            <div className="relative z-10 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent text-white space-y-2.5">
              <p className="text-xs font-medium leading-snug text-slate-100 drop-shadow-md">
                {selectedReel.caption}
              </p>

              {/* Hashtags & Sound */}
              <div className="flex items-center justify-between text-[11px] text-sky-300 font-semibold">
                <span className="bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30 text-sky-300">
                  {selectedReel.tag}
                </span>
                <span className="text-[10px] text-slate-300 font-medium">
                  {selectedReel.views} views
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-white/15 text-xs font-semibold">
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => toggleLike(selectedReel.id, e)}
                    className="flex items-center gap-1 hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    {likedReels[selectedReel.id] ? (
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-bounce" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-sky-400" />
                    )}
                    <span>{selectedReel.likes}</span>
                  </button>

                  <div className="flex items-center gap-1 text-slate-200">
                    <MessageCircle className="w-4 h-4 text-sky-400" />
                    <span>{selectedReel.comments}</span>
                  </div>
                </div>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] shadow-md shadow-blue-500/20 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3 h-3" />
                  <span>View IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
