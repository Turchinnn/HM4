import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { CalendarDays, Clock, User, Phone, Mail } from "lucide-react";

const mascotOptions = [
  { id: "bear", name: "Stitch (plavi stitch)", emoji: "💙" },
  { id: "dino", name: "Angel (rozi stitch)", emoji: "🩷" },
  //{ id: "princess", name: "Princess Sparkle", emoji: "👑" },
  //{ id: "superhero", name: "Super Max", emoji: "🦸" },
  //{ id: "unicorn", name: "Unity Unicorn", emoji: "🦄" },
  //{ id: "pirate", name: "Captain Jack", emoji: "🏴‍☠️" }
];

const timeSlots = [
  "10:00-12:00", "13:00-15:00", "16:00-18:00", "19:00-21:00", 
];

const BookingCalendar = ({ selectedPackage }: { selectedPackage?: string }) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedMascot, setSelectedMascot] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    location: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedMascot || !selectedTime) {
      toast({
        title: "Nedostatak informacija! ⚠️",
        description: "Molimo vas ispunite datum, maskotu i vrijeme.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Rezervacija primljena! 🎉",
      description: "Hvala što ste rezervirali s nama. Kontaktirat ćemo vas uskoro.",
    });

    // Reset form
    setDate(undefined);
    setSelectedMascot("");
    setSelectedTime("");
    setFormData({ parentName: "", childName: "", phone: "", email: "", location: "" });
  };

  return (
    <section className="py-20 bg-gradient-party" id="booking">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Zakažite svoj nezaboravan rođendan! 🎉
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Odaberite datum i maskotu po želji!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-glow">
          <CardHeader className="bg-gradient-sunny rounded-t-lg">
            <CardTitle className="text-2xl text-center text-foreground">
              {selectedPackage ? `Booking for ${selectedPackage}` : "Rezervacijski obrazac"}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Calendar and Time Selection */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <Label className="text-lg font-semibold mb-5 flex items-center gap-2">
                    <CalendarDays className="w-7 h-5 text-primary" />
                    Odaberite datum
                  </Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    className="rounded-2x1 border-2 border-border p-2 shadow-card"
                  />
                </div>
                
                <div>
                  <Label className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Odaberite vrijeme
                  </Label>
                  <RadioGroup value={selectedTime} onValueChange={setSelectedTime}>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <div key={time} className="flex items-center space-x-2">
                          <RadioGroupItem value={time} id={time} />
                          <Label 
                            htmlFor={time} 
                            className="cursor-pointer hover:text-primary transition-colors"
                          >
                            {time}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Mascot Selection */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">
                  Odaberite Maskotu po želji
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mascotOptions.map((mascot) => (
                    <button
                      key={mascot.id}
                      type="button"
                      onClick={() => setSelectedMascot(mascot.id)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                        selectedMascot === mascot.id 
                          ? 'border-primary bg-primary/10 shadow-fun' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-4x1 mb-2">{mascot.emoji}</div>
                      <div className="font-semibold text-foreground">{mascot.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="parentName" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-primary" />
                    Ime roditelja
                  </Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    required
                    className="rounded-xl"
                    placeholder="Marko Horvat"
                  />
                </div>
                
                <div>
                  <Label htmlFor="childName" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-primary" />
                    Ime djeteta
                  </Label>
                  <Input
                    id="childName"
                    value={formData.childName}
                    onChange={(e) => setFormData({...formData, childName: e.target.value})}
                    required
                    className="rounded-xl"
                    placeholder="Luka"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Broj mobitela
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="rounded-xl"
                    placeholder="+385 123-4567"
                  />
                </div>
                đ
                <div>
                  <Label htmlFor="location" className="flex items-center gap-2 mb-2">
                    
                    Mjesto proslave
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                    className="rounded-x1"
                    placeholder="Grad - Ulica"
                  />
                </div>

                <div>
                 <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Adresa
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="rounded-xl"
                    placeholder="marko@primjer.com"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-hero text-primary-foreground font-bold text-lg py-6 rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Rezerviraj svoj rođendan 🎊
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingCalendar;