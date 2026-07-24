import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MissionVision } from './components/MissionVision';
import { ProgramsSection } from './components/ProgramsSection';
import { TimelineSection } from './components/TimelineSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookGallery } from './components/BookGallery';
import { ParentReviews } from './components/ParentReviews';
import { EnquirySection } from './components/EnquirySection';
import { CampusTourModal } from './components/CampusTourModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';
import {
  HeroToMissionDivider,
  MissionToProgramsDivider,
  ProgramsToTimelineDivider,
  TimelineToWhyChooseUsDivider,
  WhyChooseUsToGalleryDivider,
  GalleryToReviewsDivider,
  ReviewsToContactDivider,
  ContactToFooterDivider
} from './components/SectionDividers';

export default function App() {
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [enrollProgramTitle, setEnrollProgramTitle] = useState('Nursery');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnroll = (programTitle?: string) => {
    if (programTitle) {
      setEnrollProgramTitle(programTitle);
    }
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-[#F8FCFF] text-slate-800 font-sans selection:bg-sky-200 selection:text-blue-900 overflow-x-hidden">
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenEnroll={() => handleOpenEnroll()}
        onOpenTour={() => setTourModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenEnroll={() => handleOpenEnroll()}
        onExplorePrograms={() => scrollToSection('programs')}
      />

      {/* Decorative Divider: Cloud Waves with Sparkles */}
      <HeroToMissionDivider />

      {/* Mission & Vision Section */}
      <AnimatedSection>
        <MissionVision />
      </AnimatedSection>

      {/* Decorative Divider: Flowing Dotted Path & Swirls */}
      <MissionToProgramsDivider />

      {/* Programs Section */}
      <AnimatedSection>
        <ProgramsSection
          onEnrollProgram={(title) => handleOpenEnroll(title)}
        />
      </AnimatedSection>

      {/* Decorative Divider: Nature & Flower Sprouts Curved Double Wave */}
      <ProgramsToTimelineDivider />

      {/* Daily Activities Timeline */}
      <AnimatedSection>
        <TimelineSection />
      </AnimatedSection>

      {/* Decorative Divider: Swirl Ribbon with Floating Shapes */}
      <TimelineToWhyChooseUsDivider />

      {/* Why Choose Us (Continuous Moving Line) */}
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>

      {/* Decorative Divider: Multi-Layer Soft Wave with Shimmer */}
      <WhyChooseUsToGalleryDivider />

      {/* Photo Storybook Gallery */}
      <AnimatedSection>
        <BookGallery />
      </AnimatedSection>

      {/* Decorative Divider: Bubble Cluster & Flowing Dotted Path */}
      <GalleryToReviewsDivider />

      {/* Parent Reviews (Dual-Direction Carousels) */}
      <AnimatedSection>
        <ParentReviews />
      </AnimatedSection>

      {/* Decorative Divider: Wavy Bridge into Contact Section */}
      <ReviewsToContactDivider />

      {/* Enquiry / Enrollment Form Section */}
      <AnimatedSection>
        <EnquirySection
          initialProgramTitle={enrollProgramTitle}
          onOpenTour={() => setTourModalOpen(true)}
        />
      </AnimatedSection>

      {/* Decorative Divider: Midnight Navy Wave & Star Constellation into Footer */}
      <ContactToFooterDivider />

      {/* Footer */}
      <Footer />

      {/* Schedule Campus Tour Modal */}
      <CampusTourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
      />

      {/* Always Visible Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
