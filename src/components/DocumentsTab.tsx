import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ShieldAlert, CheckCircle2, CloudDownload, Eye, Lock, RefreshCw, X } from 'lucide-react';
import { Document } from '../types';

export default function DocumentsTab() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [downloads, setDownloads] = useState<Record<string, number>>({
    'doc_1': 148,
    'doc_2': 74,
    'doc_3': 39,
    'doc_4': 112,
    'doc_5': 92,
  });
  const [isDownloading, setIsDownloading] = useState<string | null>(null);

  const library: Document[] = [
    {
      id: 'doc_1',
      title: 'Adaptive Bio-Acoustic Contact Lens Research Paper',
      category: 'paper',
      description: 'The core academic paper draft detailing shear-wave calculations, platform electrical impedance structures, lipid displacement rates, and animal eye tissue temperature validations.',
      fileName: 'OptiPulse_Acoustic_BioClean_2026.pdf',
      fileSize: '4.8 MB',
      version: 'v2.1',
      releaseDate: 'May 14, 2026',
      downloadCount: 148,
    },
    {
      id: 'doc_2',
      title: 'Blink-Gated Cleansing System Utility Patent Draft',
      category: 'patent',
      description: 'Comprehensive utility patent claims covering physical MEMS actuation triggers, ocular light obstruction sensor thresholds, and non-contact induction micro-loops.',
      fileName: 'OPTIPULSE_IP_PATENT_DRAFT_2026.pdf',
      fileSize: '3.2 MB',
      version: 'v1.4',
      releaseDate: 'June 01, 2026',
      downloadCount: 74,
    },
    {
      id: 'doc_3',
      title: 'National Health wearable Grant Proposal',
      category: 'proposal',
      description: 'Complete $2.4M federal biomedical innovation grant package detailing safety criteria, budget plans, research team biographies, and manufacturing compliance guidelines.',
      fileName: 'NIH_Biomed_Grant_Proposal_OptiPulse.pdf',
      fileSize: '6.1 MB',
      version: 'v3.0_Final',
      releaseDate: 'April 20, 2026',
      downloadCount: 39,
    },
    {
      id: 'doc_4',
      title: 'Consolidated Electrical & Material Architecture Spec',
      category: 'architecture',
      description: 'Detailed blueprint schematic of integrated circuits, gold electrode sensor layouts, fluorosilicone lens hydration rates, and MEMS resonance sweeps.',
      fileName: 'OptiPulse_Hardware_Architecture_v1.08.pdf',
      fileSize: '8.4 MB',
      version: 'v1.08',
      releaseDate: 'May 28, 2026',
      downloadCount: 112,
    },
    {
      id: 'doc_5',
      title: 'Biocompatible Mechanical Safety Justification Brief',
      category: 'safety',
      description: 'Critical safety analysis examining the physical amplitude threshold (strictly <5μm) of micro-vibrations, thermal compliance, and endothelial cell health metrics.',
      fileName: 'OptiPulse_BioSafety_Justification_Brief.pdf',
      fileSize: '2.9 MB',
      version: 'v1.1',
      releaseDate: 'June 05, 2026',
      downloadCount: 92,
    }
  ];

  const handleDownloadSimulation = (id: string, name: string) => {
    setIsDownloading(id);
    setTimeout(() => {
      setDownloads((prev) => ({
        ...prev,
        [id]: prev[id] + 1
      }));
      setIsDownloading(null);
    }, 1200);
  };

  const getDocSummaryHtml = (doc: Document) => {
    switch(doc.category) {
      case 'paper':
        return {
          abstract: "EXPERIMENTAL TEST SUMMARY: Standard synthetic lenses (N=100) were contaminated with FITC-albumin proteins and bovine lipids at 10μg/mm2 concentration levels. On-lens MEMS resonance was stimulated at 250 Hz for 1.5 seconds under standard physiological blink moisture simulations. Digital transmission scans demonstrated the active removal of 92.4% protein deposits with zero localized temperature fluctuation (&lt;0.05°C), certifying supreme human tissue compliance.",
          pages: [
            { num: 1, title: "Abstract & Clinical Overview", desc: "Formulation of acoustic shear-wave mechanics." },
            { num: 2, title: "Materials & Copolymer Composition", desc: "Description of fluorosilicone acrylate structures matching corneal index." },
            { num: 3, title: "In-Situ Impedance Spectroscopy", desc: "Algorithm mapping of protein concentrations versus k-ohm electrical readings." }
          ]
        };
      case 'patent':
        return {
          abstract: "LEGAL CLAIMS OUTLINE: Claim 1: A smart wearable contact lens device comprising an elastic hydrogel core, a peripheral annular micro-transducer configured to emit acoustic resonance between 200–350 Hz, and a controller gating current based on corneal occlusion tracking. Claim 2: A method for maintaining optical transmission in a contact lens by tracking real-time voltage deviations over peripheral boundaries and triggering momentary vibrations during eyelid closure events.",
          pages: [
            { num: 1, title: "Statutory Field of Invention", desc: "Prior art analysis on static/passive drug-delivery contact lenses." },
            { num: 2, title: "Concentric Annular MEMS Architecture", desc: "Detailed engineering drawings of piezoelectric concentric lead-zirconate rings." },
            { num: 3, title: "Independent Gating & Safe Lockouts", desc: "Hardware-level cutoff timers guaranteeing disarm cycles if duration exceeds 2.5s." }
          ]
        };
      case 'proposal':
        return {
          abstract: "GRANT DETAILS: Requested Amount: $2,400,000. Project Phase: II Clinical Validation. Proposed Site: Johns Hopkins Ocular Research Clinic, MD. Key Investigators: Yousif Farooq (Lead Investigator), Prof. H. Lin (Biocompatible Microsystems). Funding applies to high-precision cleanroom microfabrication of active testing batches, dry-eye safety monitoring instrumentation, and veterinary study documentation.",
          pages: [
            { num: 1, title: "Ocular Biotech Project Goals", desc: "Milestones detailing protein mitigation impact across diabetic lens-wearer cohorts." },
            { num: 2, title: "Budget Allocation Breakdown", desc: "Material production, Cleanroom leases ($480k), and Principal Investigator labor." },
            { num: 3, title: "Commercial Potential Analysis", desc: "Licensing schemes to establish partnerships with global corrective lens manufacturers." }
          ]
        };
      case 'architecture':
        return {
          abstract: "ELECTRICAL DIAGRAMS: System is powered inductively at 13.56 MHz. Concentric antenna harvests micro-power through resonant coupling. Energy is rectified via low-drop Schottky diodes and stored on transparent capacitive rings. Inter-IC communications are managed on single-wire boundary architectures syncing impedance biosensors with active vibrating MEMS units.",
          pages: [
            { num: 1, title: "RF Inductor Electromagnetic Layout", desc: "Coupling calculations detailing planar copper antennas on hydrogel back-curves." },
            { num: 2, title: "Piezoelectric Actuator Interconnects", desc: "Gold traces linking peripheral logic cores to PZT micro-resonators." },
            { num: 3, title: "Spectroscopic Electrode Geometry", desc: "Opposing platinum feedback pads placed outside the pupil axis." }
          ]
        };
      default:
        return {
          abstract: "BIO-SAFETY SUMMARY: Active microsystem micro-vibrations are safe for human corneas. Computational models show that 250 Hz acoustic wave propagation is localized to the boundary fluid layer, causing less than 0.08mN of mechanical load on the underlying corneal epithelium. Endothelial cell loss tests completed on cultured bovine eyes demonstrated 100% tissue survival over 90 consecutive simulated blink cleaning cycles.",
          pages: [
            { num: 1, title: "Acoustic Shear-Load Boundaries", desc: "Verification that boundary layer shear remains under critical cell damage levels." },
            { num: 2, title: "Thermal Dissipation Profiles", desc: "FLIR thermal testing showing &lt;0.05°C temperature change over maximum cycle." },
            { num: 3, title: "Endothelial Cell Survival Studies", desc: "Cell staining results verifying normal cell geometry after high-frequency stimulation." }
          ]
        };
    }
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 py-6" id="startup-documents-vault" aria-label="Scientific Document Vault">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto border-b border-white/5 pb-6">
        <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-3">INVESTOR & SCHOLASTIC VAULT</span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          OptiPulse Document Library
        </h2>
        <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-sans">
          Browse and verify critical engineering schematics, regulatory drafts, federal grant packages, and pre-clinical peer-reviewed papers.
        </p>
      </div>

      {/* Vault Grid: Layout split 5:7 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Document Listings Container */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <h3 className="font-display text-xs text-neutral-400 font-semibold tracking-widest uppercase">
              Available Downloads
            </h3>
            <span className="font-mono text-[10px] text-[#8aefff]">CLEAN VERIFIED ACCESS // SECURE PUSH</span>
          </div>

          <div className="space-y-4">
            {library.map((doc) => (
              <div 
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[140px] relative overflow-hidden ${
                  selectedDoc?.id === doc.id
                    ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(0,183,255,0.15)]'
                    : 'bg-white/20 border-white/5 hover:bg-white/5'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-[#071B2E] text-cyan-400 border border-cyan-500/20">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-[#8aefff] font-bold uppercase bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/20">
                        {doc.category}
                      </span>
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mt-1.5 line-clamp-1">
                        {doc.title}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2 leading-relaxed font-sans">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5 font-mono text-[10px] text-neutral-400">
                  <div className="flex items-center space-x-3">
                    <span>SIZE: <strong className="text-white">{doc.fileSize}</strong></span>
                    <span>VER: <strong className="text-white">{doc.version}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDoc(doc);
                      }}
                      className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-neutral-300 text-[10px] font-semibold flex items-center gap-1 transition-all"
                    >
                      <Eye className="w-3 h-3 text-cyan-400" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadSimulation(doc.id, doc.fileName);
                      }}
                      className="px-2.5 py-1 rounded bg-cyan-500 hover:bg-cyan-450 hover:text-neutral-900 transition text-[#030d17] font-bold flex items-center gap-1"
                      disabled={isDownloading === doc.id}
                    >
                      {isDownloading === doc.id ? (
                        <RefreshCw className="w-3 h-3 animate-spin text-neutral-900" />
                      ) : (
                        <CloudDownload className="w-3 h-3 text-neutral-900" />
                      )}
                      <span>{downloads[doc.id]} DL</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Time Document Preview Slate */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            {selectedDoc ? (
              <motion.div 
                key={selectedDoc.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between min-h-[520px] relative overflow-hidden"
              >
                <button 
                  onClick={() => setSelectedDoc(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition focus:outline-none"
                  aria-label="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-4">
                  <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/20">
                    SECURED PREVIEW ARCHIVE // {selectedDoc.category.toUpperCase()}
                  </span>
                  
                  <h3 className="font-display text-lg font-bold text-white tracking-normal pr-8">
                    {selectedDoc.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-3 font-mono text-[10px] text-neutral-300">
                    <div>
                      <span className="text-neutral-500 block uppercase">File Name</span>
                      <span className="font-semibold text-white truncate max-w-[200px] block">{selectedDoc.fileName}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block uppercase">Release Date</span>
                      <span className="font-semibold text-white">{selectedDoc.releaseDate}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 mt-2">
                    <span className="text-[10px] font-mono text-neutral-500 block uppercase">Document Abstract</span>
                    <p className="text-xs text-neutral-300 bg-neutral-950/60 border border-white/5 p-4 rounded-xl leading-relaxed text-justify font-sans">
                      {getDocSummaryHtml(selectedDoc).abstract}
                    </p>
                  </div>

                  {/* Simulated Pages outline */}
                  <div className="space-y-3 mt-4">
                    <span className="text-[10px] font-mono text-neutral-500 block uppercase">Document Page Outlines</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {getDocSummaryHtml(selectedDoc).pages.map((p) => (
                        <div key={p.num} className="p-3 rounded-lg bg-white/5 border border-white/5 relative flex flex-col justify-between min-h-[90px]">
                          <span className="font-mono text-[8px] text-[#8aefff]/70 block font-bold">PAGE 0{p.num}</span>
                          <span className="font-display font-bold text-white text-[10px] block truncate mt-1">{p.title}</span>
                          <span className="text-[9px] text-neutral-400 block break-words leading-tight mt-0.5 mt-auto line-clamp-2">{p.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 font-mono text-[9px] text-neutral-400">
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                    <span>ENCRYPTED PDF METADATA VERIFIED</span>
                  </div>

                  <button
                    onClick={() => handleDownloadSimulation(selectedDoc.id, selectedDoc.fileName)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold transition text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,183,255,0.3)]"
                    disabled={isDownloading === selectedDoc.id}
                  >
                    {isDownloading === selectedDoc.id ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-neutral-900" />
                    ) : (
                      <CloudDownload className="w-3.5 h-3.5 text-neutral-900" />
                    )}
                    <span>Download Full Document</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="glass-panel rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center min-h-[520px] text-neutral-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(0,183,255,0.02)_0%,transparent_60%) pointer-events-none" />
                
                <div className="p-5 rounded-full border border-dashed border-white/10 bg-neutral-950/20 mb-4 animate-pulse-glow">
                  <FileText className="w-10 h-10 text-neutral-600" />
                </div>
                <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
                  Vault Document Preview Panel
                </h4>
                <p className="text-xs text-neutral-400 max-w-xs mt-2 leading-relaxed">
                  Select any clinical grant, patent draft, whitepaper, or architectural brief to open the integrated digital blueprint and view core technical specifications.
                </p>
                <div className="mt-5 p-2 bg-neutral-900 border border-white/5 rounded-lg flex items-center space-x-2 pr-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-mono text-[9px] text-[#8aefff]/80">SYSTEM IN STANDBY — STANDING BY FOR INVESTOR CREDENTIALS</span>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
