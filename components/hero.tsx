'use client';

import { useState, useEffect } from 'react';
import { X, Phone, Calendar, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GodRays, MeshGradient } from '@paper-design/shaders-react';

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => setIsExpanded(true);
  const handleClose = () => setIsExpanded(false);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? 'hidden' : 'unset';
  }, [isExpanded]);

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-[#0b0717]">
        <div className="absolute inset-0">
          <GodRays
            colorBack="#0b071700"
            colors={['#ef444460', '#dc262640', '#0b0717', '#0b0717']}
            colorBloom="#ef4444"
            offsetX={0.85}
            offsetY={-1}
            intensity={0.8}
            spotty={0.6}
            midSize={10}
            midIntensity={0}
            density={0.1}
            bloom={0.2}
            speed={1}
            scale={1.6}
            frame={3332042.8159981333}
            style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Voice AI · Track 3.3 · Hack&apos;a&apos;War GenAI × AWS
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[90%] tracking-[-0.03em] text-white max-w-2xl">
            Your clinic never sleeps.{' '}
            <span className="text-red-400 drop-shadow-[0_0_30px_rgba(239,68,68,0.45)]">
              Neither does CallSync.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-[160%] text-white/60 max-w-xl px-4">
            An AI voice agent that books, reschedules, and cancels appointments over a natural phone call.
            No app, no form, no hold music — 24/7, with proactive reminders that cut no-shows by 40%.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
            {[
              { icon: Phone, label: '< 2 min booking' },
              { icon: Bell, label: '−40% no-shows' },
              { icon: Calendar, label: '24/7 availability' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/40">
                <Icon className="w-3 h-3 text-red-400" />
                {label}
              </div>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-block relative mt-2">
                <motion.div
                  style={{ borderRadius: '100px' }}
                  layout
                  layoutId="cta-card"
                  className="absolute inset-0 bg-white items-center justify-center transform-gpu will-change-transform"
                />
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="h-15 px-6 sm:px-8 py-3 text-sm font-bold text-[#0b0717] tracking-widest uppercase relative"
                >
                  Book a Demo Call
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
            <motion.div
              layoutId="cta-card"
              style={{ borderRadius: '24px' }}
              layout
              className="relative flex h-full w-full overflow-hidden bg-[#0b0717] border border-white/[0.07] transform-gpu will-change-transform"
            >
              <div className="h-full w-full overflow-y-auto scrollbar-hide">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative py-8 z-10 min-h-full flex flex-col lg:flex-row w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16"
                >
                  <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-none tracking-[-0.03em]">
                      See CallSync{' '}
                      <span className="text-red-400">in action</span>
                    </h2>

                    <div className="space-y-4 sm:space-y-6 pt-4">
                      {[
                        { icon: 'M5 13l4 4L19 7', text: 'Watch a live demo call — book, reschedule, and cancel, handled entirely by the AI voice agent.' },
                        { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Built on Amazon Connect, Lex, Bedrock, and Polly — fully serverless, zero idle cost.' },
                        { icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', text: 'Proactive outbound reminder calls fire automatically 24 hours before every appointment — zero staff action.' },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 sm:gap-4">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-500/10 border border-red-400/20 flex items-center justify-center">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <p className="text-sm sm:text-base text-white/60 leading-[150%]">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/[0.08]">
                      <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-[150%] mb-4">
                        Clinics using automated voice reminders see a 30–40% drop in no-shows within the first month.
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500/10 border border-red-400/20 flex items-center justify-center text-red-400 font-bold text-[10px]">
                          MGMA
                        </div>
                        <div>
                          <p className="text-base sm:text-lg text-white">Industry Benchmark</p>
                          <p className="text-sm text-white/40">Medical Group Management Association</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <form className="space-y-4 sm:space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-mono font-normal text-white/40 mb-2 tracking-[0.5px] uppercase">Full Name *</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400/40 transition-all text-sm h-10" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-mono font-normal text-white/40 mb-2 tracking-[0.5px] uppercase">Work Email *</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400/40 transition-all text-sm h-10" />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <label htmlFor="business" className="block text-[10px] font-mono font-normal text-white/40 mb-2 tracking-[0.5px] uppercase">Business Type</label>
                          <select id="business" name="business" className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:ring-2 focus:ring-red-400/30 transition-all appearance-none cursor-pointer text-sm h-10"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}>
                            <option value="" className="bg-[#0b0717]">Select...</option>
                            <option value="clinic" className="bg-[#0b0717]">Clinic / Hospital</option>
                            <option value="salon" className="bg-[#0b0717]">Salon / Spa</option>
                            <option value="legal" className="bg-[#0b0717]">Legal / Consulting</option>
                            <option value="repair" className="bg-[#0b0717]">Home Services</option>
                            <option value="other" className="bg-[#0b0717]">Other</option>
                          </select>
                        </div>
                        <div className="sm:w-32 w-full">
                          <label htmlFor="appointments" className="block text-[10px] font-mono font-normal text-white/40 mb-2 tracking-[0.5px] uppercase">Appts / Day</label>
                          <select id="appointments" name="appointments" className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:ring-2 focus:ring-red-400/30 transition-all appearance-none cursor-pointer text-sm h-10"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}>
                            <option value="1-10" className="bg-[#0b0717]">1–10</option>
                            <option value="11-30" className="bg-[#0b0717]">11–30</option>
                            <option value="31-60" className="bg-[#0b0717]">31–60</option>
                            <option value="60+" className="bg-[#0b0717]">60+</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-[10px] font-mono font-normal text-white/40 mb-2 tracking-[0.5px] uppercase">Anything else?</label>
                        <textarea id="message" name="message" rows={3} placeholder="Tell us about your current scheduling setup..." className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400/40 transition-all resize-none text-sm" />
                      </div>
                      <button type="submit" className="w-full px-8 py-2.5 rounded-full bg-white text-[#0b0717] font-bold hover:bg-white/90 transition-colors tracking-widest uppercase text-[11px] h-10">
                        Request Demo Call
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                layout={false}
                transition={{ duration: 0.15, delay: 0.05 }}
                className="absolute h-full inset-0 overflow-hidden pointer-events-none"
                style={{ borderRadius: '24px' }}
              >
                <MeshGradient
                  speed={0.6}
                  colors={['#0b0717', '#1a0a0a', '#2d0f0f', '#0b0717']}
                  distortion={0.6}
                  swirl={0.15}
                  grainMixer={0}
                  grainOverlay={0}
                  className="inset-0 sticky top-0"
                  style={{ height: '100%', width: '100%' }}
                />
              </motion.div>

              <motion.button
                onClick={handleClose}
                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-white/40 bg-transparent transition-colors hover:bg-white/[0.06] hover:text-white rounded-full border border-white/[0.08]"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
