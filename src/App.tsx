import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, AlertCircle, RefreshCw, Star, ArrowRight, BookOpen, FileText, CheckCircle2, ChevronRight, Zap, Target } from 'lucide-react';
import { TabType } from './types';
import AppNavbar from './components/AppNavbar';
import ActiveLensModel from './components/ActiveLensModel';
import ResearchTab from './components/ResearchTab';
import TechnologyTab from './components/TechnologyTab';
import InnovationTab from './components/InnovationTab';
import DocumentsTab from './components/DocumentsTab';
import ContactTab from './components/ContactTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  // Navigate utility
  const handleNavigate = (tabId: TabType) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#030d17] text-neutral-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-neutral-900 leading-normal antialiased">
      
      {/* Dynamic Header Navbar Applet */}
      <AppNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Primary Section Switchboard Router */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home-hero-landing"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-24 pb-20 pt-10"
            >
              
              {/* BRAND HERO BOARD */}
              <section id="hero-overview-frame" className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" aria-label="Brand Hero Presentation">
                
                {/* Brand Pitch - 5 columns */}
                <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-xs font-mono font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>THE FUTURE OF OPHTHALMICS IS ACTIVE</span>
                  </div>

                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                    A Contact Lens <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-400">
                      That Cleans Itself.
                    </span>
                  </h1>

                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    OptiPulse is an intelligent, bio-adaptive smart contact lens system. It leverages localized solid-state micro-vibration synchronized with natural eyelid blinks to maintain crystalline optical clarity, maximize physical comfort, and safely discard organic proteins in real time.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                    <button
                      onClick={() => handleNavigate('research')}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-black tracking-wider transition duration-350 uppercase shadow-[0_0_15px_rgba(0,183,255,0.4)] hover:shadow-[0_0_25px_rgba(0,183,255,0.6)]"
                    >
                      View Research
                    </button>
                    <button
                      onClick={() => handleNavigate('documents')}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 text-xs font-bold tracking-wider transition duration-200 uppercase"
                    >
                      Download Whitepaper
                    </button>
                    <button
                      onClick={() => handleNavigate('contact')}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-white transition duration-200"
                    >
                      Join Beta Program &rarr;
                    </button>
                  </div>
                </div>

                {/* Hero Interactive Lens Telemetry Widget - 7 columns */}
                <div className="lg:col-span-7">
                  <div className="text-center mb-4 lg:text-right pr-6">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">INTERACTIVE SIMULATOR HUB &bull; TAP BUTTONS TO INTERACT</span>
                  </div>
                  <ActiveLensModel />
                </div>

              </section>

              {/* PROBLEM THE CHALLENGE GRID SECTION */}
              <section id="problem-challenge-section" className="bg-[#07111a]/45 py-20 border-y border-white/5 relative overflow-hidden" aria-label="Problems with traditional contact lenses">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4">
                  
                  {/* Section Title */}
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-3">THE CLINICAL PROBLEM</span>
                    <h2 className="font-display text-2xl md:text-3.5xl font-extrabold text-white tracking-tight">
                      More Than 140 Million Wearers Face Static Limitations
                    </h2>
                    <p className="mt-4 text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                      Standard ocular corrective lenses are entirely passive. Once inserted, continuous protein fouling and lipid accretion deplete ocular health, prompting severe dryness and irritation.
                    </p>
                  </div>

                  {/* Problems Grid layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* card 1 */}
                    <div className="p-6 rounded-2xl border border-white/5 bg-neutral-950/40 hover:border-cyan-500/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 font-bold font-mono text-sm">
                        01
                      </div>
                      <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                        Protein Buildup & Grime
                      </h3>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-sans">
                        Enzymes in biological tear film instantly adhere to hydrogel materials, forming micro-opaque clouds of stubborn protein grids within 4 hours.
                      </p>
                    </div>

                    {/* card 2 */}
                    <div className="p-6 rounded-2xl border border-white/5 bg-neutral-950/40 hover:border-cyan-500/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 font-bold font-mono text-sm">
                        02
                      </div>
                      <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                        Ocular Surface Irritation
                      </h3>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-sans">
                        Deposits decrease localized oxygen transmissibility. Wearers suffer from physical corneal friction, dry eye symptoms, and cellular injection anomalies.
                      </p>
                    </div>

                    {/* card 3 */}
                    <div className="p-6 rounded-2xl border border-white/5 bg-neutral-950/40 hover:border-cyan-500/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 font-bold font-mono text-sm">
                        03
                      </div>
                      <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                        Laborious External Hygiene
                      </h3>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-sans">
                        External daily chemical scrubbing risks lens tears, chemical toxicity reactions, and introduces constant bacterial contamination opportunities.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* INTRODUCING OPTIPULSE KEY INNOVATIONS */}
              <section id="solution-innovation-highlights" className="max-w-7xl mx-auto px-4" aria-label="Introducing OptiPulse Active solution">
                
                {/* Header Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
                  <div className="lg:col-span-6 space-y-2">
                    <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block">ACTIVE NANOTECHNOLOGY</span>
                    <h2 className="font-display text-2xl md:text-3.5xl font-extrabold text-white tracking-tight">
                      Introducing OptiPulse
                    </h2>
                  </div>
                  <p className="lg:col-span-6 text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                    OptiPulse safely monitors surface conditions and shifts particles using adaptive acoustic shear micro-vibration. Triggering exclusively under physical blink closure preserves zero central optical axis degradation.
                  </p>
                </div>

                {/* Innovations Grid - bento layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Item 1 */}
                  <div className="p-6 rounded-2xl bg-[#071B2E]/40 border border-[#00B7FF]/10 flex flex-col justify-between min-h-[170px] glass-panel-hover transition duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4.5 h-4.5 text-cyan-400" />
                        <h3 className="font-display font-bold text-white text-xs uppercase tracking-wider">Adaptive Cleaning Engine</h3>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                        The case controller evaluates tear protein viscosity matrices and triggers momentary, comfortable micro-vibrations custom-tuned to particle mass.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-wider mt-3">250Hz - 320Hz Resonance</span>
                  </div>

                  {/* Item 2 */}
                  <div className="p-6 rounded-2xl bg-[#071B2E]/40 border border-[#00B7FF]/10 flex flex-col justify-between min-h-[170px] glass-panel-hover transition duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4.5 h-4.5 text-cyan-400" />
                        <h3 className="font-display font-bold text-white text-xs uppercase tracking-wider">Blink-Synced Gating</h3>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                        Solid-state photorises track physical blink events. Actuation fires only when coordinates track complete lid closure, rendering vibrations completely unfelt.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-wider mt-3">Blink Event Gating</span>
                  </div>

                  {/* Item 3 */}
                  <div className="p-6 rounded-2xl bg-[#071B2E]/40 border border-[#00B7FF]/10 flex flex-col justify-between min-h-[170px] glass-panel-hover transition duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4.5 h-4.5 text-cyan-400" />
                        <h3 className="font-display font-bold text-white text-xs uppercase tracking-wider">Smart Contamination Bio-Sensing</h3>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                        Miniature boundary platinum nodes continuously check impedance shifts to track organic film accretion density in-situ over daily wearing cycles.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-wider mt-3">Biosensing Feedback Loop</span>
                  </div>

                  {/* Item 4 */}
                  <div className="p-6 rounded-2xl bg-[#071B2E]/40 border border-[#00B7FF]/10 flex flex-col justify-between min-h-[170px] glass-panel-hover transition duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4.5 h-4.5 text-cyan-400" />
                        <h3 className="font-display font-bold text-white text-xs uppercase tracking-wider">Safety-Limited Safeguards</h3>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                        Hardware-level cutoff timers disarm micro-vibrations dynamically if event durations breach 2.0 seconds or if amplitude indicators deviate.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-[#8aefff] font-semibold uppercase tracking-wider mt-3">&lt;2.0-sec Automatic Stop</span>
                  </div>

                  {/* Item 5 */}
                  <div className="p-6 rounded-2xl bg-[#071B2E]/40 border border-[#00B7FF]/10 flex flex-col justify-between min-h-[170px] glass-panel-hover transition duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4.5 h-4.5 text-cyan-400" />
                        <h3 className="font-display font-bold text-white text-xs uppercase tracking-wider">Future Tearilm Diagnostics</h3>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                        Development plans include integrating biosensor matrices checking electrolyte content, salt indices, and vital biomarker logs to support clinical updates.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-[#8aefff] font-semibold uppercase tracking-wider mt-3">Expansion Roadmap Ready</span>
                  </div>

                  {/* Call to Tech Tab */}
                  <div className="p-6 rounded-2xl border border-dashed border-white/10 flex flex-col justify-between min-h-[170px] hover:border-cyan-400/40 transition duration-300 group">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-[#8aefff] text-xs uppercase tracking-wider">Explore System Physics</h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Examine solid-state concentric antennas, platinum ring micro-electrodes, and smart case architectures. Read full patents and spec comparative matrices.
                      </p>
                    </div>
                    <button 
                      onClick={() => handleNavigate('technology')}
                      className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 font-semibold group-hover:text-white transition duration-200 mt-3"
                    >
                      <span>Review Core blueprints</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </section>

              {/* HOW IT WORKS SUMMARY STRIP */}
              <section id="homepage-how-it-works-banner" className="bg-[#07111a]/45 py-14 border-y border-white/5 relative overflow-hidden" aria-label="Overview cycle steps">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-baseline justify-between gap-6">
                  <div className="max-w-md">
                    <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-1">AUTOMATED SWEEP</span>
                    <h3 className="font-display text-xl font-bold text-white">How the Blink Cycle Works</h3>
                    <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                      Sensors detect buildup. The micro-gated processor maps natural blinks. It calculates an instantaneous acoustic sweep profile. Micro-vibrations shed debris. Optical clarity indices are verified. System re-locks.
                    </p>
                    <button
                      onClick={() => handleNavigate('technology')}
                      className="mt-4 inline-flex items-center space-x-1 text-xs text-cyan-400 font-semibold hover:text-white transition"
                    >
                      <span>Explore Timeline schematics &rarr;</span>
                    </button>
                  </div>
                  
                  {/* Decorative timeline mockup graphic */}
                  <div className="w-full md:w-[48%] bg-neutral-950/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-2.5 flex-wrap">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-[#8aefff] block">STAGE 1</span>
                      <span className="font-display font-bold text-white text-[11px] block">Detect accretion</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-[#8aefff] block">STAGE 2</span>
                      <span className="font-display font-bold text-white text-[11px] block">Swipe sync</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-[#8aefff] block">STAGE 3</span>
                      <span className="font-display font-bold text-white text-[11px] block">Acoustic clean</span>
                    </div>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {activeTab === 'research' && (
            <motion.div
              key="research-tab-view"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3 }}
            >
              <ResearchTab />
            </motion.div>
          )}

          {activeTab === 'technology' && (
            <motion.div
              key="technology-tab-view"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3 }}
            >
              <TechnologyTab />
            </motion.div>
          )}

          {activeTab === 'patent' && (
            <motion.div
              key="patent-tab-view"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3 }}
            >
              <InnovationTab />
            </motion.div>
          )}

          {activeTab === 'documents' && (
            <motion.div
              key="documents-tab-view"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3 }}
            >
              <DocumentsTab />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact-tab-view"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3 }}
            >
              <ContactTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER CTA & BRAND DEETS */}
      <footer className="border-t border-white/10 bg-[#020910] text-[#f1f5f9] select-none text-xs" aria-label="Corporate Footer">
        
        {/* Animated ambient eye visualization strip */}
        <div className="w-full bg-[#030d17] border-b border-white/5 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(0,183,255,0.06)_0%,transparent_60%) pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 text-center space-y-5 relative z-10">
            <h3 className="font-display text-xl md:text-2xl font-extrabold text-white tracking-tight">
              Join the Future of Vision Technology
            </h3>
            <p className="text-neutral-400 max-w-lg mx-auto leading-relaxed text-xs">
              Help shape the next generation of intelligent contact lenses. Sponsor, license, or review pre-clinical evaluations.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleNavigate('documents')}
                className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold transition text-xs tracking-wider uppercase"
              >
                Download Research
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 text-xs font-bold transition"
              >
                Contact Team
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className="px-5 py-2.5 rounded-lg bg-[#00B7FF]/10 text-cyan-400 text-xs font-semibold hover:bg-cyan-400 hover:text-neutral-950 transition duration-300"
              >
                Request Collaboration
              </button>
            </div>
          </div>
        </div>

        {/* Corporate Legal & links */}
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-neutral-500">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>&copy; {currentYear} OPTIPULSE MEDICAL CO-OPERATIVE. ALL INTELLECTUAL PROPERTY PRESERVED.</span>
          </div>

          <div className="flex items-center space-x-6 text-neutral-400 flex-wrap justify-center">
            <button onClick={() => handleNavigate('home')} className="hover:text-cyan-400 transition">OVERVIEW</button>
            <button onClick={() => handleNavigate('research')} className="hover:text-cyan-400 transition">RESEARCH</button>
            <button onClick={() => handleNavigate('technology')} className="hover:text-cyan-400 transition">TECHNOLOGY</button>
            <button onClick={() => handleNavigate('patent')} className="hover:text-cyan-400 transition">PATENTS & IP</button>
            <button onClick={() => handleNavigate('documents')} className="hover:text-cyan-400 transition">DOCUMENTS</button>
          </div>
        </div>

      </footer>

    </div>
  );
}
