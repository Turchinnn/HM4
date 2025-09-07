import { Button } from "@/components/ui/button";
import heroMascot from "@/assets/hero-mascot.jpg";

const HeroSection = ({ onBookNowClick }: { onBookNowClick: () => void }) => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <img 
          src={heroMascot} 
          alt="Happy mascot at birthday party" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="animate-bounce-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
            Maskote koje nasmijavaju djecu svakodnevno!
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Pretvorite rođendane u čarobne trenutke s našim veselim maskotama koje donose radost i smijeh!
          </p>
          <Button 
            onClick={onBookNowClick}
            size="lg"
            className="bg-secondary text-foreground hover:bg-party-orange text-lg px-8 py-6 rounded-full shadow-glow hover:scale-105 transition-all duration-300 font-bold"
          >
            Rezerviraj sada - zabava počinje! 🎉
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          {['🎈', '🎂', '🎭', '🎊'].map((emoji, i) => (
            <span 
              key={i} 
              className="text-4xl animate-float" 
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;