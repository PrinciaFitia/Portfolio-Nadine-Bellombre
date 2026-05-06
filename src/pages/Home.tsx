import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { useEffect, useState } from 'react';

const getAssetUrl = (name: string) => new URL(`../assets/${name}`, import.meta.url).href;

export default function Home() {
  const { language, t } = useLanguage();
  const [concertLang, setConcertLang] = useState<'current' | 'dk'>('current');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(useTransform(mouseX, [0, window.innerWidth], [-100, 100]), { stiffness: 50, damping: 20 });
  const spotlightY = useSpring(useTransform(mouseY, [0, window.innerHeight], [-50, 50]), { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Concert Section Translations
  const ct = (fr: string, en: string, dk: string) => {
    if (concertLang === 'dk') return dk;
    return language === 'fr' ? fr : en;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen bg-ink flex items-center justify-center relative overflow-hidden px-8 pt-24 pb-20">
        {/* Ambient Background Layers */}
        <div className="absolute inset-0 z-0">
          {/* Animated Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-amber-accent/5 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-2/5 rounded-full blur-[100px]"
          />

          {/* Interactive Glow */}
          <motion.div 
            style={{ x: spotlightX, y: spotlightY, left: '50%', translateX: '-50%' }}
            className="absolute top-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_50%_50%,rgba(192,32,92,0.12)_0%,rgba(192,32,92,0.05)_30%,transparent_70%)] blur-[80px] pointer-events-none" 
          />

          {/* Grain Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto min-h-screen flex flex-col lg:flex-row items-stretch lg:gap-0">
          {/* Text Content Column (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 lg:px-12 xl:px-24 order-2 lg:order-1 py-20 lg:py-0 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-[9px] tracking-[6px] uppercase text-amber-2 mb-8 font-medium"
              >
                {t('ÎLE MAURICE · OCÉAN INDIEN', 'MAURITIUS · INDIAN OCEAN')}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(48px,6vw,80px)] lg:text-[clamp(52px,6vw,90px)] leading-[0.8] font-black tracking-tighter mb-10"
              >
                <span className="block font-script text-[0.45em] tracking-normal text-amber-pale mb-[-0.05em] ml-1 filter drop-shadow-xl opacity-90 italic">Nadine</span>
                <span className="block bg-gradient-to-br from-ivory via-amber-pale to-white bg-clip-text text-transparent filter drop-shadow-2xl pr-12">Bellombre</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 opacity-60"
                translate="no"
              >
                {['JAZZ', 'SOUL', 'SÉGA', 'REGGAE'].map((genre, i) => (
                  <div key={genre} className="flex items-center gap-6">
                    <span className="text-[9px] tracking-[3px] uppercase font-light text-ivory">{genre}</span>
                    {i < 3 && <div className="w-1 h-1 rounded-full border border-amber-2/30" />}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="max-w-xs mb-14"
              >
                <p className="font-display italic text-[20px] md:text-[22px] text-ivory/70 leading-[1.6] font-normal border-l-[2px] border-amber-2/20 pl-6">
                  {t('« Une voix qui transporte vers des rêves imaginaires »', '« A voice that carries you into imaginary dreams »')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <a
                  href="#concert"
                  className="inline-flex items-center gap-4 text-[10px] tracking-[5px] uppercase font-bold text-ink bg-amber-2 px-10 py-5 hover:bg-white transition-all duration-700 group relative overflow-hidden"
                >
                  <span className="relative z-10">{t('DÉCOUVRIR LA SCÈNE', 'DISCOVER THE STAGE')}</span>
                  <span className="relative z-10 group-hover:translate-y-1 transition-transform inline-block">↓</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Grand Format Image Column (55%) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[55%] order-1 lg:order-2 h-[75vh] lg:h-screen relative group"
          >
            {/* JAZZ SOUL ARTIST Banner - Moved outside overflow-hidden and adjusted to overlap as requested */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-0 -left-5 md:-left-10 z-30 pointer-events-none" translate="no"
            >
              <div className="bg-[#C0205C] px-8 md:px-12 py-5 md:py-6 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                <span className="text-[11px] md:text-[14px] tracking-[8px] uppercase text-white font-black whitespace-nowrap">
                  {t('JAZZ SOUL ARTIST', 'JAZZ SOUL ARTIST')}
                </span>
              </div>
            </motion.div>

            <div className="absolute inset-0 bg-ink-2/10 z-10 group-hover:bg-transparent transition-colors duration-1000" />
            
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={getAssetUrl('QVZjVkMweXNkWEtkV0xoWQ.jpeg')}
                alt="Nadine Bellombre"
                className="w-full h-full object-cover object-[center_10%] transition-transform duration-[6000ms] ease-out group-hover:scale-105"
              />
              
              {/* Artistic Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent opacity-70 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-50" />
            </div>
          </motion.div>
        </div>

        {/* Vinyl Deco with Parallax effect */}
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            perspective: 1000
          }}
          className="absolute right-[-80px] bottom-[-100px] w-[440px] h-[440px] rounded-full bg-[repeating-radial-gradient(circle_at_50%_50%,rgba(30,25,16,1)_0px,rgba(22,18,12,1)_3px,rgba(30,25,16,1)_6px)] opacity-45 shadow-[0_0_120px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(192,32,92,0.08)_0%,transparent_35%,rgba(192,32,92,0.04)_50%,transparent_60%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-ink flex items-center justify-center shadow-[0_0_0_2px_rgba(192,32,92,0.15),0_0_0_6px_rgba(192,32,92,0.05)] text-[11px] tracking-[3px] text-amber-2/40 font-light">
            N·B
          </div>
        </motion.div>
      </section>

      {/* Ribbon Band */}
      <div className="bg-amber-2 overflow-hidden py-3 relative z-10 border-y border-ink/10">
        <div className="flex items-center gap-0 whitespace-nowrap animate-[scroll_18s_linear_infinite] w-max">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">Jazz</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">Soul</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">Séga</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">Reggae</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">{t('Île Maurice', 'Mauritius')}</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">{t('25+ ans de scène', '25+ years on stage')}</span>
              <span className="text-[10px] text-ink/40">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="section bg-[#FDF2F7] relative overflow-hidden py-32">
        <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center lg:items-start mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-amber-2/30" />
                <span className="text-[10px] tracking-[5px] uppercase text-amber-2 font-bold">{t('À PROPOS', 'ABOUT')}</span>
                <div className="w-12 h-px bg-amber-2/30" />
              </div>
              <h2 className="font-display italic text-7xl md:text-8xl text-ink-2 leading-none">{t('Nadine Bellombre', 'Nadine Bellombre')}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              {/* Photo & Stats Column */}
              <div className="lg:col-span-5">
                <div className="relative group mb-10">
                  <div className="absolute -inset-1 border border-ink/5 translate-x-2 translate-y-2" />
                  <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                    <img 
                      src={getAssetUrl('2024-08-09 11.24.19.jpg')} 
                      alt="Nadine Bellombre Studio" 
                      className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 border border-ink/5 bg-white/30 backdrop-blur-sm">
                  {[
                    { n: '25+', l: t('ANS DE SCÈNE', 'YEARS ON STAGE') },
                    { n: '10', l: t('COMPOSITIONS', 'COMPOSITIONS') },
                    { n: '1', l: t('ALBUM', 'ALBUM') }
                  ].map((s, i) => (
                    <div key={i} className={`flex flex-col items-center py-6 px-2 ${i < 2 ? 'border-r border-ink/5' : ''}`}>
                      <span className="font-display text-2xl text-ink-2 font-bold mb-1">{s.n}</span>
                      <span className="text-[7px] tracking-[2px] uppercase text-ink/40 font-bold text-center">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text & Navigation Column */}
              <div className="lg:col-span-7 pt-10">
                <div className="font-display italic text-3xl md:text-4xl text-ink-2/90 leading-relaxed mb-10">
                  {t(
                    "Chanteuse professionnelle depuis les années 90, soliste et choriste — une voix enracinée à l'île Maurice, nourrie de rencontres internationales.",
                    "Professional singer since the 90s, soloist and backing vocalist — a voice rooted in Mauritius, shaped by international encounters."
                  )}
                </div>
                
                <p className="text-[14px] leading-relaxed text-ink/50 font-light mb-16 max-w-xl">
                  {t(
                    "Native de l'île Maurice, Nadine Bellombre débute à 16 ans, portée par la soul, le reggae et le séga — le rythme ancré dans l'âme mauricienne.",
                    "Born in Mauritius, Nadine Bellombre began at 16, carried by soul, reggae and séga — the rhythm anchored in the Mauritian soul."
                  )}
                </p>

                <div className="space-y-0">
                  <Link to="/biographie" className="group flex items-center justify-between py-5 border-t border-ink/10 text-[10px] tracking-[3px] uppercase text-ink-2 font-bold hover:text-amber-2 transition-colors">
                    <span>{t('LIRE SA BIOGRAPHIE', 'READ HER BIOGRAPHY')}</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                  <Link to="/galerie" className="group flex items-center justify-between py-5 border-t border-b border-ink/10 text-[10px] tracking-[3px] uppercase text-ink-2 font-bold hover:text-amber-2 transition-colors">
                    <span>{t('VOIR LA GALERIE', 'VIEW THE GALLERY')}</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Concert Section */}

      <section id="concert" className="section bg-gradient-to-br from-[#FAF3F6] via-[#F5E0ED] to-[#FDF8FB] relative py-32 overflow-hidden text-ink-2">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-amber-2/30 to-transparent" />
        <div className="container mx-auto px-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="flex-1">
                <div className="section-eyebrow text-amber-2">{t('Prochain Moment', 'Upcoming Moment')}</div>
                <h2 className="section-h2 !text-ink-2 mb-10">{t('Scène & Partage', 'Stage & Sharing')}</h2>
                <div className="text-lg text-ink/70 leading-relaxed font-light max-w-[500px] mb-8">
                  {t(
                    "Rejoignez Nadine pour une soirée intimiste où les classiques du jazz rencontrent les rythmes chaloupés du séga mauricien.",
                    "Join Nadine for an intimate evening where jazz classics meet the swaying rhythms of Mauritian séga."
                  )}
                </div>
                <div className="inline-flex items-center gap-4 bg-amber-2/10 border border-amber-2/20 px-6 py-3 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-amber-2 animate-ping" />
                  <span className="text-[10px] tracking-[3px] uppercase font-bold text-ink-2">Live à Copenhague</span>
                </div>
              </div>

              <div className="lg:w-[700px] w-full">
                <div className="bg-white p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-amber-2/10 relative group overflow-hidden">
                  <header className="flex items-center justify-between gap-4 mb-10 relative z-10">
                    <div className="inline-flex items-center gap-2.5 border border-amber-2/20 px-4 py-2 text-[10px] tracking-[3px] text-ink/50 font-light">
                      <span>📍</span>
                      <span>Ishøj Teater, Danemark</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setConcertLang('current')} className={`text-sm p-2 transition-all ${concertLang === 'current' ? 'text-amber-2' : 'text-ink/20'}`}>FR</button>
                      <button onClick={() => setConcertLang('dk')} className={`text-sm p-2 transition-all ${concertLang === 'dk' ? 'text-amber-2' : 'text-ink/20'}`}>DK</button>
                    </div>
                  </header>

                  <h3 className="font-display italic text-3xl md:text-4xl text-ink-2 mb-8 leading-tight text-left">
                    Søren Lee & Emil Hess Quartet 
                    <span className="block text-amber-2 font-script text-2xl mt-1 tracking-normal">{ct('avec Nadine Bellombre', 'with Nadine Bellombre', 'med Nadine Bellombre')}</span>
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 pb-10 border-b border-amber-2/10">
                    <div className="flex gap-4 items-center">
                      <span className="font-display text-6xl text-amber-2 font-black leading-none">03</span>
                      <div className="flex flex-col">
                        <span className="text-sm tracking-[4px] uppercase font-bold text-ink-2">{ct('JUILLET', 'JULY', 'JULI')}</span>
                        <span className="text-[10px] text-ink/40 uppercase">2026</span>
                      </div>
                    </div>
                    <div className="hidden sm:block w-px h-12 bg-amber-2/20 mx-2" />
                    <div className="text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] uppercase text-ink/40 font-medium leading-relaxed">
                      20:00 — Copenhagen Jazz Festival
                    </div>
                  </div>

                  <div className="space-y-6 text-[15px] leading-relaxed text-ink/75 font-light mb-12 text-left">
                    <p>
                      {ct(
                        "Une soirée de jazz avec quelques-uns des musiciens les plus marquants du Danemark. Le guitariste Søren Lee et le saxophoniste Emil Hess conduisent un quartet puissant avec le bassiste Jesper Bodilsen et le batteur Jacob Roved. Ensemble, ils créent un univers musical vivant et intime où tradition et renouveau se fondent.",
                        "An evening of jazz with some of Denmark's most prominent musicians. Guitarist Søren Lee and saxophonist Emil Hess lead a powerful quartet with bassist Jesper Bodilsen and drummer Jacob Roved. Together, they create a vibrant and intimate musical universe where tradition and renewal merge.",
                        "En aften i jazzens tegn med nogle af Danmarks mest markante musikere. Guitaristen Søren Lee og saxofonisten Emil Hess står i spidsen for en stærk kvartet med bassist Jesper Bodilsen og trommeslager Jacob Roved. Sammen skaber de et levende og nærværende musikalsk univers, hvor tradition og fornyelse smelter sammen."
                      )}
                    </p>
                    <p>
                      {ct(
                        "La musique sera composée de compositions originales ainsi que de standards jazz classiques choisis, interprétés avec personnalité, chaleur et un fort sens de l'improvisation — entre le ton nordique et la tradition jazz américaine.",
                        "The music will consist of original compositions as well as selected classic jazz standards, performed with personality, warmth, and a strong sense of improvisation — between the Nordic tone and the American jazz tradition.",
                        "Musikken vil bestå af originale kompositioner samt udvalgte klassiske jazzstandards, fortolket med personlighed, varme og improvisatorisk overskud — i spændingsfeltet mellem den nordiske tone og den amerikanske jazztradition."
                      )}
                    </p>
                    <p>
                      {ct(
                        "La soirée est sublimée par la voix invitée de Nadine Bellombre, dont la voix chaude et expressive sera mise en valeur sur des titres sélectionnés.",
                        "The evening is enhanced by the guest vocals of Nadine Bellombre, whose warm and expressive voice will be highlighted on selected tracks.",
                        "Aftenen får et ekstra løft med gæstevokal af Nadine Bellombre, der med sin varme og personlige stemme medvirker på udvalgte numre."
                      )}
                    </p>
                  </div>

                  <div className="mb-12">
                    <h4 className="text-[10px] tracking-[4px] uppercase text-amber-2 mb-4 font-bold text-left">{ct('Line-up', 'Line-up', 'Line-up')}</h4>
                    <div className="grid grid-cols-1 gap-1 border-t border-amber-2/10">
                      {[
                        { n: 'Søren Lee', r: ct('Guitare', 'Guitar', 'guitar') },
                        { n: 'Emil Hess', r: ct('Saxophone', 'Saxophone', 'saxofon') },
                        { n: 'Jesper Bodilsen', r: ct('Contrebasse', 'Double Bass', 'bas') },
                        { n: 'Jacob Roved', r: ct('Batterie', 'Drums', 'trommer') },
                        { n: 'Nadine Bellombre', r: ct('Voix (invitée)', 'Vocals (guest)', 'vokal (gæst)'), star: true }
                      ].map((p, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-amber-2/5">
                          <span className={`text-[14px] ${p.star ? 'text-amber-2 font-bold' : 'text-ink-2 font-normal'}`}>{p.n}</span>
                          <span className="text-[11px] tracking-wide text-ink/40 font-light">{p.r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-amber-2/30 pl-6 my-12 italic text-ink/50 text-base text-left">
                    {ct(
                      "« Un concert d'intensité, de présence et de classe internationale »",
                      "« A concert of intensity, presence, and international class »",
                      "« En koncert med intensitet, nærvær og international klasse »"
                    )}
                  </blockquote>

                  <a href="https://jazz.dk/en/copenhagen-jazz-festival-2026/concerts/5356/" target="_blank" rel="noopener" className="inline-flex w-full items-center justify-between gap-4 py-5 px-8 bg-ink text-ivory hover:bg-amber-2 hover:text-ink transition-colors duration-500 shadow-xl group">
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-xl">♪</span>
                      <div className="flex flex-col items-start">
                        <span className="text-[9px] tracking-[4px] uppercase opacity-50 font-normal">{ct('Événement officiel', 'Official Event', 'Officiel begivenhed')}</span>
                        <span className="text-xs tracking-[2px] uppercase font-bold">Copenhagen Jazz Festival 2026</span>
                      </div>
                    </div>
                    <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
