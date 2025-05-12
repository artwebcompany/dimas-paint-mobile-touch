
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SERVICES = [
  {
    title: 'Pengecatan Rumah',
    description: 'Layanan pengecatan profesional untuk interior dan eksterior rumah dengan hasil tahan lama.',
    image: '/service-home.jpg',
    features: [
      'Cat interior berkualitas tinggi', 
      'Cat eksterior tahan cuaca', 
      'Persiapan permukaan menyeluruh'
    ]
  },
  {
    title: 'Pengecatan Komersial',
    description: 'Solusi pengecatan untuk kantor, toko, restoran, dan properti bisnis lainnya.',
    image: '/service-commercial.jpg',
    features: [
      'Penyelesaian tepat waktu', 
      'Minim gangguan operasional', 
      'Hasil berkualitas tinggi'
    ]
  },
  {
    title: 'Pengecatan Khusus',
    description: 'Layanan dekoratif termasuk teknik efek cat, tekstur, dan lukisan mural.',
    image: '/service-special.jpg',
    features: [
      'Teknik cat dekoratif', 
      'Lukis mural & seni dinding', 
      'Motif dan tekstur khusus'
    ]
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dimas Paint Jogja menawarkan berbagai layanan pengecatan profesional 
            untuk memenuhi kebutuhan Anda dengan kualitas terbaik.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=300&fit=crop&q=80`;
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check size={16} className="text-dpblue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
