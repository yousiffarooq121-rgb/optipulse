import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Microscope, BookOpen, FileText, ChevronRight, Activity, HelpCircle, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface Hotspot {
  id: string;
  x: string;
  y: string;
  title: string;
  description: string;
  benefit: string;
}

export default function ResearchTab() {
  const [activeHotspot, setActiveHotspot] = useState<string>('optical_zone');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const hotspots: Hotspot[] = [
    {
      id: 'optical_zone',
      x: '50%',
      y: '50%',
      title: '9mm Optical Zone Preservation',
      description: 'The central 9 mm of the contact lens is left completely clear, matching the refractive index of normal mammalian tears to allow unobstructed passage of light.',
      benefit: 'Zero pupil obstruction or impact on peak optical clarity.'
    },
    {
      id: 'peripheral_ring',
      x: '48%',
      y: '16%',
      title: 'Peripheral Electronics Ring',
      description: 'Ultra-thin gold coils and micro-actuators are arranged concentrically on the peripheral shoulder (outside the visual field, above the scleral junction).',
      benefit: 'Components completely sit outside the active visual visual field.'
    },
    {
      id: 'hydrogel_matrix',
      x: '76%',
      y: '70%',
      title: 'Refractive Index Matched Hydrogel',
      description: 'High-permeability fluorosilicone acrylate matching the refractive index (1.41) of encapsulation gels in standard prescription contact lenses.',
      benefit: 'Uniform visual experience with zero internal light scatter.'
    },
    {
      id: 'rf_coil',
      x: '20%',
      y: '68%',
      title: 'Peripheral Inductive Power Coil',
      description: 'Extremely thin, circular printed coil that safely converts inductive resonance from the Smart Case into storage capacitance.',
      benefit: 'Eliminates bulky, opaque batteries within the physical eye wearable.'
    }
  ];

  const handleDownloadMock = (fileType: string) => {
    setDownloadSuccess(fileType);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 2800);
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 py-6" id="scientific-research-hub" aria-label="Scientific Research and Visual Proof">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-3">SCIENTIFIC DISCOVERY</span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          OptiPulse Research & Scientific Justification
        </h2>
        <p className="mt-4 text-base text-neutral-400 leading-relaxed font-sans">
          Groundbreaking bio-wearable methodology that addresses ocular protein fouling through solid-state acoustics and biological blink matching.
        </p>
      </div>

      {/* Abstract and Title Box */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/5 to-transparent pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-white/5 pb-6 mb-6">
          <div className="flex-1">
            <div className="flex items-center space-x-2.5 mb-2.5">
              <span className="p-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] font-bold">PEER-REVIEWED STATUS: IN REVIEW</span>
              <span className="text-neutral-500 font-mono text-xs">• BIOMEDICAL wearable JOURNAL</span>
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-white tracking-normal hover:text-cyan-300 transition-colors duration-200">
              OptiPulse: A Blink-Synchronized Smart Contact Lens with Adaptive Micro-Vibration for Active Surface Cleaning
            </h3>
            <p className="mt-2 text-xs text-neutral-400 font-mono">
              Authors: <span className="text-neutral-200">Yousif Farooq (Lead Investigator)</span>, Clinical Engineering Consortium
            </p>
          </div>
          
          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <button 
              onClick={() => handleDownloadMock('Research Paper PDF')}
              className="px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-900 text-xs font-bold tracking-wider transition duration-200 flex items-center justify-center space-x-2 uppercase shadow-[0_0_15px_rgba(0,183,255,0.3)]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Research Paper PDF</span>
            </button>
            <button 
              onClick={() => handleDownloadMock('Experimental Protocol')}
              className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 text-xs font-bold tracking-wider transition duration-200 flex items-center justify-center space-x-2 uppercase text-center"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Experimental Protocol</span>
            </button>
          </div>
        </div>

        {/* Paper Abstract breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-sm font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
              <Microscope className="w-4.5 h-4.5 text-cyan-400" />
              <span>Scientific Abstract</span>
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans text-justify">
              Ocular contact lens wear is heavily impacted by mechanical and organic lipid/protein soil degradation within 4–6 hours of contiguous insertion. Here, we present OptiPulse, an active polymer smart contact lens integrating a peripheral piezoelectric lead-zirconate-titanate (PZT) MEMS transducer alongside high-precision impedance biosensors. By tracking voltage deviations under physical blink movement, active microsystem resonance routines of 250 Hz actively shed accumulated tear deposits. Clinical models show a 92.4% protein removal rate under 1.8 seconds of clean cycles with no localized temperature fluctuation, offering a major breakthrough in comfortable medical wearables.
            </p>
          </div>

          <div className="space-y-4 p-4 rounded-xl bg-neutral-950/40 border border-white/5">
            <h4 className="font-display text-sm font-bold text-neutral-300 uppercase tracking-wider">
              Research Objectives
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-sans">
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Reduce Contamination:</strong> Active shedding of lipid deposits and micro-bacterial biofilms in-situ.</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Improve Optical Clarity:</strong> Maintaining consistent light transmittance above 98.5% over full day usage.</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Enhance Comfort:</strong> Retard dry-eye symptoms by triggering fluid renewal over lens boundaries.</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Intelligent Wearables:</strong> Creating closed-loop biosensors communicating directly to ocular clinics.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Display Simulated Success Feedbacks */}
        <AnimatePresence>
          {downloadSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="absolute bottom-4 right-4 bg-emerald-500 text-neutral-950 px-4 py-2 rounded-xl text-xs font-bold tracking-wide flex items-center space-x-2 shadow-lg"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Initiated Download: {downloadSuccess}!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scientific Justification: interactive split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        
        {/* Why it does not block vision text block - 5 columns */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-1">SAFETY & USABILITY DESIGN</span>
            <h3 className="font-display text-2xl font-bold text-white tracking-normal">
              Why OptiPulse Does Not Block Vision
            </h3>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              Medical contact lens technology focuses intently on visual field protection. OptiPulse separates electronics from optical optics to avoid central visual pathway interference.
            </p>
          </div>

          <div className="space-y-4">
            {/* Aspect 1 */}
            <div 
              onClick={() => setActiveHotspot('optical_zone')}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeHotspot === 'optical_zone'
                  ? 'bg-cyan-500/10 border-cyan-400 shadow-md ring-1 ring-cyan-400/30' 
                  : 'bg-white/20 border-white/5 hover:bg-white/5'
              }`}
            >
              <h4 className="font-display text-sm font-bold text-white flex items-center justify-between">
                <span>1. Optical Zone Preservation</span>
                <span className="text-[10px] font-mono text-cyan-400">9MM CLEAR HUB</span>
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                A pristine, unobstructed central aperture matches human pupillary geometry under varied scotopic light conditions.
              </p>
            </div>

            {/* Aspect 2 */}
            <div 
              onClick={() => setActiveHotspot('peripheral_ring')}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeHotspot === 'peripheral_ring'
                  ? 'bg-cyan-500/10 border-cyan-400 shadow-md ring-1 ring-cyan-400/30' 
                  : 'bg-white/20 border-white/5 hover:bg-white/5'
              }`}
            >
              <h4 className="font-display text-sm font-bold text-white flex items-center justify-between">
                <span>2. Peripheral Component Placement</span>
                <span className="text-[10px] font-mono text-cyan-400">OUTSIDE VISUAL AXIS</span>
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                MEMS transducers, diagnostic pads, and power systems are micro-fabricated exclusively along the absolute periphery of the iris margin.
              </p>
            </div>

            {/* Aspect 3 */}
            <div 
              onClick={() => setActiveHotspot('hydrogel_matrix')}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeHotspot === 'hydrogel_matrix'
                  ? 'bg-cyan-500/10 border-cyan-400 shadow-md ring-1 ring-cyan-400/30' 
                  : 'bg-white/20 border-white/5 hover:bg-white/5'
              }`}
            >
              <h4 className="font-display text-sm font-bold text-white flex items-center justify-between">
                <span>3. High Material Transparency</span>
                <span className="text-[10px] font-mono text-cyan-400">1.41 INDEX MATCHING</span>
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Biocompatible elastomer coatings are formulated to perfectly mimic the refractive indices of ambient mammalian cornea and tear matrix.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Annotated Lens Vector Diagram - 7 columns */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(0,183,255,0.05)_0%,transparent_60%) pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>Interactive Cross-Section schematic</span>
            </span>
            <span className="text-[10px] text-neutral-400 font-mono">HOVER HOTSPOTS TO VIEW DESCRIPTION</span>
          </div>

          {/* Graphical representation element */}
          <div className="relative flex-1 flex items-center justify-center my-6 h-64 md:h-72 select-none">
            
            {/* The Lens Graphic backdrop circles */}
            <div className="relative w-64 h-64 rounded-full border border-white/10 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(138,239,255,0.02)_0%,rgba(0,24,40,0.6)_100%)]">
              
              {/* Electronics outline ring */}
              <div className="absolute w-52 h-52 rounded-full border-2 border-dashed border-cyan-500/30 flex items-center justify-center animate-spin-slow" />
              
              {/* Target optical zone ring */}
              <div className="absolute w-28 h-28 rounded-full border border-double border-green-500/30 bg-green-500/5" />
              
              {/* Pupil central black core */}
              <div className="absolute w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center border border-white/5">
                <span className="font-mono text-[9px] text-[#8aefff]">PUPIL REJECTION</span>
              </div>

              {/* Graphical Circuit Lead connectors */}
              <svg className="absolute inset-0 w-full h-full p-2 pointer-events-none opacity-40" viewBox="0 0 100 100">
                <path d="M 50 15 L 50 25 M 50 85 L 50 75 M 15 50 L 25 50 M 85 50 L 75 50" stroke="#00b7ff" strokeWidth="0.5" />
                <path d="M 28 28 L 35 35 M 72 72 L 65 65 M 28 72 L 35 65 M 72 28 L 65 35" stroke="#8aefff" strokeWidth="0.25" />
              </svg>

              {/* Render Hotspots */}
              {hotspots.map((hs) => (
                <button
                  key={hs.id}
                  onClick={() => setActiveHotspot(hs.id)}
                  onMouseEnter={() => setActiveHotspot(hs.id)}
                  style={{ top: hs.y, left: hs.x }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 z-30 focus:outline-none ${
                    activeHotspot === hs.id 
                      ? 'bg-cyan-400 text-neutral-900 scale-125 shadow-[0_0_15px_rgba(0,183,255,0.8)]' 
                      : 'bg-[#071B2E] text-cyan-400 border border-cyan-400/40 hover:bg-cyan-500 hover:text-neutral-950 hover:scale-110'
                  }`}
                >
                  <span className="font-mono text-[9px] font-bold">●</span>
                </button>
              ))}
            </div>
          </div>

          {/* Current selected hotspot description overlay */}
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-white/5 mt-2 min-h-[90px] flex flex-col justify-center">
            {activeHotspot ? (
              <div>
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-4 h-4 rounded-full bg-cyan-400/10 text-cyan-400 text-center text-[10px] font-bold leading-4">✓</span>
                  <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                    {hotspots.find((h) => h.id === activeHotspot)?.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 mt-1 font-sans">
                  {hotspots.find((h) => h.id === activeHotspot)?.description}
                </p>
                <div className="text-[10px] font-semibold text-[#8aefff] mt-1.5 font-mono">
                  BENEFIT: {hotspots.find((h) => h.id === activeHotspot)?.benefit}
                </div>
              </div>
            ) : (
              <p className="text-xs text-neutral-500 italic text-center">
                Select or hover over any lens component to analyze safety parameters
              </p>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
