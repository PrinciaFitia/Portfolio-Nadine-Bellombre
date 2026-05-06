import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { useState, useEffect } from 'react';
import { Menu, X, Share2, Check } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    const shareUrl = window.location.origin;
    const shareData = {
      title: 'Nadine Bellombre | Artiste Jazz-Soul',
      text: 'Découvrez l\'univers musical de Nadine Bellombre, artiste vocale de l\'île Maurice.',
      url: shareUrl
    };

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error('Error sharing:', err);
          await copyToClipboard();
        }
        // AbortError is just the user canceling, we don't need to log it as an error
      }
    } else {
      await copyToClipboard();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-400 ${
      isShrunk ? 'py-3.5 bg-ink/88 backdrop-blur-3xl border-b border-amber-2/28' : 'py-5 bg-transparent border-b border-transparent'
    }`}>
      <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-tight group">
        <span className={`font-script text-[1.4em] transition-colors group-hover:text-amber-2 leading-none inline-block align-middle ${
          isShrunk || !isHomePage ? 'text-ink-2' : 'text-ivory'
        } ${isShrunk && isHomePage ? 'text-ivory' : ''}`} translate="no">Nadine</span>
        <span className="text-amber-2 transition-colors group-hover:text-ink-2 ml-1 align-middle" translate="no">Bellombre</span>
      </Link>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleShare}
            className={`p-2 transition-all group relative ${isShrunk || !isHomePage ? 'text-ink-2' : 'text-ivory/60 hover:text-white'}`}
            title={t('Partager le site', 'Share website')}
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Share2 size={16} />}
            {copied && <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-ink-2 text-white px-2 py-1 text-[8px] rounded whitespace-nowrap shadow-xl">Link Copied!</span>}
          </button>
          
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className={`text-[10px] tracking-[3px] font-medium border-l border-amber-2/20 pl-3 transition-colors ${
              isShrunk || !isHomePage ? 'text-ink-2 hover:text-amber-2' : 'text-ivory/60 hover:text-white'
            }`}
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-amber-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ul className={`
        fixed md:relative top-full left-0 right-0 md:top-auto
        flex flex-col md:flex-row items-center gap-7 md:gap-7
        bg-ink md:bg-transparent p-6 md:p-0
        transition-all duration-300 md:opacity-100 md:pointer-events-auto
        ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'}
      `}>
        <li><Link to="/" className="text-[10px] tracking-[3px] uppercase text-ivory/65 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>{t('Accueil', 'Home')}</Link></li>
        <li><Link to="/biographie" className="text-[10px] tracking-[3px] uppercase text-ivory/65 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>{t('Biographie', 'Biography')}</Link></li>
        <li><Link to="/parcours" className="text-[10px] tracking-[3px] uppercase text-ivory/65 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>{t('Parcours', 'Journey')}</Link></li>
        <li><Link to="/musique" className="text-[10px] tracking-[3px] uppercase text-ivory/65 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>{t('Musique & Vidéos', 'Music & Videos')}</Link></li>
        <li><Link to="/galerie" className="text-[10px] tracking-[3px] uppercase text-ivory/65 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>{t('Photos', 'Photos')}</Link></li>
        <li><Link to="/contact" className="border border-amber-2/28 text-amber-2 px-5 py-2 text-[9px] tracking-[3.5px] uppercase hover:bg-amber-2 hover:text-ink transition-all" onClick={() => setIsMenuOpen(false)}>{t('Contact', 'Contact')}</Link></li>
        
        {/* Mobile only share/lang */}
        <li className="flex md:hidden items-center gap-6 mt-4 pt-6 border-t border-white/10 w-full justify-center">
          <button onClick={handleShare} className="flex items-center gap-2 text-ivory/60 text-[10px] tracking-[2px]">
            <Share2 size={14} /> {copied ? t('Copié', 'Copied') : t('Partager', 'Share')}
          </button>
          <button onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} className="text-ivory/60 text-[10px] tracking-[2px]">
            {language === 'fr' ? 'English' : 'Français'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
