import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut, RotateCcw, Share2, Check } from 'lucide-react';

const getAssetUrl = (name: string) => new URL(`../assets/${name}`, import.meta.url).href;

const galleryItems = [
  // Studio
  { id: 1, cat: 'studio', src: getAssetUrl('2022-04-08 21.03.37.jpg') },
  { id: 2, cat: 'studio', src: getAssetUrl('2022-04-09 19.57.25.jpg') },
  { id: 3, cat: 'studio', src: getAssetUrl('20221226_185031.jpg') },
  { id: 4, cat: 'studio', src: getAssetUrl('20221226_185150.jpg') },
  { id: 5, cat: 'studio', src: getAssetUrl('IMG_20260403_121529.jpg') },
  { id: 6, cat: 'studio', src: getAssetUrl('IMG-20230919-WA0103.jpg') },
  { id: 7, cat: 'studio', src: getAssetUrl('QVZjVkMweXNkWEtkV0xoWQ.jpeg') },
  { id: 8, cat: 'studio', src: getAssetUrl('QVZmdkx4bUU0Wm5jOS1ETA~2.jpg') },

  // Portrait
  { id: 9, cat: 'portrait', src: getAssetUrl('20240308_185658.jpg') },
  { id: 10, cat: 'portrait', src: getAssetUrl('image0.jpeg') },
  { id: 11, cat: 'portrait', src: getAssetUrl('IMG_20260403_121311.jpg') },
  { id: 12, cat: 'portrait', src: getAssetUrl('IMG_20260403_151722.jpg') },
  { id: 13, cat: 'portrait', src: getAssetUrl('IMG-20240305-WA0019.jpg') },
  { id: 14, cat: 'portrait', src: getAssetUrl('IMG-20260407-WA0011.jpg') },
  { id: 15, cat: 'portrait', src: getAssetUrl('QVZjZXlISUlMdU9GTW1kRQ.jpeg') },
  { id: 16, cat: 'portrait', src: getAssetUrl('QVZlRHFNVmQwMHVjWUZjVA.jpeg') },
  { id: 17, cat: 'portrait', src: getAssetUrl('QVZmdkx4bUU0Wm5jOS1ETA~2.jpg') },
  { id: 18, cat: 'portrait', src: getAssetUrl('QVZmQnU4UzdUYjVlOVJ3Vg.jpeg') },
  { id: 19, cat: 'portrait', src: getAssetUrl('QVZmSE9RR3NRUHkyQWFJcQ.jpeg') },
  { id: 20, cat: 'portrait', src: getAssetUrl('Screenshot_20240102_231936_InShot.jpg') },
  { id: 21, cat: 'portrait', src: getAssetUrl('Screenshot_20240309_020046_Photos.jpg') },

  // Scene
  { id: 22, cat: 'scene', src: getAssetUrl('2024-08-09 11.24.19.jpg') },
  { id: 23, cat: 'scene', src: getAssetUrl('FB_IMG_1642977544996.jpg') },
  { id: 24, cat: 'scene', src: getAssetUrl('FB_IMG_1642977646361.jpg') },
  { id: 25, cat: 'scene', src: getAssetUrl('QVZkcTRBYVBBbkJLelNSNg.jpg') },
  { id: 26, cat: 'scene', src: getAssetUrl('Screenshot_20220410-163310_Gallery.jpg') },
];

export default function Gallery() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [copied, setCopied] = useState(false);

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.cat === filter);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight' && selectedImage !== null) navigateImage(1);
      if (e.key === 'ArrowLeft' && selectedImage !== null) navigateImage(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleClose = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const nextIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].id);
    setZoom(1); // Reset zoom on navigate
  };

  const handleZoom = (delta: number) => {
    setZoom(prev => Math.min(Math.max(prev + delta, 1), 3));
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Nadine Bellombre - Portfolio Artiste',
      text: t('Découvrez l\'univers musical de Nadine Bellombre', 'Discover the musical world of Nadine Bellombre'),
      url: window.location.origin
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.origin);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const currentItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <section className="section pt-[150px] min-h-screen bg-gradient-to-br from-[#FDF8FB] via-[#F5E0ED] to-[#FAF3F6] text-ink-2 relative overflow-hidden">
      {/* Decorative Musical Notes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <span className="absolute left-[7%] top-[22%] text-amber-2 text-2xl -rotate-12 animate-pulse">♪</span>
        <span className="absolute left-[16%] top-[68%] text-amber-2 text-lg rotate-12 animate-pulse">♫</span>
        <span className="absolute right-[26%] top-[18%] text-amber-2 text-xl -rotate-6 animate-pulse">♬</span>
        <span className="absolute right-[16%] top-[62%] text-amber-2 text-2xl rotate-6 animate-pulse">♪</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="section-eyebrow text-amber-2">{t('Galerie', 'Gallery')}</div>
        <h2 className="section-h2 !text-ink-2 mb-11">{t('Scène, Studio & Jazz', 'Stage, Studio & Jazz')}</h2>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-11">
          <div className="flex flex-wrap gap-2">
            {['all', 'scene', 'studio', 'portrait'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2 border transition-all duration-350 text-[9px] tracking-[3.5px] uppercase font-normal overflow-hidden group ${
                  filter === cat ? 'bg-amber-2/10 border-amber-2 text-amber-2' : 'border-amber-2/28 text-ink/35 opacity-65 hover:opacity-100 hover:border-amber-2/60 hover:text-amber-2'
                }`}
              >
                {t(cat === 'all' ? 'Tout' : cat === 'scene' ? 'Scène' : cat === 'studio' ? 'Studio' : 'Portraits',
                   cat === 'all' ? 'All' : cat === 'scene' ? 'Stage' : cat === 'studio' ? 'Studio' : 'Portraits')}
                {filter === cat && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-amber-2" />}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 pb-20">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative break-inside-avoid group cursor-pointer border border-amber-2/10 overflow-hidden bg-white/50"
                onClick={() => setSelectedImage(item.id)}
              >
                <img
                  src={item.src}
                  alt={item.cat}
                  className="w-full grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-ink-2/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-all duration-500">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/98 flex items-center justify-center p-4 md:p-10"
            onClick={handleClose}
          >
            {/* Top Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]">
              <div className="flex bg-white/10 rounded-full p-1 backdrop-blur-md border border-white/10">
                <button 
                  className="p-2 text-white/50 hover:text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); handleZoom(-0.25); }}
                >
                  <ZoomOut size={20} />
                </button>
                <button 
                  className="p-2 text-white/50 hover:text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); setZoom(1); }}
                >
                  <RotateCcw size={20} />
                </button>
                <button 
                  className="p-2 text-white/50 hover:text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); handleZoom(0.25); }}
                >
                  <ZoomIn size={20} />
                </button>
              </div>
              <button
                className="p-2 bg-white/10 rounded-full text-white/50 hover:text-white transition-colors backdrop-blur-md border border-white/10"
                onClick={handleClose}
              >
                <X size={24} />
              </button>
            </div>

            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-ivory/30 hover:text-amber-2 transition-all p-2 z-[110]"
              onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-ivory/30 hover:text-amber-2 transition-all p-2 z-[110]"
              onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <motion.div
              layoutId={`img-${selectedImage}`}
              className="relative max-w-full max-h-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-auto max-w-full max-h-[80vh] cursor-[default]">
                <motion.img
                  src={currentItem.src}
                  alt={currentItem.cat}
                  animate={{ scale: zoom }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="shadow-2xl border border-amber-2/20 origin-center mx-auto block"
                  draggable={false}
                />
              </div>
              <div className="text-center">
                {zoom > 1 && (
                  <span className="text-[10px] text-white/30 uppercase tracking-[2px] mt-2 block">Zoom: {Math.round(zoom * 100)}%</span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
