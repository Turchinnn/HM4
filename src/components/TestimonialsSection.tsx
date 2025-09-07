import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Ana Kovač",
    rating: 5,
    text: "Maskota je mojoj kćeri učinila 5. rođendan potpuno čarobnim! Djeca su se stalno smijala i plesala. Najbolja odluka za zabavu ikad!",
    child: "Mia, 5 godina"
  },
  {
    name: "Marko Horvat",
    rating: 5,
    text: "Profesionalni, točni i jako zabavni! Naš superheroj maskota zabavljao je svih 20 klinaca cijeli sat. Vrijedilo je svake kune!",
    child: "Ivan, 7 godina"
  },
  {
    name: "Ivana Petrović",
    rating: 5,
    text: "Princeza maskota bila je savršena! Ostala je u ulozi cijelo vrijeme i moju kćer učinila pravom princezom na njen poseban dan.",
    child: "Lana, 6 godina"
  },
  {
    name: "Dario Novak",
    rating: 5,
    text: "Bio sam skeptičan u početku, ali wow! Dino maskota bila je urnebesna i tako dobra s djecom. Još uvijek pričaju o tome nakon tjedana!",
    child: "Filip, 8 godina"
  },
  {
    name: "Marija Jurić",
    rating: 5,
    text: "Tim se stvarno potrudio! Dvije maskote za rođendan naših blizanaca – savršeno su se uskladili i stvorili nezaboravne uspomene.",
    child: "Blizanci, 4 godine"
  },
  {
    name: "Josip Radić",
    rating: 5,
    text: "Rezervacija je bila jednostavna, komunikacija odlična, a zabava veliki uspjeh. Naš gusar maskota zabavio je baš sve!",
    child: "Petar, 9 godina"
  }
];


const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sretni roditelji, još sretnija djeca!
          </h2>
          <p className="text-xl text-muted-foreground">
            Pogledajte što zadovoljni roditelji kažu o našim maskotama za rođendane
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:scale-105 transition-all duration-300 shadow-card hover:shadow-glow animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-3">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Heart className="w-4 h-3 text-accent" />
                    {testimonial.child}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <span className="text-2xl">🎉</span>
            <span className="font-semibold text-foreground">
              Prosjek ocjena: 4.8
            </span>
            <span className="text-2xl">🎉</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;