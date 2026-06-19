import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, HelpCircle, HardDrive, Cpu, Radio, Zap, Shield, Sparkles, Sliders, ArrowRight } from 'lucide-react';
import { TimelineStep, ArchitectureComponent } from '../types';

export default function TechnologyTab() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedSubsystem, setSelectedSubsystem] = useState<string>('mems');

  const steps: TimelineStep[] = [
    {
      step: 1,
      badge: 'DETECTION',
      title: 'Contamination Assessment',
      description: 'Integrated boundary impedance sensors examine tear film resistivity. Deviation indicates lipid/protein accretion exceeding clinical thresholds.'
    },
    {
      step: 2,
      badge: 'VERIFICATION',
      title: 'Blink Synchronization',
      description: 'Photodiode sensors track high-rate optical occlusion patterns. The system schedules cleaning cycles to align precisely with physiological blink onset.'
    },
    {
      step: 3,
      badge: 'PLANAGE',
      title: 'Adaptive Profiling',
      description: 'Case algorithm computes the micro-voltage envelope and acoustic frequency tailored to clear current deposit densities safely.'
    },
    {
      step: 4,
      badge: 'ACTIVATION',
      title: 'Acoustic Micro-Vibration',
      description: 'Solid-state concentric MEMS actuators initiate micro-vibrational shear waves, instantly breaking electrostatic bond lattices of surface deposits.'
    },
    {
      step: 5,
      badge: 'RE-EVALUATION',
      title: 'Transmission Validation',
      description: 'The optical path undergoes light-transmission spectroscopy checks, ensuring transparency metrics meet the >98% benchmark.'
    },
    {
      step: 6,
      badge: 'STANDBY',
      title: 'Safeguard Lockout',
      description: 'Actuators disarm completely, entering high-impedance low-energy sleep modes until the next scheduled detection cycle.'
    }
  ];

  const lensHardware: ArchitectureComponent[] = [
    {
      name: 'MEMS Resonant Actuator',
      description: 'Concentric piezo-element creating shear micro-vibrations across the lens surface. Formulated from ultra-lightweight biocompatible structures.',
      spec: '250 Hz - 320 Hz Sweep // ±2μm Amplitude',
      isPeripheral: true,
      category: 'on-lens'
    },
    {
      name: 'Thin-Film Photodiode',
      description: 'Ocular phototransistor that detects sudden lux drops corresponding uniquely to physiological eyelid movement.',
      spec: '98% blink event classification success',
      isPeripheral: true,
      category: 'on-lens'
    },
    {
      name: 'Boundary Impedance Sensor',
      description: 'Circular platinum ring electrodes monitoring voltage differences caused by lipid & protein molecules clinging to the outer lens layer.',
      spec: 'Accuracy within ±1% deposit density',
      isPeripheral: true,
      category: 'on-lens'
    },
    {
      name: 'RF Inductive Power Coil',
      description: 'Circular printed coil located in the rim shoulder designed to harvest energy from smart base storage modules.',
      spec: 'Resonant frequency 13.56 MHz // 0.8 mW output',
      isPeripheral: true,
      category: 'on-lens'
    },
    {
      name: 'Biocompatible Safety Logic',
      description: 'Integrated solid-state hardware timer ensuring micro-vibration automatically halts if blinking is obstructed or if frequency spikes.',
      spec: 'Hardcoded <2.0-sec cutoff limit',
      isPeripheral: true,
      category: 'on-lens'
    }
  ];

  const caseHardware: ArchitectureComponent[] = [
    {
      name: 'BLE Control Core',
      description: 'Low-power wireless system updating telemetry, tracking deposit histories, and downloading updated waveform protocols.',
      spec: 'Nordic Semiconductor BLE 5.3',
      isPeripheral: false,
      category: 'smart-case'
    },
    {
      name: 'Adaptive Tuning Algorithms',
      description: 'Embedded neural controller that trains on persistent user wear habits to optimize cleaning interval times.',
      spec: 'Onboard 32-bit ARM Cortex Processor',
      isPeripheral: false,
      category: 'smart-case'
    },
    {
      name: 'RF Micro-Charger Link',
      description: 'High-efficiency planar loop that broadcasts induction signals into the lens case chamber during non-usage hours.',
      spec: '13.56 MHz inductive coupling module',
      isPeripheral: false,
      category: 'smart-case'
    },
    {
      name: 'Encrypted Telemetry Storage',
      description: 'Secure flash space saving tear fluid biomarker statistics for medical analysis and daily validation.',
      spec: '512 KB secure memory chip',
      isPeripheral: false,
      category: 'smart-case'
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 py-6" id="digital-lens-blueprint" aria-label="System Architecture and Execution Timeline">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-3">HOW IT WORKS</span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Adaptive Cleaning Framework
        </h2>
        <p className="mt-4 text-base text-neutral-400 leading-relaxed">
          Six distinct phases working in harmony to guarantee ocular comfort and visual clarity, completely synchronized with natural user blinking.
        </p>
      </div>

      {/* Steps Selector Horizontal Board */}
      <div className="glass-panel rounded-2xl p-6 border border-white/10">
        
        {/* Horizontal Navigation Dots / Lines */}
        <div className="flex justify-between items-center mb-6 relative px-4 flex-wrap md:flex-nowrap gap-4 md:gap-2">
          {/* background visual line for desktop */}
          <div className="hidden md:block absolute top-[21px] left-12 right-12 h-0.5 bg-neutral-800 z-0" />
          <div 
            className="hidden md:block absolute top-[21px] left-12 h-0.5 bg-gradient-to-r from-cyan-500 to-sky-400 z-0 transition-all duration-500"
            style={{ width: `${((activeStep - 1) / 5) * 88}%` }}
          />

          {steps.map((item) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className="z-10 focus:outline-none group flex md:flex-col items-center gap-3 md:gap-2 w-full md:w-auto"
            >
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-350 border ${
                  activeStep === item.step
                    ? 'bg-cyan-400 text-neutral-900 border-cyan-400 scale-110 shadow-[0_0_15px_rgba(0,183,255,0.5)]'
                    : 'bg-[#071B2E] text-cyan-400 border-white/10 group-hover:bg-white/5'
                }`}
              >
                0{item.step}
              </div>
              <div className="text-left md:text-center">
                <span className={`block font-mono text-[9px] font-bold uppercase tracking-wider ${activeStep === item.step ? 'text-cyan-400' : 'text-neutral-500'}`}>
                  {item.badge}
                </span>
                <span className={`block text-xs font-display font-medium md:max-w-[110px] truncate ${activeStep === item.step ? 'text-white' : 'text-neutral-400'}`}>
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Display Detail */}
        <div className="p-6 rounded-xl bg-neutral-950/60 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/5 to-transparent pointer-events-none" />
          
          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-[10px] font-mono font-bold tracking-wider uppercase">
              Phase 0{activeStep} • {steps[activeStep - 1].badge}
            </div>
            <h3 className="font-display text-xl font-bold text-white tracking-tight">
              {steps[activeStep - 1].title}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans max-w-2xl">
              {steps[activeStep - 1].description}
            </p>
          </div>

          <div className="shrink-0 w-24 h-24 rounded-full border border-dashed border-cyan-400/30 flex items-center justify-center bg-cyan-500/5 animate-pulse-glow">
            <span className="font-mono text-2xl font-extrabold text-cyan-400">
              0{activeStep}
            </span>
          </div>
        </div>

      </div>

      {/* System Architecture Section */}
      <div className="pt-4">
        
        {/* Header split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-1">SYSTEM HARDWARE Blueprints</span>
            <h3 className="font-display text-2xl font-bold text-white leading-tight">
              Futuristic Device Architecture
            </h3>
          </div>
          <p className="text-xs text-neutral-400 max-w-md font-sans leading-relaxed">
            Engineered as a hybrid ecosystem comprising the smart hydrogel active contact lens and the resonance induction case.
          </p>
        </div>

        {/* System Hardware Grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column A: On-Lens Module */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4.5 h-4.5 text-cyan-400" />
                <span>On-Lens Smart Module</span>
              </h4>
              <span className="text-[9px] text-green-400 font-mono font-bold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">
                PERIPHERIAL POSITIONING
              </span>
            </div>

            <div className="space-y-4">
              {lensHardware.map((item, id) => (
                <div 
                  key={id}
                  onClick={() => setSelectedSubsystem(item.name)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    selectedSubsystem === item.name 
                      ? 'bg-cyan-500/10 border-cyan-400' 
                      : 'bg-white/20 border-white/5 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-white">{item.name}</span>
                    <span className="font-mono text-[9px] text-cyan-400 font-semibold">{item.spec}</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column B: Smart Base Case */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <HardDrive className="w-4.5 h-4.5 text-cyan-400" />
                <span>Smart Induction Case</span>
              </h4>
              <span className="text-[9px] text-cyan-400 font-mono font-bold bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                ALGORITHMIC HUB
              </span>
            </div>

            <div className="space-y-4">
              {caseHardware.map((item, id) => (
                <div 
                  key={id}
                  onClick={() => setSelectedSubsystem(item.name)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    selectedSubsystem === item.name 
                      ? 'bg-sky-500/10 border-sky-400' 
                      : 'bg-white/20 border-white/5 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-white">{item.name}</span>
                    <span className="font-mono text-[9px] text-[#8aefff] font-semibold">{item.spec}</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
