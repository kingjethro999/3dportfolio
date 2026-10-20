/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { SettingsMenu } from './components/SettingsMenu';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { GitHubStatsSection } from './components/GitHubStatsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [soundVolume, setSoundVolume] = useState(0.5);
  const [cursorEnabled, setCursorEnabled] = useState(true);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleInquireFromProject = () => {
    setSelectedProject(null);
    setIsContactOpen(true);
  };

  return (
    <main
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA]"
      style={{ overflowX: 'clip' }}
    >
      <ScrollProgressBar />
      <CustomCursor enabled={cursorEnabled} />
      <SettingsMenu
        soundEnabled={soundEnabled}
        onToggleSound={setSoundEnabled}
        soundVolume={soundVolume}
        onChangeVolume={setSoundVolume}
        cursorEnabled={cursorEnabled}
        onToggleCursor={setCursorEnabled}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key="king-jethro-portfolio-page"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <HeroSection onOpenContact={handleOpenContact} />
          <MarqueeSection />
          <AboutSection onOpenContact={handleOpenContact} />
          <GitHubStatsSection />
          <ServicesSection />
          <ProjectsSection onSelectProject={handleSelectProject} />
        </motion.div>
      </AnimatePresence>

      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onInquire={handleInquireFromProject}
      />
    </main>
  );
}
