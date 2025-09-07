import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Vesele Maskote</h3>
            <p className="mb-4">
              Stvaramo nezaboravne rođendanske uspomene s našim čarobnim maskotama!
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Brzi Linkovi</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:underline">Što nudimo</a></li>
              <li><a href="#gallery" className="hover:underline">Foto Galerija</a></li>
              <li><a href="#booking" className="hover:underline">Zakaži rođendan</a></li>
              <li><a href="#testimonials" className="hover:underline">Recenzije</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Kontaktirajte nas!</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +385 97 625 2165
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@veselemaskote.hr
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p>&copy; 2025 Vesele Maskote. Sva prava pridržana. Napravljeno s ❤️ i puno 🎉</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;