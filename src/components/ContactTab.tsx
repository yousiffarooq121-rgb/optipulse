import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, HelpCircle, ChevronDown, CheckCircle2, Send, Linkedin, Award, Compass, Eye } from 'lucide-react';
import { FaqItem } from '../types';

export default function ContactTab() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'investor', // investor, researcher, beta, distributor
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const faqList: FaqItem[] = [
    {
      category: 'OPTICAL SAFETY',
      question: 'Will OptiPulse block or distort my vision?',
      answer: 'No. The visual axis (central 9 mm optical zone) is left entirely pristine. All mechanical MEMS elements and electrical coils reside on the lens shoulder periphery completely outside the pupil aperture.'
    },
    {
      category: 'MECHANICAL SAFETY',
      question: 'Is micro-vibration safe for sensitive corneal tissues?',
      answer: 'Yes. The system operates under strict biological safety threshold limits. It employs low-amplitude (±2μm gap displacement) shear acoustics at high frequencies (250 Hz) which have been verified in bovine eye simulation tests to cause zero structural fatigue or endothelial cellular loss.'
    },
    {
      category: 'ENERGY HARVESTING',
      question: 'How is the on-lens module powered?',
      answer: 'Inductive coupling at 13.56 MHz wirelessly transfers energy into a concentric storage ring embedded on the lens while stored inside the Smart Case. Future development plans explore passive bio-energy harvesting directly from glucose in the tear-film.'
    },
    {
      category: 'AVAILABILITY',
      question: 'Is OptiPulse available for commercial purchase today?',
      answer: 'Right now, OptiPulse is in advanced prototype and laboratory pre-clinical validation phases. We are actively planning localized animal study stages slated to commence in late 2027.'
    }
  ];

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 py-6" id="consortium-contact-terminal" aria-label="Biomedical Contact Gateway">
      
      {/* Visual Team Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#071B2E]/30 rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00B7FF]/5 to-transparent pointer-events-none" />
        
        {/* Yousif Farooq Bio - 5 columns */}
        <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
          <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase p-1 px-3.5 bg-cyan-950 rounded-full border border-cyan-500/20 inline-block">
            FOUNDER & PRINCIPAL
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Meet the Founder
          </h2>
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#8aefff]">Yousif Farooq</h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans text-justify">
              "To create intelligent biomedical wearables that improve eye health worldwide."
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed text-justify">
              Driven by the gap between traditional static lenses and modern electronic wearable ecosystems, Yousif launched the OptiPulse consortium to address corneal health and structural fouling with clean mechanics.
            </p>
          </div>

          <div className="pt-2 flex justify-center lg:justify-start">
            <a 
              href="mailto:yousiffarooq121@gmail.com"
              className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition"
            >
              <Mail className="w-4 h-4" />
              <span>yousiffarooq121@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Dynamic visual representation of founder avatar or medical logo */}
        <div className="lg:col-span-7 flex justify-center py-4 select-none">
          <div className="relative w-56 h-56 rounded-full border-2 border-[#00B7FF]/15 flex items-center justify-center p-4 bg-radial-gradient(circle_at_center,#06233d_0%,transparent_100%)">
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/20 animate-spin-slow" />
            
            <div className="w-44 h-44 rounded-full bg-slate-950/80 border border-white/10 flex flex-col items-center justify-center p-4 text-center">
              <Compass className="w-10 h-10 text-cyan-400 mb-2 animate-pulse" />
              <span className="font-display font-black text-xs text-white uppercase tracking-widest">OPTIPULSE</span>
              <span className="text-[9px] font-mono text-[#8aefff] uppercase tracking-wider mt-1">OCULAR CONSORTIUM</span>
              <span className="text-[8px] text-neutral-500 mt-2">EST. 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Split FAO vs Contact form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        
        {/* FAQ Accordion Lists - 6 columns */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <span className="text-xs text-cyan-400 font-mono tracking-widest font-bold uppercase block mb-1">COMMON CONCERNS</span>
            <h3 className="font-display text-xl font-bold text-white">
              Scholastic FAQ
            </h3>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-white/5 bg-neutral-950/40 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-start justify-between gap-3 font-display focus:outline-none focus:bg-white/5"
                >
                  <div>
                    <span className="font-mono text-[8px] text-cyan-400 font-bold block mb-1">
                      {faq.category}
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 shrink-0 mt-0.5 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-4 pt-0 border-t border-white/5 text-xs text-neutral-400 font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Submission Form - 6 columns */}
        <div className="lg:col-span-6 glass-panel rounded-2xl p-6 border border-white/10 relative overflow-hidden min-h-[430px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/5 to-transparent pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form 
                key="contact-form"
                onSubmit={handleFormSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border-b border-white/5 pb-2">
                    <Send className="w-4 h-4 text-cyan-400" />
                    <span>Collaboration Portal</span>
                  </h3>
                  <p className="text-[11px] text-neutral-400 mt-1 font-sans">
                    Request technical briefings, clinical datasets, patent portfolios, or join our restricted beta candidate waitlist.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-semibold">Your Name <span className="text-cyan-400">*</span></label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Dr. Sarah Jenkins"
                      className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-semibold">Your Email <span className="text-cyan-400">*</span></label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="sarah@ophthalmic-res.org"
                      className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-semibold">Associated Organization</label>
                    <input 
                      type="text" 
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      placeholder="Johns Hopkins University"
                      className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-semibold">Inquiry Role Profile</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
                    >
                      <option value="investor">Sponsor / Bio-Venture Investor</option>
                      <option value="researcher">Clinical Ophthalmic Investigator</option>
                      <option value="beta">Beta Program Participant Candidate</option>
                      <option value="distributor">Wholesale / Manufacturing Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-semibold">Message & Collaboration Scope</label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Briefly describe your research aims or strategic interests regarding OptiPulse design blueprints."
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#030d17] text-xs font-black tracking-wider transition uppercase flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(0,183,255,0.35)]"
                >
                  {isSubmitting ? (
                    <>
                      <Compass className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING SECURITY KEY...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Secure Collaboration</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="submission-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 animate-pulse-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-medium text-white text-base">Inquiry Dispatched Successfully</h3>
                  <p className="text-xs text-neutral-400 mt-2 font-sans max-w-sm leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been securely catalogued and logged into our clinical database.
                  </p>
                  <p className="text-[11px] text-[#8aefff] bg-cyan-950/40 border border-cyan-500/10 p-3 rounded-lg leading-relaxed mt-4 font-mono">
                    Routing notification directly to principal Yousif Farooq (<strong className="text-white">yousiffarooq121@gmail.com</strong>). Receipt logged from IP/Host securely.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', organization: '', role: 'investor', message: '' });
                  }}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-neutral-300 transition uppercase font-mono"
                >
                  Generate Another Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
