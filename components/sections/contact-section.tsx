"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { TiltCard } from "@/components/ui/tilt-card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { playClick, playSuccess } = useSoundEffects();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    playClick();

    try {
      // First attempt: internal API route (prevents adblocker interference)
      const internalRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (internalRes.ok) {
        setIsSubmitted(true);
        playSuccess();
        reset();
        setIsSubmitting(false);
        return;
      }

      // Second attempt: direct client-side Web3Forms fallback (CORS enabled for any origin)
      const directRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "fde2beae-7802-40ea-95fc-1e93aaf85433",
          name: data.name,
          email: data.email,
          subject: `[Portfolio Inquiry] ${data.subject}`,
          message: data.message,
          from_name: `${data.name} (via Client Direct)`,
        }),
      });

      const resData = await directRes.json();

      if (directRes.ok && (resData.success === true || resData.success === "true")) {
        setIsSubmitted(true);
        playSuccess();
        reset();
        setIsSubmitting(false);
        return;
      }
    } catch {
      // Fall through to mailto backup if client network blocks AJAX
    }

    const mailToUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Hi Tejas,\n\n${data.message}\n\nFrom: ${data.name} (${data.email})`)}`;
    window.location.assign(mailToUrl);
    setIsSubmitted(true);
    playSuccess();
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Extraordinary
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          Open for full-time Software Engineer positions, cloud architect roles, and technical collaborations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <TiltCard className="glass-card p-8 rounded-3xl border border-white/15 space-y-8 flex flex-col justify-between h-full shadow-2xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Details</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Feel free to reach out directly via email or connect on LinkedIn and GitHub. I typically respond within a few hours.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  onClick={playClick}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">Email Address</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300">{PORTFOLIO_DATA.personal.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  onClick={playClick}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">Phone</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300">{PORTFOLIO_DATA.personal.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">Location</div>
                    <div className="text-sm font-bold text-white">{PORTFOLIO_DATA.personal.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social CTAs */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Social Profiles</div>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex-1 py-3 rounded-2xl glass-card hover:bg-white/10 border border-white/15 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex-1 py-3 rounded-2xl glass-card hover:bg-white/10 border border-white/15 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <LinkedinIcon className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <TiltCard className="glass-card p-8 rounded-3xl border border-white/15 shadow-2xl h-full">
            {isSubmitted ? (
              <div className="p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for getting in touch. Tejas will review your message and get back to you promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg mt-4 hover:scale-105 transition-transform"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-slate-300">YOUR NAME</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    {errors.name && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.name.message}</p>}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-slate-300">EMAIL ADDRESS</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    {errors.email && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.email.message}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-medium text-slate-300">SUBJECT</label>
                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="Software Engineer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  {errors.subject && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.subject.message}</p>}
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-medium text-slate-300">YOUR MESSAGE</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Describe your project, position details, or inquiry..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-500/25 border border-white/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Tejas</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
