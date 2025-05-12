
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: 'Body Repair',
    description: 'Perbaikan body kendaraan yang rusak atau penyok dengan teknologi terkini dan tenaga ahli berpengalaman.',
    image: '/service-bodyrepair.jpg',
    features: [
      'Perbaikan penyok & ketok', 
      'Penggantian panel body', 
      'Restorasi kendaraan klasik'
    ],
    details: 'Menggunakan teknik modern seperti Paintless Dent Repair (PDR) untuk kerusakan ringan dan conventional repair untuk kerusakan parah. Kami juga menyediakan penggantian panel untuk bagian yang tidak dapat diperbaiki.'
  },
  {
    title: 'Pengecatan Profesional',
    description: 'Layanan pengecatan berkualitas tinggi untuk kendaraan dengan hasil yang halus dan tahan lama.',
    image: '/service-painting.jpg',
    features: [
      'Cat original pabrik', 
      'Custom painting', 
      'Clear coat premium'
    ],
    details: 'Menggunakan cat berkualitas tinggi dengan teknik pengecatan modern dan ruang khusus yang bebas debu. Hasil pengecatan halus, rata, dan tahan lama terhadap cuaca ekstrem dan sinar UV.'
  },
  {
    title: 'Layanan Khusus',
    description: 'Berbagai layanan spesial termasuk perawatan cat, poles, dan coating untuk melindungi kendaraan Anda.',
    image: '/service-special.jpg',
    features: [
      'Nano ceramic coating', 
      'Paint protection film', 
      'Detail & poles eksterior'
    ],
    details: 'Selain body repair dan pengecatan, kami juga menawarkan layanan coating ceramic untuk perlindungan ekstra, paint correction untuk menghilangkan goresan, dan poles untuk mengembalikan kilau cat kendaraan Anda.'
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-gradient-to-b from-white to-dpblue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dimas Paint Jogja menawarkan berbagai layanan body repair dan pengecatan profesional 
            untuk memperbaiki dan memperindah kendaraan Anda dengan kualitas terbaik.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full bg-gradient-to-br from-white to-dpblue-50/50">
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
                  <CardTitle className="font-poppins">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-dpblue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">{service.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
