import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink border-t border-amber-2/8 pt-24 pb-16 mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-11">
          <div>
            <Link to="/" className="font-display text-2xl font-bold mb-2 group inline-block">
              <span className="italic font-normal text-ivory mr-1.5 transition-colors group-hover:text-amber-2">Nadine</span>
              <span className="text-amber-2 transition-colors group-hover:text-ivory">Bellombre</span>
            </Link>
            <p className="text-[10px] tracking-[3.5px] text-ivory/10 uppercase font-light">
              {t('Artiste Vocale · Jazz · Île Maurice', 'Vocal Artist · Jazz · Mauritius')}
            </p>
          </div>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="text-xs text-ivory/30 hover:text-amber-2 transition-colors">{t('Accueil', 'Home')}</Link>
            <Link to="/biographie" className="text-xs text-ivory/30 hover:text-amber-2 transition-colors">{t('Biographie', 'Biography')}</Link>
            <Link to="/parcours" className="text-xs text-ivory/30 hover:text-amber-2 transition-colors">{t('Parcours', 'Journey')}</Link>
            <Link to="/musique" className="text-xs text-ivory/30 hover:text-amber-2 transition-colors">{t('Musique & Vidéos', 'Music & Videos')}</Link>
            <Link to="/galerie" className="text-xs text-ivory/30 hover:text-amber-2 transition-colors">{t('Photos', 'Photos')}</Link>
          </nav>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-ivory/30 leading-relaxed font-light">
                {t('Nom légal : Marie Nadine Annabelle Bellombre', 'Legal name: Marie Nadine Annabelle Bellombre')}
              </p>
              <a href="mailto:nadbello@gmail.com" className="text-xs text-ivory/30 hover:text-amber-2 transition-colors font-light">nadbello@gmail.com</a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/nadine.bellombre" target="_blank" rel="noopener" className="w-10 h-10 border border-amber-2/20 flex items-center justify-center text-ivory/50 hover:text-amber-2 hover:border-amber-2 transition-all">
                <span className="text-[10px] tracking-tighter">FB</span>
              </a>
              <a href="https://www.instagram.com/bellombrenadine81" target="_blank" rel="noopener" className="w-10 h-10 border border-amber-2/20 flex items-center justify-center text-ivory/50 hover:text-amber-2 hover:border-amber-2 transition-all">
                <span className="text-[10px] tracking-tighter">IG</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-2/6 pt-7 flex flex-col md:flex-row justify-between items-center gap-1.5 text-[10px] tracking-[2.5px] text-ivory/10 font-light">
          <p>© 2026 Nadine Bellombre</p>
          <p className="uppercase">{t('Tous droits réservés', 'All rights reserved')}</p>
        </div>
      </div>
    </footer>
  );
}
