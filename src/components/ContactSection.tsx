
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';

// Define Google Maps types globally
declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

export default function ContactSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    // Create script element for Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define global callback function
    window.initMap = () => {
      if (!mapRef.current) return;
      
      // Set map location for Dimas Paint Jogja (use actual coordinates)
      const dimasPaintLocation = { lat: -7.797068, lng: 110.369566 };
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: dimasPaintLocation,
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#7c93a3" }]
          },
          {
            featureType: "administrative.country",
            elementType: "geometry",
            stylers: [{ visibility: "on" }]
          },
          // More style options can be added here
        ]
      });
      
      // Add marker for the location
      new window.google.maps.Marker({
        position: dimasPaintLocation,
        map,
        title: "Dimas Paint Jogja",
        animation: window.google.maps.Animation.DROP
      });
    };
    
    // Append script to document
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', { name, email, phone, message });
      
      // Show success message
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.",
      });
      
      setFormStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Gagal Mengirim Pesan",
        description: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.",
        variant: "destructive",
      });
      setFormStatus('error');
    } finally {
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi dan informasi lebih lanjut tentang layanan pengecatan Dimas Paint Jogja
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Nomor Telepon"
                    required
                  />
                </div>
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Pesan Anda"
                  rows={5}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-dpblue-500 hover:bg-dpblue-600"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Mengirim...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Kirim Pesan
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 bg-dpblue-100 p-2 rounded-full">
                    <Phone className="h-6 w-6 text-dpblue-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <a href="tel:+6281573635143" className="text-muted-foreground hover:text-dpblue-500 transition-colors">
                      +62 815-7363-5143
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-dpblue-100 p-2 rounded-full">
                    <Mail className="h-6 w-6 text-dpblue-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@dimaspaintjogja.com" className="text-muted-foreground hover:text-dpblue-500 transition-colors">
                      info@dimaspaintjogja.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-dpblue-100 p-2 rounded-full">
                    <MapPin className="h-6 w-6 text-dpblue-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Lokasi</p>
                    <address className="not-italic text-muted-foreground">
                      Jl. Kaliurang KM 7, Yogyakarta<br />
                      Indonesia
                    </address>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Lokasi Kami</h3>
              <div 
                ref={mapRef}
                className="h-64 rounded-lg shadow-md bg-gray-200 w-full"
              ></div>
              <p className="text-sm text-muted-foreground mt-2">
                Buka Setiap Hari: 08.00 - 17.00 WIB
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
