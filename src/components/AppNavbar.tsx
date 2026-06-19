import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, Layers, FileText, ChevronRight, MessageSquare, Microscope, BookOpen, Compass } from 'lucide-react';
import { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function AppNavbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const menuItems = [
    { id: 'home' as TabType, label: 'Overview', icon: Compass },
    { id: 'research' as TabType, label: 'Research', icon: Microscope },
    { id: 'technology' as TabType, label: 'Technology', icon: Layers },
    { id: 'patent' as TabType, label: 'Patent & IP', icon: Landmark },
    { id: 'documents' as TabType, label: 'Documents', icon: FileText },
    { id: 'contact' as TabType, label: 'Team & FAQ', icon: MessageSquare },
  ];

  const handleNavClick = (tabId: TabType) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);

    // Smooth scroll back to top of main frame when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2.5 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 rounded-lg p-1 group"
          aria-label="OptiPulse home page"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00B7FF] to-[#8AEFFF] flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(0,183,255,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#030d17] flex items-center justify-center">
              <span className="font-display font-black text-xs text-[#00B7FF] tracking-wider">O</span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-black text-sm tracking-wider text-white">OptiPulse</span>
            <span className="text-[8px] font-mono font-bold tracking-widest text-cyan-400 uppercase -mt-0.5">SMART LENS</span>
          </div>
        </button>

        {/* Desktop Navigation Links links */}
        <nav className="hidden md:flex items-center space-x-1" aria-label="Desktop menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 relative ${
                activeTab === item.id
                  ? 'text-cyan-400 font-bold bg-[#00B7FF]/10 md:bg-transparent'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(0,183,255,0.8)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button: Launch trial */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-black tracking-wider transition duration-300 uppercase shadow-[0_0_15px_rgba(0,183,255,0.3)] hover:shadow-[0_0_20px_rgba(0,183,255,0.5)]"
          >
            Join Beta
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg bg-white/5 border border-white/5 text-neutral-400 hover:text-white transition focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-white/5 bg-neutral-950 px-4 py-3 space-y-2 overflow-hidden"
          >
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-3 ${
                    activeTab === item.id
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/20'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0 text-cyan-400/85" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-black tracking-widest transition uppercase shadow-md"
              >
                Join Beta Program
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
