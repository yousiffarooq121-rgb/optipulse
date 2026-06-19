import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Settings, Zap, RefreshCw, Cpu, CheckCircle2, AlertTriangle, Eye } from 'lucide-react';

export default function ActiveLensModel() {
  const [contamination, setContamination] = useState<number>(38); // percentage
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const [isVibrating, setIsVibrating] = useState<boolean>(false);
  const [cycleStep, setCycleStep] = useState<string>('Standby'); // Standby, Verifying, Processing, Vibration, Evaluation, Optimal
  const [telemetry, setTelemetry] = useState({
    memsHz: 0,
    opticalTransmission: 98.8,
    impedance: 12.4, // kOhms
    powerHarvesting: '0.45 mW',
    closedLoopStatus: 'Locked',
  });

  const debrisRef = useRef<{ x: number; y: number; size: number; opacity: number }[]>([]);

  // Initialize static/randomized debris positions that correspond to current contamination level
  useEffect(() => {
    const list = [];
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Keep outside the 9mm central optical axis zone (mostly in the outer ring to mimic protein deposits)
      const r = 50 + Math.random() * 85; 
      list.push({
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
        size: 2 + Math.random() * 4,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }
    debrisRef.current = list;
  }, []);

  // Sync telemetries with cleaning states
  useEffect(() => {
    if (isVibrating) {
      setTelemetry((prev) => ({
        ...prev,
        memsHz: 250 + Math.floor(Math.random() * 15),
        opticalTransmission: Number((98.8 - (contamination / 10)).toFixed(1)),
        impedance: Number((12.4 + Math.random() * 0.4).toFixed(1)),
        closedLoopStatus: 'Cleaning Active',
      }));
    } else {
      setTelemetry((prev) => ({
        ...prev,
        memsHz: 0,
        opticalTransmission: Number((99.2 - (contamination / 25)).toFixed(1)),
        impedance: Number((11.2 + (contamination / 15)).toFixed(1)),
        closedLoopStatus: contamination > 30 ? 'Desort Pending' : 'Optimal Standby',
      }));
    }
  }, [contamination, isVibrating]);

  // Handle automatic or triggered blink-cleaning routine
  const handleBlinkAndClean = () => {
    if (isBlinking || isVibrating) return;

    // Phase 1: Blink Event
    setIsBlinking(true);
    setCycleStep('Blink Synced');
    
    setTimeout(() => {
      setIsBlinking(false);
      // Phase 2: Verifying Blink Event and evaluating impedance parameters
      setCycleStep('Analysing Debris');
      
      setTimeout(() => {
        // Phase 3: Commencing micro-vibration
        setCycleStep('Active Vibration');
        setIsVibrating(true);
        
        // Interval to gradually reduce contamination debris
        const timer = setInterval(() => {
          setContamination((prev) => {
            if (prev <= 1.5) {
              clearInterval(timer);
              return 1.2;
            }
            return Number((prev - (prev > 15 ? 8 : 3)).toFixed(1));
          });
        }, 300);

        setTimeout(() => {
          clearInterval(timer);
          setIsVibrating(false);
          // Phase 4: Re-evaluating
          setCycleStep('Clarity Check');
          
          setTimeout(() => {
            setContamination(1.2);
            setCycleStep('Optimal Standby');
          }, 1000);
        }, 1800);

      }, 800);
    }, 450);
  };

  const handleManualAddDebris = () => {
    setContamination((prev) => Math.min(85, Number((prev + 12).toFixed(1))));
    if (cycleStep === 'Optimal Standby' || cycleStep === 'Standby') {
      setCycleStep('Over-threshold Alert');
    }
  };

  // Extract visible debris list based on percentage
  const visibleDebrisCount = Math.floor((contamination / 100) * debrisRef.current.length);
  const activeDebris = debrisRef.current.slice(0, visibleDebrisCount);

  return (
    <div id="interactive-simulation-panel" className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-7xl mx-auto p-2" aria-label="OptiPulse Lens Simulator">
      
      {/* Simulation Screen: Left Column (7/12) */}
      <div className="lg:col-span-7 flex flex-col justify-between glass-panel rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden relative min-h-[520px]">
        {/* Abstract Background Graphic grid layout */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,183,255,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-2 relative z-10 border-b border-white/5 pb-3">
          <div className="flex items-center space-x-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            </span>
            <span className="font-mono text-xs text-cyan-400 tracking-wider font-semibold">OP-SYS v1.08 // REAL-TIME MODEL</span>
          </div>
          <div className="flex items-center space-x-1 font-mono text-neutral-400 text-xs text-[10px]">
            <span>IMPEDANCE SENSING:</span>
            <span className="text-white font-medium">{telemetry.impedance} kΩ</span>
          </div>
        </div>

        {/* Main Lens Visual Canvas View */}
        <div className="relative flex-1 flex items-center justify-center my-6 min-h-[290px]">
          
          {/* Animated Particles drifting around the lens frame */}
          <div className="absolute w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/30 bottom-12 left-1/4 animate-particle-l animate-particle-1" />
            <div className="absolute w-1 h-1 rounded-full bg-cyan-300/40 bottom-24 right-1/4 animate-particle-1" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="relative w-72 h-72 flex items-center justify-center select-none">
            {/* outer ring connection paths */}
            <svg className="absolute inset-0 w-full h-full p-2 scale-105 opacity-30 pointer-events-none" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="92" fill="none" stroke="url(#cyan-grad)" strokeWidth="0.75" strokeDasharray="4,8" />
              <circle cx="100" cy="100" r="88" fill="none" stroke="#8aefff" strokeWidth="0.5" />
              <defs>
                <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00b7ff" />
                  <stop offset="100%" stopColor="#8aefff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Ring representing peripheral electronic circuits */}
            <motion.div
              animate={{
                scale: isVibrating ? [1, 1.015, 0.985, 1] : 1,
                rotate: isVibrating ? 360 : 0
              }}
              transition={{
                scale: { repeat: Infinity, duration: 0.08 },
                rotate: { duration: 12, ease: "linear", repeat: Infinity }
              }}
              className="absolute w-64 h-64 rounded-full border-2 border-dashed border-cyan-400/50 flex items-center justify-center"
              style={{
                boxShadow: contamination > 50 
                  ? '0 0 20px rgba(239, 68, 68, 0.15)' 
                  : '0 0 30px rgba(0, 183, 255, 0.12)'
              }}
            >
              <div className="absolute w-60 h-60 rounded-full border border-cyan-300/20" />
              
              {/* Electronics nodes (Gold contacts along the peripheral rim of the lens) */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.8)]" title="MEMS Actuator" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-400/80 shadow-[0_0_8px_rgba(56,189,248,0.8)]" title="Impedance Biosensors" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(34,211,238,0.8)]" title="Photodiode Light Harvester" />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400/80 shadow-[0_0_8px_rgba(45,212,191,0.8)]" title="Inductive Micro-Coil" />
            </motion.div>

            {/* The Physical Contact Lens Model */}
            <motion.div
              animate={{
                x: isVibrating ? [1, -1.5, 1.5, -0.5, 0.5, 0] : 0,
                y: isVibrating ? [-1, 1.5, -1, 0.5, -0.5, 0] : 0,
              }}
              transition={{
                duration: 0.1,
                repeat: isVibrating ? Infinity : 0
              }}
              style={{
                background: 'radial-gradient(circle, rgba(138,239,255,0.06) 0%, rgba(0,183,255,0.18) 65%, rgba(0,183,255,0.3) 100%)',
                boxShadow: isVibrating 
                  ? '0 0 45px rgba(0, 183, 255, 0.7), inset 0 0 35px rgba(0, 183, 255, 0.4)' 
                  : '0 0 25px rgba(0, 183, 255, 0.3), inset 0 0 20px rgba(0, 183, 255, 0.25)',
              }}
              className="w-56 h-56 rounded-full flex items-center justify-center relative cursor-pointer border border-cyan-200/20"
              onClick={handleBlinkAndClean}
              title="Interactive Contact Lens model - Click to activate natural blink verification cycle"
            >
              {/* Outer Micro-Vibration Waves Ripple effects inside the lens body */}
              {isVibrating && (
                <>
                  <motion.div
                    initial={{ scale: 0.3, opacity: 0.8 }}
                    animate={{ scale: 1.1, opacity: 0 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'easeOut' }}
                    className="absolute w-full h-full rounded-full border border-cyan-400 pointer-events-none"
                  />
                  <motion.div
                    initial={{ scale: 0.1, opacity: 0.6 }}
                    animate={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                    className="absolute w-full h-full rounded-full border border-cyan-400 pointer-events-none"
                  />
                </>
              )}

              {/* 9mm Pupil Visual Axis / Central Optical Zone preservation block */}
              <div 
                className="w-24 h-24 rounded-full border border-dashed border-white/10 flex flex-col items-center justify-center bg-black/40 relative"
                style={{
                  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)'
                }}
              >
                {/* Simulated pupil underlying depth */}
                <div className="absolute w-20 h-20 rounded-full bg-indigo-950/40 border border-indigo-500/10 pointer-events-none" />
                <span className="font-mono text-[9px] text-[#8aefff]/70 font-bold uppercase tracking-widest relative z-10 z-[3]">光学ゾーン</span>
                <span className="font-mono text-[8px] text-white/50 relative z-10 z-[3] mt-0.5">9MM OPTICAL AXIS</span>
                
                {/* Green safety circle indicating clear zone */}
                <div className="absolute inset-0 rounded-full border border-green-400/20 bg-green-400/5 animate-pulse" />
              </div>

              {/* Contamination particulate debris rendering */}
              {activeDebris.map((deb, index) => (
                <motion.div
                  key={index}
                  style={{
                    x: deb.x,
                    y: deb.y,
                    width: deb.size,
                    height: deb.size,
                    opacity: isVibrating ? deb.opacity * 0.2 : deb.opacity,
                  }}
                  animate={isVibrating ? {
                    x: [deb.x, deb.x + (Math.random() * 8 - 4), deb.x],
                    opacity: [deb.opacity, 0.1, 0],
                  } : {}}
                  transition={{ duration: 0.4 }}
                  className={`absolute rounded-full ${contamination > 45 ? 'bg-amber-300' : 'bg-cyan-200'} pointer-events-none select-none`}
                />
              ))}

              {/* Liquid fluidic layer effect */}
              <div className="absolute inset-0 rounded-full bg-[linear-gradient(-45deg,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none" />
            </motion.div>

            {/* Shutter Eyelids: Natural Blink synchronization simulator */}
            <AnimatePresence>
              {isBlinking && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: ['0%', '100%', '0%'] }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full bg-[#030d17] z-50 flex flex-col justify-between items-center overflow-hidden"
                >
                  <div className="w-full h-1/2 bg-gradient-to-b from-[#071B2E] to-[#04111d] border-b border-cyan-500/30 flex items-end justify-center pb-2">
                    <span className="font-mono text-[10px] text-cyan-400 font-semibold tracking-widest uppercase">BLINK EVENT DETECTED</span>
                  </div>
                  <div className="w-full h-1/2 bg-gradient-to-t from-[#071B2E] to-[#04111d] border-t border-cyan-500/30 flex items-start justify-center pt-2">
                    <span className="font-mono text-[10px] text-cyan-400 font-semibold tracking-widest uppercase">SYNCHRONIZED SWEEP</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Current Dynamic Action Console */}
        <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 bg-[#030d17]/50 p-4 rounded-xl">
          <div className="flex flex-col">
            <span className="text-xs text-neutral-400">OPERATION PHASE:</span>
            <div className="flex items-center space-x-2 mt-0.5">
              {cycleStep === 'Optimal Standby' || cycleStep === 'Standby' ? (
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
              ) : cycleStep === 'Over-threshold Alert' ? (
                <AlertTriangle className="w-4.5 h-4.5 text-amber-500" />
              ) : (
                <RefreshCw className="w-4.5 h-4.5 text-cyan-400 animate-spin" />
              )}
              <span className="font-display font-semibold text-white tracking-wide text-sm">
                {cycleStep}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={handleManualAddDebris}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 text-xs font-semibold tracking-wider transition duration-200 uppercase"
            >
              Deposit Protein/Lipid
            </button>
            <button
              onClick={handleBlinkAndClean}
              className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-bold tracking-wider transition duration-300 shadow-[0_0_15px_rgba(0,183,255,0.4)] hover:shadow-[0_0_25px_rgba(0,183,255,0.6)] uppercase flex items-center justify-center space-x-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Simulate Blink</span>
            </button>
          </div>
        </div>
      </div>

      {/* Telemetry Dashboard Stats: Right Column (5/12) */}
      <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
        
        {/* State of Clarity Box */}
        <div className="glass-panel rounded-2xl p-5 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/10 to-transparent pointer-events-none" />
          <h3 className="font-display text-xs text-neutral-400 font-semibold tracking-widest uppercase flex items-center space-x-2">
            <Settings className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>Ocular Fluid Clarity Index</span>
          </h3>

          <div className="flex items-baseline space-x-2 mt-4">
            <motion.span 
              key={contamination}
              initial={{ opacity: 0.5, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl font-extrabold tracking-tight text-white"
            >
              {Number((100 - contamination).toFixed(1))}%
            </motion.span>
            <span className="text-xs text-neutral-400 font-mono">OPTICAL CLARITY</span>
          </div>

          {/* Progress bar representing clean percentage */}
          <div className="mt-3 w-full bg-neutral-900 rounded-full h-2 overflow-hidden border border-white/5">
            <div 
              className={`h-full transition-all duration-300 rounded-full ${
                contamination > 50 
                  ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' 
                  : contamination > 20 
                    ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]' 
                    : 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]'
              }`}
              style={{ width: `${100 - contamination}%` }}
            />
          </div>

          {/* Telemetry metadata log */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/5 font-mono text-xs text-neutral-300">
            <div>
              <span className="text-neutral-500 block text-[10px]">LIPID DEPOSITIONS</span>
              <span className={`font-semibold ${contamination > 50 ? 'text-amber-400' : 'text-white'}`}>
                {Number((contamination * 0.4).toFixed(1))}% Threshold
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px]">PROTEIN ACCRETION</span>
              <span className={`font-semibold ${contamination > 50 ? 'text-amber-400' : 'text-white'}`}>
                {Number((contamination * 0.6).toFixed(1))}% Threshold
              </span>
            </div>
          </div>
        </div>

        {/* Micro-Actuator Sensor Feedback */}
        <div className="glass-panel rounded-2xl p-5 border border-white/10 relative flex-1 flex flex-col justify-between">
          <h3 className="font-display text-xs text-neutral-400 font-semibold tracking-widest uppercase flex items-center space-x-2 mb-3">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Telemetry & Sensor Feedback</span>
          </h3>

          {/* Telemetry specs grid */}
          <div className="space-y-4">
            
            {/* Actuator Frequency */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <span className="text-xs text-neutral-300 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isVibrating ? 'bg-cyan-400 animate-ping' : 'bg-neutral-600'}`} />
                <span>Actuator Frequency</span>
              </span>
              <span className="font-mono text-sm text-cyan-400 font-bold">
                {telemetry.memsHz} Hz
              </span>
            </div>

            {/* Optical Transmission Axis */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <span className="text-xs text-neutral-300">Optical Axis Transmittance</span>
              <span className="font-mono text-sm text-white font-semibold">
                {telemetry.opticalTransmission}%
              </span>
            </div>

            {/* Biosensing Impedance */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <span className="text-xs text-neutral-300">Tear Fluid Impedance</span>
              <span className="font-mono text-sm text-white">
                {telemetry.impedance} kΩ
              </span>
            </div>

            {/* Core Power Coils */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <span className="text-xs text-neutral-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>RF Transduced Power</span>
              </span>
              <span className="font-mono text-sm text-amber-400 font-medium">
                {telemetry.powerHarvesting}
              </span>
            </div>

            {/* Feedback Loop Status */}
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs text-neutral-300">Biocompatible Safeguard</span>
              <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center space-x-1">
                <Shield className="w-3 h-3 block" />
                <span>ENABLED</span>
              </span>
            </div>
          </div>

          {/* Visual Scientific Footnote */}
          <div className="mt-5 p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/10 text-[11px] text-[#8aefff]/80 leading-relaxed font-sans flex items-start gap-2">
            <div className="p-1 rounded bg-[#071B2E] text-cyan-400 font-bold border border-cyan-500/20 text-[9px] mt-0.5 font-mono">NOTE</div>
            <div>
              OptiPulse’s biosensors conduct impedance-based protein spectroscopy at the lens boundary. Cleaning routines initiate to minimize cellular irritation when accretion thresholds are crossed.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
