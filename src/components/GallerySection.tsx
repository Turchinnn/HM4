import { useState } from "react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const galleryImages = [
  { src: gallery1, alt: "Kids playing with mascot" },
  { src: gallery2, alt: "Group hug with mascot" },
  { src: gallery3, alt: "Mascot performing magic" },
  { src: gallery4, alt: "Birthday child with princess mascot" }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ilustracije kako bi vaš događaj mogao izgledati
          </h2>
          <p className="text-xl text-muted-foreground">
            Svaki trenutak je prilika za radost i nezaboravne uspomene!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-primary-foreground font-semibold">
                  Klikni za uvećanje
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-[90vh] animate-bounce-in">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        )}
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Svaki osmijeh, svaki zagrljaj i svaki trenutak radosti čine naš posao posebnim!
          </p>
          <div className="flex justify-center gap-4">
            {['🎨', '🎪', '🎭', '🎊', '🎁'].map((emoji, i) => (
              <span 
                key={i} 
                className="text-3xl animate-wiggle" 
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;