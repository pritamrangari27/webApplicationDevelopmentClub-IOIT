import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages, GalleryImage } from '@/data/galleryData';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = galleryImages;

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <>
      <Head>
        <title>Gallery | Web Application Development Club</title>
        <meta name="description" content="View photos from our events, workshops, hackathons, and club activities." />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent-300 font-semibold text-sm uppercase tracking-wider">
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Our <span className="text-accent-200">Moments</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Capturing the journey of learning, building, and growing together. 
              Explore photos from our events, workshops, and club activities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-secondary-900 line-clamp-1">
                      {image.title}
                    </h3>
                    {image.team.length > 0 && (
                      <p className="text-sm text-secondary-600 mt-2 line-clamp-2">
                        Team: {image.team.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZoomIn className="w-8 h-8 text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">No photos found</h3>
              <p className="text-secondary-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          {currentIndex > 0 && (
            <button
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next button */}
          {currentIndex < filteredImages.length - 1 && (
            <button
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image container */}
          <div
            className="max-w-5xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            
            {/* Caption */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedImage.title}
              </h3>
              {selectedImage.team.length > 0 && (
                <p className="text-white/70 mb-2">
                  Team: {selectedImage.team.join(', ')}
                </p>
              )}
              <p className="text-white/40 text-sm mt-2">
                {currentIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
