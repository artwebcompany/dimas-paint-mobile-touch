
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",
    });
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="section bg-dpblue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Konsultasikan kebutuhan pengecatan Anda dengan tim profesional kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nama</label>
                <Input id="name" placeholder="Nama lengkap" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" placeholder="email@example.com" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Nomor Telepon</label>
                <Input id="phone" placeholder="Nomor telepon" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Pesan</label>
                <Textarea id="message" placeholder="Ceritakan kebutuhan pengecatan Anda..." rows={4} required />
              </div>
              <Button type="submit" className="w-full bg-dpblue-500 hover:bg-dpblue-600">
                <Send size={16} className="mr-2" /> Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone size={20} className="mt-1 mr-3 text-dpblue-500" />
                  <div>
                    <p className="font-medium">Telepon / WhatsApp</p>
                    <p className="text-muted-foreground">+62 815-7363-5143</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={20} className="mt-1 mr-3 text-dpblue-500" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">dimaspaint.jogja@example.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={20} className="mt-1 mr-3 text-dpblue-500" />
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-muted-foreground">
                      Jl. Kaliurang KM 5, Yogyakarta, Indonesia 55281
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Jam Operasional</h3>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="grid grid-cols-2 gap-2">
                  <div className="py-2 border-b">
                    <p className="font-medium">Senin - Jumat</p>
                    <p className="text-muted-foreground">08:00 - 17:00</p>
                  </div>
                  <div className="py-2 border-b">
                    <p className="font-medium">Sabtu</p>
                    <p className="text-muted-foreground">09:00 - 15:00</p>
                  </div>
                  <div className="py-2">
                    <p className="font-medium">Minggu</p>
                    <p className="text-muted-foreground">Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
