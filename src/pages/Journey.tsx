import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

const timelineItems = [
  {
    year: "90s",
    tag: { fr: "🎤 Débuts", en: "🎤 Beginnings" },
    title: { fr: "Les premières notes", en: "The first notes" },
    text: { fr: "Soul, reggae et séga mauricien. Collaborations avec les artistes majeurs de l'océan Indien.", en: "Soul, reggae and Mauritian séga. Collaborations with major Indian Ocean artists." },
    names: "Négros pou la vie · Dagger killa · Ras Ninnin"
  },
  {
    year: "2012",
    tag: { fr: "🎪 Festival", en: "🎪 Festival" },
    title: { fr: "Blues dans Jazz", en: "Blues in Jazz" },
    text: { fr: "Festival jazz à l'île Maurice, aux côtés de musiciens reconnus localement et dans l'océan Indien.", en: "Jazz festival in Mauritius, alongside musicians recognised locally and across the Indian Ocean." },
    names: "Menwar · Manuel Rocheman · Christophe Bertin · Maurice Manancourt · Patrick Desvaux"
  },
  {
    year: "2013",
    tag: { fr: "💿 Album", en: "💿 Album" },
    title: { fr: "« Paris Maurice »", en: "« Paris Maurice »" },
    text: { fr: "10 compositions originales. Studio Capricorne, île Maurice. Standards jazz et pop revisités.", en: "10 original compositions. Studio Capricorne, Mauritius. Revisited jazz and pop standards." },
    names: "Manuel Rocheman · Olivier Ker Ourio · Marie-Luce Faron · Kersley Palmyre",
    featured: true
  },
  {
    year: "2019",
    tag: { fr: "🎟️ Concert", en: "🎟️ Concert" },
    title: { fr: "Collaborations avec Linley Marthe", en: "Collaborations with Linley Marthe" },
    text: { fr: "Plusieurs concerts d'exception, notamment sur la scène de MamaJazz.", en: "Several exceptional concerts, notably at MamaJazz." },
    names: "Linley Marthe · Philippe Thomas · Jerry Leonide · Marie-Luce Faron · Patrick Desvaux"
  },
  {
    year: "2022",
    tag: { fr: "✨ Collaboration", en: "✨ Collaboration" },
    title: { fr: "MamaJazz - Jean René Bastien", en: "MamaJazz - Jean René Bastien" },
    text: { fr: "Fusion entre racines mauriciennes et influences classiques/théâtrales. Une rencontre artistique majeure.", en: "Fusion between Mauritian roots and classical/theatrical influences. A major artistic encounter." },
    names: "Jean René Bastien · Nadine Bellombre"
  },
  {
    year: "2026",
    tag: { fr: "⏳ En cours", en: "⏳ Upcoming" },
    title: { fr: "Danemark · Pays des Vikings", en: "Denmark · Land of the Vikings" },
    text: { fr: "Album jazz au pays des Vikings avec Søren Lee. Fusion de couleurs tropicales et nordiques.", en: "Jazz album in the land of the Vikings with Søren Lee. Fusion of tropical and Nordic colors." },
    names: "Søren Lee · Emil Hess · Brian Melvin",
    future: true
  }
];

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section className="section pt-[150px] min-h-screen bg-gradient-to-br from-[#FDF8FB] via-[#F2DCEC] to-[#FAF3F6] text-ink-2">
      <div className="container mx-auto px-12">
        <div className="section-eyebrow text-amber-2">{t('Parcours', 'Journey')}</div>
        <h2 className="section-h2 !text-ink-2 mb-14">{t('Une voix à travers le temps', 'A voice through time')}</h2>

        <div className="relative pt-4">
          {/* Vertical line */}
          <div className="absolute left-[132px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-2/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="grid grid-cols-[88px_40px_1fr] items-start"
              >
                <div className="text-right pr-5 pt-4">
                  <span className={`font-display text-sm font-bold tracking-wider ${item.future ? 'text-amber-2' : 'text-amber-2/50'}`}>
                    {item.year}
                  </span>
                </div>

                <div className="flex flex-col items-center pt-3.5">
                  <div className={`w-2.5 h-2.5 rotate-45 border border-white/5 relative z-10 ${
                    item.future ? 'bg-amber-2 shadow-[0_0_14px_rgba(192,32,92,0.4)]' : 'bg-amber-2/35'
                  }`}>
                    {item.future && <div className="absolute -inset-[7px] rounded-full border border-amber-2/30 animate-ping" />}
                  </div>
                </div>

                <div className="pl-5">
                  <div className={`bg-white border p-6.5 transition-all duration-400 group hover:translate-x-2.5 hover:shadow-xl ${
                    item.featured ? 'border-l-2 border-amber-2' : 'border-amber-2/16 border-l-2 border-l-amber-2/25'
                  } ${item.future ? 'border-dashed border-l-solid border-l-amber-2' : ''}`}>
                    <span className={`inline-block text-[8px] tracking-[3.5px] uppercase px-2.5 py-1 mb-2.5 font-normal ${
                      item.featured || item.future ? 'bg-amber-2/12 text-amber-2' : 'bg-amber-2/5 text-ink/50'
                    }`}>
                      {t(item.tag.fr, item.tag.en)}
                    </span>
                    <h3 className="font-script text-3xl text-ink-2 mb-2 font-normal">
                      {typeof item.title === 'string' ? item.title : t(item.title.fr, item.title.en)}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/75 font-light">
                      {t(item.text.fr, item.text.en)}
                    </p>
                    <p className="mt-2.5 text-[12px] text-amber-2/60 italic tracking-wide" translate="no">
                      {item.names}
                    </p>
                    {item.future && (
                      <a
                        href="https://jazz.dk/en/copenhagen-jazz-festival-2026/concerts/5356/"
                        target="_blank"
                        rel="noopener"
                        className="mt-5 inline-flex items-center gap-2 border border-amber-2/28 px-5 py-2.5 text-[9px] tracking-[3px] uppercase text-amber-2 font-normal hover:bg-amber-2 hover:text-white transition-all"
                      >
                        {t('Voir l’événement ↗', 'View event ↗')}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
