import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, FileSignature, Layers, ShieldCheck, Check, ArrowRight, X, Sparkles, TrendingUp } from 'lucide-react';
import { PatentClaim } from '../types';

export default function InnovationTab() {
  const [activeRoadmapYear, setActiveRoadmapYear] = useState<number>(2026);

  const patents: PatentClaim[] = [
    {
      number: 1,
      title: 'Adaptive Micro-Vibration Cleaning Core',
      description: 'Resonant shear-wave acoustic clean algorithms designed to clean multi-lipid lens matrices in-situ without heating adjacent eye structures.',
      status: 'Patent Draft Prepared - Under Lock'
    },
    {
      number: 2,
      title: 'Natural Blink-Synchronized Scheduling',
      description: 'Micro-controller algorithms analyzing lid occlusion tracking data to arm MEMS actuators exclusively during natural blinking events.',
      status: 'Patent Filed / Utility Pending'
    },
    {
      number: 3,
      title: 'Closed-Loop Biochemical Contamination Bio-Feedback',
      description: 'Boundary platinum impedance sensors evaluating real-time protein buildup through solid-state spectroscopy.',
      status: 'Joint Filing Preparation'
    },
    {
      number: 4,
      title: 'Tear-Film Quality Biosensing Array',
      description: 'Planned telemetry suite tracking ocular moisture decay indices, salt concentration levels, and optical transparency values.',
      status: 'Research Draft Approved'
    }
  ];

  const roadmap = [
    {
      year: 2026,
      title: 'Prototype Development & Bench Testing',
      status: 'COMPLETE',
      details: 'Functional integration of boundary platinum impedance electrodes, piezoelectric MEMS actuators, and RF energy harvesting onto 14mm test lenses. Executed over 1,500 continuous hours of dynamic automated cleaning cycles with 92.4% success.'
    },
    {
      year: 2027,
      title: 'Ocular Lab Validation & Wet Simulation',
      status: 'ACTIVE',
      details: 'Comprehensive simulation testing under simulated tear flow rates in custom synthetic cornea chambers. Validation of mechanical threshold safety and local heat dissipation levels under strict laboratory settings.'
    },
    {
      year: 2028,
      title: 'Biocompatibility & Animal Models',
      status: 'SATELLITE',
      details: 'Pre-clinical validation trials examining corneal integrity, moisture metrics, and micro-vibration comfort levels. Partnering with prominent veterinary ocular clinics to verify zero ocular stress indicators.'
    },
    {
      year: 2029,
      title: 'Ophthalmic Consortium Partnerships',
      status: 'PLANNED',
      details: 'Initiate restricted clinical testing cohorts in partnership with leading global ophthalmic research centers and university contact-lens clinics across multiple geographies.'
    },
    {
      year: 2030,
      title: 'ISO Compliance & Market Deployment',
      status: 'FUTURE',
      details: 'Complete regulatory dossier approvals with world healthcare agencies and establish secure manufacturing pipelines for international contact lens distribution.'
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 py-6" id="ip-and-validation-hub" aria-label="Copyrights, Patents and Roadmap validation">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-3">IP & INTELLECTUAL PROPERTY</span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Patent & Technological Superiority
        </h2>
        <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-sans">
          Securing global pioneers in bio-wearable optics. Review our legal patent drafts and the clinical development framework leading to 2030 deployment.
        </p>
      </div>

      {/* Grid: Technology Comparison table */}
      <div className="pt-4">
        <div className="flex items-center space-x-2 mb-4">
          <Award className="w-5 h-5 text-cyan-400" />
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
            Technology Feature Comparison Matrix
          </h3>
        </div>

        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-[#071B2E]">
                  <th className="p-4 font-display font-bold text-white uppercase tracking-wider">Features & Specifications</th>
                  <th className="p-4 font-display font-medium text-neutral-400">Standard Wear Lenses</th>
                  <th className="p-4 font-display font-medium text-neutral-400 font-mono">Smart Wear Prototypes</th>
                  <th className="p-4 font-display font-bold text-cyan-400 bg-cyan-950/20">OptiPulse Smart Lens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-neutral-300">
                <tr>
                  <td className="p-4 font-semibold text-white">Active Bio-Deposits Dislodging</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-red-400"><X className="w-3.5 h-3.5" /> No</span></td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-red-400"><X className="w-3.5 h-3.5" /> No</span></td>
                  <td className="p-4 bg-cyan-950/20 font-bold text-cyan-400"><span className="inline-flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Yes (Active MEMS)</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Blink Eyelid Synchronization</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-red-400"><X className="w-3.5 h-3.5" /> No</span></td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-red-400"><X className="w-3.5 h-3.5" /> No</span></td>
                  <td className="p-4 bg-cyan-950/20 font-bold text-cyan-400"><span className="inline-flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Yes (Photoconductor)</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Adaptive Frequency control</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-red-400"><X className="w-3.5 h-3.5" /> No</span></td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-amber-400"><Check className="w-3.5 h-3.5" /> Limited Fixed</span></td>
                  <td className="p-4 bg-cyan-950/20 font-bold text-cyan-400"><span className="inline-flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Yes (Closed-Loop)</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Continuous Tear Film Diagnostics</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-red-400"><X className="w-3.5 h-3.5" /> No</span></td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-amber-300"><Check className="w-3.5 h-3.5" /> Limited Sensors</span></td>
                  <td className="p-4 bg-cyan-950/20 font-bold text-[#8aefff]"><span className="inline-flex items-center gap-1 font-semibold"><Check className="w-3.5 h-3.5" /> Planned Expansion</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Solid-State Safeguard Triggers</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-red-400"><X className="w-3.5 h-3.5" /> No</span></td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-red-400"><X className="w-3.5 h-3.5" /> No</span></td>
                  <td className="p-4 bg-cyan-950/20 font-bold text-cyan-400"><span className="inline-flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Yes (Biocompatible Cutoff)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Grid: Patent drafting and IP security details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        
        {/* Licensing & status board */}
        <div className="lg:col-span-1 glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[10px] font-mono font-bold uppercase">
              <FileSignature className="w-3.5 h-3.5" />
              <span>Status: Utility Patent Draft Prepared</span>
            </div>
            
            <h3 className="font-display text-xl font-bold text-white tracking-normal leading-snug">
              Ophthalmic Device Intellectual Property
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              OptiPulse is engineered as a bespoke biochemical portfolio. Our designs block competitive mimicry through high-precision micro-electrode configurations and blink-gating logic.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
            <div className="flex items-center space-x-2 text-xs text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>100% Proprietary MEMS logic</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Priority Utility filing queued</span>
            </div>
          </div>
        </div>

        {/* Claims listings - 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          {patents.map((p) => (
            <div key={p.number} className="p-4 rounded-xl bg-neutral-950/40 border border-white/5 hover:border-cyan-500/20 transition duration-200">
              <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                <div className="flex items-start space-x-3">
                  <span className="font-mono text-cyan-400 font-bold text-xs ring-1 ring-cyan-400/20 rounded px-1.5 bg-cyan-400/5 mt-0.5">
                    CLAIM 0{p.number}
                  </span>
                  <div>
                    <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                      {p.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-sans">
                      {p.description}
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest shrink-0 bg-neutral-900 border border-white/5 px-2 py-0.5 rounded">
                  {p.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Dynamic connected timeline track */}
      <div className="pt-4 border-t border-white/5">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-1">MILESTONES TRACKER</span>
            <h3 className="font-display text-2xl font-bold text-white">
              OptiPulse Clinical Roadmap
            </h3>
          </div>
          <div className="flex items-center space-x-1.5 font-mono text-[10px] text-neutral-400">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>PROJECT TARGET: COMMERCIALIZATION BY 2030</span>
          </div>
        </div>

        {/* Responsive vertical alignment of roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {roadmap.map((rm) => (
            <button
              key={rm.year}
              onClick={() => setActiveRoadmapYear(rm.year)}
              className={`p-5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[170px] ${
                activeRoadmapYear === rm.year
                  ? 'bg-cyan-500/10 border-cyan-400 shadow-lg ring-1 ring-cyan-400/20'
                  : 'bg-white/20 border-white/5 hover:bg-white/5'
              }`}
            >
              <div className="flex justify-between items-start w-full">
                <span className={`font-display text-2xl font-black ${activeRoadmapYear === rm.year ? 'text-cyan-400' : 'text-neutral-500'}`}>
                  {rm.year}
                </span>
                <span className={`text-[8px] font-mono px-2 py-0.5 rounded font-bold ${
                  rm.status === 'COMPLETE' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : rm.status === 'ACTIVE'
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 animate-pulse'
                      : 'bg-neutral-800 text-neutral-500 border border-white/5'
                }`}>
                  {rm.status}
                </span>
              </div>

              <div className="mt-4">
                <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider line-clamp-1">
                  {rm.title}
                </h4>
                <p className="text-[11px] text-neutral-400 mt-1.5 line-clamp-3 font-sans leading-relaxed">
                  {rm.details}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Highlight details box for active roadmap item */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeRoadmapYear}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-neutral-950/80 to-[#071B2E]/60 border border-white/5 mt-4 text-xs font-sans text-neutral-300 leading-relaxed flex flex-col sm:flex-row items-baseline gap-4"
          >
            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded bg-[#00B7FF]/10 text-[#00B7FF] font-mono text-xs font-bold font-sans">
              <span>{activeRoadmapYear} SUMMARY BRIEF</span>
            </div>
            <div>
              {roadmap.find((r) => r.year === activeRoadmapYear)?.details}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
