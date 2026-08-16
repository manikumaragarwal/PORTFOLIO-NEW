import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ActiveSection, Project } from './types';
import { Header } from './components/layout/Header';
import { Dock } from './components/layout/Dock';
import { Hero } from './components/hero/Hero';
import { WorksGrid } from './components/works/WorksGrid';
import { CaseStudyView } from './components/works/CaseStudyView';
import { SidequestsCanvas } from './components/sidequests/SidequestsCanvas';
import { ProfileSection } from './components/profile/ProfileSection';
import { BlogSection } from './components/blog/BlogSection';
import { PROFILE_INFO } from './data/profile';
import { Check } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('works');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Copied to clipboard! 📋');

  const triggerToast = (msg: string = 'Copied to clipboard! 📋') => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2600);
  };

  const handleSelectSection = (section: ActiveSection) => {
    setActiveSection(section);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleScrollToWorks = () => {
    const worksEl = document.getElementById('works-section');
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  return (
    <div className="min-h-screen bg-grid-paper text-zinc-900 relative flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28 }}
            className="fixed top-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-zinc-900/90 backdrop-blur-md text-white text-xs font-mono shadow-2xl flex items-center gap-2 border border-white/10"
          >
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Layout */}
      <div className="w-full flex flex-col flex-1">
        {/* Top Header */}
        <Header
          onNavigateHome={() => handleSelectSection('works')}
          onCopyEmailToast={() => triggerToast(`${PROFILE_INFO.email} copied! 📬`)}
        />

        {/* Dynamic Main View with AnimatePresence */}
        <main className="w-full flex-1">
          {/* Case Study Full View */}
          {selectedProject ? (
            <CaseStudyView
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
              onSelectProject={handleSelectProject}
            />
          ) : (
            <AnimatePresence mode="wait">
              {/* 1. Works View (Hero + 2x2 Showcase Grid) */}
              {activeSection === 'works' && (
                <motion.div
                  key="works"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-4"
                >
                  <Hero
                    onScrollToWorks={handleScrollToWorks}
                    onCopyToast={() => triggerToast('Bio copied! 📝')}
                  />
                  <WorksGrid onSelectProject={handleSelectProject} />
                </motion.div>
              )}

              {/* 2. Sidequests View (Draggable Whiteboard) */}
              {activeSection === 'sidequests' && (
                <motion.div
                  key="sidequests"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <SidequestsCanvas />
                </motion.div>
              )}

              {/* 3. Profile View (Photo Album & Narrative) */}
              {activeSection === 'profile' && (
                <motion.div
                  key="profile"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <ProfileSection onCopyToast={() => triggerToast('Email copied! 📬')} />
                </motion.div>
              )}

              {/* 4. Blog View (Articles & Reader) */}
              {activeSection === 'blog' && (
                <motion.div
                  key="blog"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <BlogSection />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </main>
      </div>

      {/* Bottom Floating macOS Dock */}
      {!selectedProject && (
        <Dock
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
        />
      )}

    </div>
  );
}

export default App;
