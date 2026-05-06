import { motion } from 'motion/react';
import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Mail, MapPin, Share2, Check } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section pt-[150px] min-h-[80vh] bg-gradient-to-br from-[#FDF8FB] via-[#F5E0ED] to-[#FAF3F6] text-ink-2">
      <div className="container mx-auto px-12">
        <div className="section-eyebrow text-amber-2">{t('Contact', 'Contact')}</div>
        <h2 className="section-h2 !text-ink-2 mb-2">{t('Travaillons ensemble', "Let's work together")}</h2>
        <p className="text-[10px] tracking-[3.5px] uppercase text-ink/40 mb-14 font-light">
          {t('Bookings · Collaborations · Festivals · Financements', 'Bookings · Collaborations · Festivals · Funding')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-14 items-start">
          <div className="flex flex-col gap-0.5">
            <div className="bg-white/70 border border-amber-2/16 p-6 backdrop-blur-sm group hover:bg-white/90 hover:border-amber-2/30 transition-all duration-300">
              <div className="text-[9px] tracking-[4px] uppercase text-ink/40 mb-2 font-normal flex items-center gap-2">
                <Mail size={12} className="relative -top-0.5" />
                Email
              </div>
              <div className="font-script text-2xl text-ink font-normal">nadbello@gmail.com</div>
            </div>

            <div className="bg-white/70 border border-amber-2/16 p-6 backdrop-blur-sm group hover:bg-white/90 hover:border-amber-2/30 transition-all duration-300">
              <div className="text-[9px] tracking-[4px] uppercase text-ink/40 mb-2 font-normal flex items-center gap-2">
                <MapPin size={12} className="relative -top-0.5" />
                {t('Basée à', 'Based in')}
              </div>
              <div className="font-script text-2xl text-ink font-normal">{t('Rose Hill, Île Maurice', 'Rose Hill, Mauritius')}</div>
            </div>

            <div className="bg-white/70 border border-amber-2/16 p-6 backdrop-blur-sm group hover:bg-white/90 hover:border-amber-2/30 transition-all duration-300">
              <div className="text-[9px] tracking-[4px] uppercase text-ink/40 mb-2 font-normal flex items-center gap-2">
                <Share2 size={12} className="relative -top-0.5" />
                {t('Réseaux', 'Social')}
              </div>
              <div className="flex gap-1.5 mt-1">
                <a href="https://web.facebook.com/bellombrenadine81" target="_blank" rel="noopener" className="flex-1 text-center border border-amber-2/20 py-2.5 text-[9px] tracking-[2.5px] uppercase text-ink/55 bg-white/60 hover:bg-amber-2/8 hover:text-ink-2 hover:border-amber-2/35 transition-all">Facebook</a>
                <a href="https://www.instagram.com/bellombrenadine81" target="_blank" rel="noopener" className="flex-1 text-center border border-amber-2/20 py-2.5 text-[9px] tracking-[2.5px] uppercase text-ink/55 bg-white/60 hover:bg-amber-2/8 hover:text-ink-2 hover:border-amber-2/35 transition-all">Instagram</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <label className={`absolute left-4 transition-all duration-250 pointer-events-none uppercase tracking-[4px] text-[9px] ${formData.name ? 'top-1.5 text-[7px] text-amber-2' : 'top-4 text-ink/45'}`}>
                  {t('Nom', 'Name')}
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white border border-amber-2/20 py-4 px-4 pt-6 text-ink text-[13px] font-light shadow-sm focus:border-amber-2 focus:ring-4 focus:ring-amber-2/10 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="relative group">
                <label className={`absolute left-4 transition-all duration-250 pointer-events-none uppercase tracking-[4px] text-[9px] ${formData.email ? 'top-1.5 text-[7px] text-amber-2' : 'top-4 text-ink/45'}`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white border border-amber-2/20 py-4 px-4 pt-6 text-ink text-[13px] font-light shadow-sm focus:border-amber-2 focus:ring-4 focus:ring-amber-2/10 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="relative group">
              <label className={`absolute left-4 transition-all duration-250 pointer-events-none uppercase tracking-[4px] text-[9px] ${formData.subject ? 'top-1.5 text-[7px] text-amber-2' : 'top-4 text-ink/45'}`}>
                {t('Objet', 'Subject')}
              </label>
              <select
                className="w-full bg-white border border-amber-2/20 py-4 px-4 pt-6 text-ink text-[13px] font-light shadow-sm focus:border-amber-2 focus:ring-4 focus:ring-amber-2/10 transition-all appearance-none"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="">{t('Choisir...', 'Choose...')}</option>
                <option value="booking">{t('Booking / Concert', 'Booking / Concert')}</option>
                <option value="festival">{t('Festival', 'Festival')}</option>
                <option value="collab">{t('Collaboration musical', 'Musical collaboration')}</option>
              </select>
            </div>

            <div className="relative group">
              <label className={`absolute left-4 transition-all duration-250 pointer-events-none uppercase tracking-[4px] text-[9px] ${formData.message ? 'top-1.5 text-[7px] text-amber-2' : 'top-4 text-ink/45'}`}>
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full bg-white border border-amber-2/20 py-4 px-4 pt-6 text-ink text-[13px] font-light shadow-sm focus:border-amber-2 focus:ring-4 focus:ring-amber-2/10 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-3 py-4 bg-ink-5 border border-ink-5 text-white text-[10px] tracking-[4px] uppercase hover:bg-amber-2 hover:border-amber-2 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">{t('Envoyer', 'Send')}</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1.5">→</span>
            </button>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-3 py-4 bg-green-500/10 border border-green-500/30 text-ink text-[13px] font-light relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-2" />
                <Check size={18} className="text-amber-2" />
                {t('Message envoyé ! Nadine vous répond bientôt.', 'Message sent! Nadine will get back to you soon.')}
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
