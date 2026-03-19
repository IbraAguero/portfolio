import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "../types/project";

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goTo = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    if (direction === "prev") {
      setLightboxIndex(
        lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1
      );
    } else {
      setLightboxIndex(
        lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1
      );
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="relative aspect-video rounded-lg overflow-hidden group/thumb cursor-pointer border border-zinc-700/50 hover:border-zinc-500/50 transition-colors"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md modal-backdrop-enter"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-full transition-colors cursor-pointer z-10"
          >
            <X width={20} height={20} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goTo("prev");
                }}
                className="absolute left-4 p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-full transition-colors cursor-pointer z-10"
              >
                <ChevronLeft width={24} height={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goTo("next");
                }}
                className="absolute right-4 p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-full transition-colors cursor-pointer z-10"
              >
                <ChevronRight width={24} height={24} />
              </button>
            </>
          )}

          <div
            className="max-w-5xl max-h-[85vh] px-12 modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-zinc-400 text-sm mt-3">
              {images[lightboxIndex].alt}
              <span className="text-zinc-600 ml-2">
                {lightboxIndex + 1} / {images.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
