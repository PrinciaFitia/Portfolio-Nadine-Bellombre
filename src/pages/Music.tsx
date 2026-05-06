import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export default function Music() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Paris Maurice",
      sub: { fr: "En collaboration avec Manuel Rocheman", en: "In collaboration with Manuel Rocheman" },
      desc: {
        fr: "L'album « Paris Maurice » est un pont musical entre continents. Il comporte 10 compositions originales enregistrées au Studio Capricorne (Île Maurice) ainsi que des standards jazz et pop magnifiquement revisités.",
        en: "The « Paris Maurice » album is a musical bridge between continents. It features 10 original compositions recorded at Studio Capricorne (Mauritius) along with beautifully revisited jazz and pop standards."
      },
      links: [
        { label: "Discogs ↗", url: "https://www.discogs.com/fr/release/6663104-Manuel-Rocheman-Nadine-Bellombre-Paris-Maurice" },
        { label: "Site de l'album ↗", url: "https://manuelrocheman.com/paris-maurice/" }
      ]
    },
    {
      title: { fr: "Projet Danemark (2026)", en: "Denmark Project (2026)" },
      sub: { fr: "Avec Søren Lee & Emil Hess", en: "With Søren Lee & Emil Hess" },
      desc: {
        fr: "Un projet en cours au Danemark, aux côtés du guitariste Søren Lee et du saxophoniste Emil Hess. Søren Lee a collaboré avec des légendes telles que Ray Brown, Mulgrew Miller et Brian Melvin.",
        en: "An ongoing project in Denmark, alongside guitarist Søren Lee and saxophonist Emil Hess. Søren Lee has collaborated with legends such as Ray Brown, Mulgrew Miller and Brian Melvin."
      },
      links: [
        { label: { fr: "Interview Søren Lee ↗", en: "Søren Lee Interview ↗" }, url: "https://jazzguitartoday.com/2021/05/exclusive-interview-with-denmarks-soren-lee/" },
        { label: { fr: "Bientôt disponible ⏳", en: "Coming Soon ⏳" }, url: "#" }
      ]
    }
  ];

  const videos = [
    { id: "Kg5ixb23W8M", title: "Live Performance 1" },
    { id: "5L84JedNXrg", title: "Live Performance 2" },
    { id: "5UK6cpEG-3o", title: "Live Performance 3" }
  ];

  return (
    <section className="section pt-[150px] min-h-screen bg-gradient-to-br from-[#FDF8FB] via-[#F5E0ED] to-[#FAF3F6] text-ink-2">
      <div className="container mx-auto px-12">
        <div className="section-eyebrow text-amber-2">{t('Projets Musicaux', 'Musical Projects')}</div>
        <h2 className="section-h2 !text-ink-2 mb-14">{t('Créations & Collaborations', 'Creations & Collaborations')}</h2>

        <div className="flex flex-col gap-16 max-w-[840px] mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-b border-amber-2/14 pb-12 hover:bg-ink/5 p-8 rounded-xl transition-all duration-300 group"
            >
              <h3 className="font-script text-[clamp(42px,6vw,54px)] text-ink font-normal mb-2 tracking-tight">
                {typeof project.title === 'string' ? project.title : t(project.title.fr, project.title.en)}
              </h3>
              <span className="text-[10px] text-amber-2/55 tracking-[3.5px] uppercase mb-6 block font-normal">
                {t(project.sub.fr, project.sub.en)}
              </span>
              <div className="text-base leading-relaxed text-ink/75 mb-9 font-light">
                <p>{t(project.desc.fr, project.desc.en)}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 border border-amber-2/28 px-6 py-2.5 text-[9px] tracking-[3px] uppercase text-amber-2 font-normal hover:bg-amber-2 hover:text-white transition-all relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">{typeof link.label === 'string' ? link.label : t(link.label.fr, link.label.en)}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}

          {/* YouTube Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-8"
          >
            <h3 className="font-script text-[clamp(42px,6vw,54px)] text-ink font-normal mb-2 tracking-tight">
              {t('Live & Interprétations', 'Live & Interpretations')}
            </h3>
            <span className="text-[10px] text-amber-2/55 tracking-[3.5px] uppercase mb-6 block font-normal">
              {t('Soliste & Scène Jazz', 'Soloist & Jazz Scene')}
            </span>
            <p className="text-base leading-relaxed text-ink/75 mb-9 font-light max-w-2xl">
              {t(
                "Nadine a prêté sa voix à de multiples ensembles et formations collectives depuis les années 90. Découvrez l'âme de la scène jazz mauricienne à travers des extraits vidéos captivants.",
                "Nadine has lent her voice to multiple ensembles and collective formations since the 90s. Discover the soul of the Mauritian jazz scene through captivating video excerpts."
              )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
              {videos.map((vid) => (
                <a
                  key={vid.id}
                  href={`https://www.youtube.com/watch?v=${vid.id}`}
                  target="_blank"
                  rel="noopener"
                  className="relative block overflow-hidden border border-amber-2/28 aspect-video group"
                >
                  <img
                    src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-all" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 border border-amber-2/28 rounded-full flex items-center justify-center text-amber-2 transition-all group-hover:bg-amber-2 group-hover:text-ink group-hover:scale-110">
                    <span className="ml-1">▶</span>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://www.youtube.com/results?search_query=nadine+bellombre"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border border-amber-2/28 px-6 py-2.5 text-[9px] tracking-[3px] uppercase text-amber-2 font-normal hover:bg-amber-2 hover:text-white transition-all"
            >
              {t('Voir toutes les vidéos sur YouTube ▶', 'Watch all videos on YouTube ▶')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
