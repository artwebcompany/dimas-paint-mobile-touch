
import { StarIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Testimonial data
const TESTIMONIALS = [
  {
    name: 'Budi Santoso',
    role: 'Pemilik Rumah',
    text: 'Saya sangat puas dengan layanan Dimas Paint. Hasil pengecatannya rapi dan tim mereka sangat profesional. Rumah saya terlihat seperti baru!',
    rating: 5,
    image: '/testimonial-1.jpg',
  },
  {
    name: 'Dewi Lestari',
    role: 'Manajer Café',
    text: 'Kami menggunakan jasa Dimas Paint untuk mural dinding cafe dan hasilnya sangat menakjubkan. Banyak pelanggan yang memuji desain unik yang mereka buat.',
    rating: 5,
    image: '/testimonial-2.jpg',
  },
  {
    name: 'Ahmad Rizki',
    role: 'Pengusaha',
    text: 'Pengecatan kantor baru kami diselesaikan tepat waktu dan dengan harga yang kompetitif. Layanan Dimas Paint sangat profesional dan ramah.',
    rating: 4,
    image: '/testimonial-3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonial Klien</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lihat apa yang dikatakan para klien tentang layanan pengecatan Dimas Paint Jogja.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      size={18} 
                      fill={i < testimonial.rating ? "#FFB800" : "none"} 
                      stroke={i < testimonial.rating ? "#FFB800" : "#ccc"} 
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">{testimonial.text}</p>
                <div className="flex items-center mt-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://i.pravatar.cc/100?img=${index + 10}`;
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
