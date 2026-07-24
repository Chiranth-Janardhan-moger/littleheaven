import React, { useState } from 'react';
import { PROGRAMS } from '../data/preschoolData';
import { Program } from '../types';
import { ProgramModal } from './ProgramModal';
import {
  Baby,
  Sparkles,
  BookOpen,
  BrainCircuit,
  Rocket,
  Clock,
  Users,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface ProgramsSectionProps {
  onEnrollProgram: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onEnrollProgram }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return Baby;
      case 'Sparkles':
        return Sparkles;
      case 'BookOpen':
        return BookOpen;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Rocket':
        return Rocket;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="programs" className="relative py-20 lg:py-28 bg-gradient-to-b from-blue-50/20 via-sky-50/30 to-white overflow-hidden">
      
      {/* Background soft glow blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Tailored Early Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nurturing Programs for <br />
            <span className="text-gradient-primary">Every Stage of Growth</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From infancy discovery to kindergarten leadership, our programs combine play-based exploration with neuroscience-backed developmental milestones.
          </p>
        </div>

        {/* Glassmorphism Program Cards Flex Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch">
          {PROGRAMS.map((prog, index) => {
            const IconComp = getProgramIcon(prog.iconName);
            const isEven = index % 2 === 0;
            const hoverRotateClass = isEven ? 'hover:rotate-1' : 'hover:-rotate-1';

            return (
              <div
                key={prog.id}
                className={`w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1.35rem)] glass-card glass-card-hover ${hoverRotateClass} rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between relative group border border-white/90 bg-white/85 shadow-[0_12px_36px_rgba(37,99,235,0.07)] hover:shadow-[0_20px_48px_rgba(37,99,235,0.16)] transition-all duration-500 hover:-translate-y-1.5`}
              >
                <div className="space-y-4">
                  
                  {/* 1. Large Program Image */}
                  <div className="relative w-full aspect-[16/11] rounded-[22px] overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 bg-slate-100">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Glassmorphism Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-white/90 flex items-center justify-center text-blue-600 shadow-md">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* 2. Program Name */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors pt-1">
                    {prog.title}
                  </h3>

                  {/* 3. Age Display (Premium Glass Badge - Time removed as requested) */}
                  <div className="pt-1">
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-blue-50/90 border border-blue-100/90 text-blue-900 text-xs sm:text-sm font-bold shadow-2xs">
                      <span className="text-base">👶</span>
                      <span className="text-slate-700 font-medium">Age: <strong className="text-blue-700 font-extrabold">{prog.ageGroup}</strong></span>
                    </div>
                  </div>

                </div>

                {/* 4. Two Equal-Sized Buttons: Learn More & Enquiry */}
                <div className="pt-4 mt-5 border-t border-slate-100/80 grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    id={`prog-learn-more-${prog.id}`}
                    className="py-2.5 px-3 rounded-full text-xs font-bold text-blue-700 bg-blue-50/90 hover:bg-blue-100 border border-blue-100 hover:border-blue-200 transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer shadow-2xs hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  </button>

                  <button
                    onClick={() => onEnrollProgram(prog.title)}
                    id={`prog-enquiry-btn-${prog.id}`}
                    className="py-2.5 px-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-md shadow-blue-500/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Program Detail Glassmorphism Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnroll={onEnrollProgram}
      />
    </section>
  );
};

