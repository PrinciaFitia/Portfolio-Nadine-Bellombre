import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { useState } from 'react';

const getAssetUrl = (name: string) => new URL(`../assets/${name}`, import.meta.url).href;

export default function Biography() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section pt-[150px] min-h-[80vh] bg-gradient-to-br from-[#FDF8FB] via-[#F5E0ED] to-[#FAF3F6] text-ink-2">
      <div className="container mx-auto px-12">
        <div className="section-eyebrow text-amber-2">{t('Biographie détaillée', 'Detailed Biography')}</div>
        <h2 className="section-h2 !text-ink-2 mb-14">{t('Son histoire', 'Her story')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="relative group">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-amber-2 transition-all group-hover:-top-4 group-hover:-left-4" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-amber-2 transition-all group-hover:-bottom-4 group-hover:-right-4" />
              <img
                src={getAssetUrl('QVZmdkx4bUU0Wm5jOS1ETA~2.jpg')}
                alt="Nadine Bellombre"
                className="w-full aspect-[4/5] object-cover object-center shadow-[0_0_0_3px_#FAF3F6,0_0_0_5px_#681951,0_0_0_7px_rgba(104,25,81,0.18),8px_12px_48px_rgba(42,10,31,0.22)]"
              />
            </div>

            <div className="grid grid-cols-3 gap-0.5 bg-amber-2/20 border border-amber-2/20">
              <div className="bg-ink-5/5 p-4 text-center">
                <span className="block font-display text-2xl text-ink-2 font-bold leading-none">25<sup>+</sup></span>
                <span className="text-[9px] tracking-[1.5px] uppercase text-ink/50 mt-1">{t('ans de scène', 'years on stage')}</span>
              </div>
              <div className="bg-ink-5/5 p-4 text-center">
                <span className="block font-display text-2xl text-ink-2 font-bold leading-none">10</span>
                <span className="text-[9px] tracking-[1.5px] uppercase text-ink/50 mt-1">{t('compositions', 'compositions')}</span>
              </div>
              <div className="bg-ink-5/5 p-4 text-center">
                <span className="block font-display text-2xl text-ink-2 font-bold leading-none">1</span>
                <span className="text-[9px] tracking-[1.5px] uppercase text-ink/50 mt-1">{t('album jazz', 'jazz album')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <p className="text-[clamp(20px,2.8vw,26px)] leading-relaxed text-ink-5 font-script">
              {t(
                "Chanteuse professionnelle depuis les années 90, soliste et choriste — une voix enracinée à l'île Maurice, nourrie de rencontres musicales en France et dans l'océan Indien.",
                "Professional singer since the 90s, soloist and backing vocalist — a voice rooted in Mauritius, shaped by musical encounters in France and across the Indian Ocean."
              )}
            </p>

            <div className="flex flex-wrap gap-2.5 mb-11">
              {['Performance', 'Composition', 'Chant', 'Voix'].map((skill) => (
                <span key={skill} className="bg-white/40 border border-amber-2/20 px-5 py-2 text-[10px] tracking-[3px] uppercase text-ink-2 font-medium">
                  {skill}
                </span>
              ))}
            </div>
            <div className="text-[17px] leading-[2.0] text-ink/85 space-y-8 font-light">
              <p>
                <span className="float-left font-script text-8xl leading-[0.5] text-amber-2 pr-4 pt-4 drop-shadow-lg">
                  {t('N', 'B')}
                </span>
                {t(
                  <>ative de l'île Maurice, Nadine débute très jeune. Dès l’âge de 16 ans, elle s’oriente vers la <span translate="no">soul</span>, le reggae et le séga — rythme par excellence ancré dans le cœur des Mauriciens. Ses premières collaborations avec <span translate="no">Négros pou la vie</span>, <span translate="no">Dagger killa</span> et <span translate="no">Ras Ninnin</span> (sous la coordination de <span translate="no">Georges Corette</span> et <span translate="no">Danielly Louison</span>) posent les bases d'une carrière enracinée.</>,
                  <>orn in Mauritius, Nadine began her musical career very young. From the age of 16, she moved towards <span translate="no">soul</span>, reggae and séga — the rhythm par excellence anchored in the hearts of Mauritians. Her early collaborations with <span translate="no">Négros pou la vie</span>, <span translate="no">Dagger killa</span> and <span translate="no">Ras Ninnin</span> (under the coordination of <span translate="no">Georges Corette</span> and <span translate="no">Danielly Louison</span>) laid the foundations for a rooted career.</>
                )}
              </p>

              <div className="flex items-center justify-center gap-3.5 opacity-60">
                <span className="w-10 h-px bg-amber-2/30" />
                <span className="text-amber-2 text-xs">✦</span>
                <span className="w-10 h-px bg-amber-2/30" />
              </div>

              <p>
                {t(
                  <>Une rencontre avec le batteur français <span translate="no">Francis Lassus</span> donne naissance à son premier titre en tant qu'auteure-compositrice. Sa carrière de chanteuse professionnelle s'internationalise rapidement, l'emmenant sur les scènes de France et de l'émirat de <span translate="no">Dubaï</span>. En 2013, elle collabore avec le pianiste <span translate="no">Manuel Rocheman</span> sur l'album « Paris Maurice » (Studio Capricorne), y interprétant ses propres compositions.</>,
                  <>An encounter with French drummer <span translate="no">Francis Lassus</span> gave birth to her first title as a songwriter. Her professional singing career quickly went international, taking her to stages in France and the Emirate of <span translate="no">Dubai</span>. In 2013, she collaborated with pianist <span translate="no">Manuel Rocheman</span> on the album 'Paris Maurice' (Studio Capricorne), performing her own compositions.</>
                )}
              </p>

              <div className="flex items-center justify-center gap-3.5 opacity-60">
                <span className="w-10 h-px bg-amber-2/30" />
                <span className="text-amber-2 text-xs">✦</span>
                <span className="w-10 h-px bg-amber-2/30" />
              </div>

              <p>
                {t(
                  <>Elle a partagé la scène avec <span translate="no">Linley Marthe</span> lors de nombreux concerts. Nadine s'est également illustrée aux côtés d'artistes de renom international, tels que le jazzman de renom <span translate="no">Jean-Christophe Cholet</span> et le trompettiste de renom <span translate="no">Alex Tassel</span>. En 2022, sa collaboration avec <span translate="no">Jean René Bastien</span> lors de Mamajazz marque un tournant créatif, mêlant ses racines à un univers plus classique et théâtral.</>,
                  <>She has shared the stage with <span translate="no">Linley Marthe</span> for numerous concerts. Nadine has also distinguished herself alongside internationally renowned artists, such as renowned jazzman <span translate="no">Jean-Christophe Cholet</span> and renowned trumpeter <span translate="no">Alex Tassel</span>. In 2022, her collaboration with <span translate="no">Jean René Bastien</span> during Mamajazz marked a creative turning point, blending her roots with a more classical and theatrical universe.</>
                )}
              </p>

              <div className="flex items-center justify-center gap-3.5 opacity-60">
                <span className="w-10 h-px bg-amber-2/30" />
                <span className="text-amber-2 text-xs">✦</span>
                <span className="w-10 h-px bg-amber-2/30" />
              </div>

              <p>
                {t(
                  <>Sa voix suave transporte vers des rêves imaginaires, berçant l'historique d'un vécu. En 2026, elle s'envole pour le <span translate="no">Danemark</span> pour un projet d'envergure avec le guitariste <span translate="no">Søren Lee</span>, promettant de nouvelles explorations musicales aux couleurs à la fois tropicales et nordiques.</>,
                  <>Her suave voice carries us towards imaginary dreams, cradling the history of a lived experience. In 2026, she heads to <span translate="no">Denmark</span> for a major project with guitarist <span translate="no">Søren Lee</span>, promising new musical explorations with both tropical and Nordic colors.</>
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
