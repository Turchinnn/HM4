import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import mascotDino from "@/assets/mascot-dino.jpg";
import mascotPrincess from "@/assets/mascot-princess.jpg";
import mascotSuperhero from "@/assets/mascot-superhero.jpg";
import mascotStitchBlue from "@/assets/mascot-stitch-blue.jpg";
import imageSpongebob from "@/assets/image-spongebob.jpg";
import imageHulk from "@/assets/image-hulk.png";
import imageMlp from "@/assets/image-mlpony.png";
import imageMonster from "@/assets/image-monster.png";

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  color: string;
}

const packages: Package[] = [
  {
    name: "Osnovna Zabava",
    price: "79 €",
    description: "Savršeno za manja slavlja",
    features: [
      "1 Maskota po odabiru",
      "15 minuta ukupnog druženja",
      "Rođendanska pjesma i ples",
      "Fotkanje s djecom",
    ],
    image: imageMlp,
    color: "bg-accent"
  },
  {
    name: "Srednja Proslava",
    price: "99 €",
    description: "Naš najpopularniji paket!",
    features: [
      "2 Maskote po odabiru",
      "25 minuta ukupnog druženja",
      "Rođendanska pjesma i poseban ples",
      "Fotkanje i grupne fotografije",
      "Posebna rođendanska kruna"
    ],
    image: imageMonster,
    color: "bg-primary"
  },
  {
  name: "Premium Doživljaj",
  price: "119 €",
  description: "Najbolje iskustvo za nezaboravnu proslavu!",
  features: [
    "2 maskote po izboru",
    "35 minuta ukupnog druženja",
    "Balon puška za dodatnu zabavu",
    "Ples i zabavne aktivnosti",
    "Fotografiranje pojedinačno i u grupi",
    "Baloni koji lete dok plešemo",
    "Mali znakovi pažnje za svako dijete u obliku poklona",
  ],
  image: imageHulk,
  color: "bg-party-green"
  }
];


const ServicePackages = ({ onSelectPackage }: { onSelectPackage: (packageName: string) => void }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Izaberite svoj paket
          </h2>
          <p className="text-xl text-muted-foreground">
            Svaki paket je osmišljen da donese radost i nezaboravne trenutke!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 hover:scale-105 transition-all duration-300 shadow-card hover:shadow-glow"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className={`h-2 ${pkg.color}`} />
              
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 shadow-fun">
                  <img 
                    src={pkg.image} 
                    alt={`${pkg.name} mascot`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {pkg.description}
                </CardDescription>
                <div className="text-3xl font-bold text-primary mt-2">
                  {pkg.price}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-party-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => onSelectPackage(pkg.name)}
                  className="w-full bg-gradient-sunny text-foreground font-bold hover:shadow-fun transition-all duration-300"
                >
                  Odaberi ovaj paket
                </Button>
              </CardContent>
              
              {index === 1 && (
                <div className="absolute -top-0 -right-2 bg-primary text-accent-foreground px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-fun">
                  Popularno!
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;