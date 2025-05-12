
import { useParams, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import WhatsAppButton from "@/components/WhatsAppButton";

// Service details data
const SERVICE_DETAILS = {
  'body-repair': {
    title: 'Body Repair',
    subtitle: 'Perbaikan Body Kendaraan Profesional',
    description: 'Layanan perbaikan body kendaraan yang mengalami kerusakan akibat benturan, penyok, goresan, atau karat dengan teknologi terkini dan tenaga ahli berpengalaman.',
    image: '/src/assets/images/service-bodyrepair-detail.jpg',
    features: [
      'Perbaikan penyok & ketok tanpa cat',
      'Penggantian panel body yang rusak',
      'Perbaikan struktur rangka kendaraan',
      'Restorasi kendaraan klasik',
      'Perbaikan kerusakan akibat tabrakan'
    ],
    process: [
      {
        title: 'Inspeksi Kerusakan',
        description: 'Kami akan melakukan pemeriksaan menyeluruh pada kerusakan kendaraan Anda dan memberikan penjelasan serta estimasi biaya perbaikan.'
      },
      {
        title: 'Pembongkaran & Perbaikan',
        description: 'Tim kami akan membongkar bagian yang rusak dan melakukan perbaikan menggunakan teknik dan peralatan yang tepat sesuai tingkat kerusakan.'
      },
      {
        title: 'Persiapan Permukaan',
        description: 'Setelah perbaikan bentuk, permukaan akan dipersiapkan untuk pengecatan dengan proses dempul, pengamplasan, dan masking.'
      },
      {
        title: 'Pengecatan & Finishing',
        description: 'Proses pengecatan dilakukan di ruang khusus dengan sistem ventilasi dan pengendalian debu, diikuti dengan proses finishing dan polishing.'
      }
    ]
  },
  'painting': {
    title: 'Pengecatan Profesional',
    subtitle: 'Hasil Pengecatan Premium dan Tahan Lama',
    description: 'Layanan pengecatan kendaraan berkualitas tinggi menggunakan cat premium dengan hasil yang halus, rata, dan tahan lama terhadap cuaca ekstrem dan sinar UV.',
    image: '/src/assets/images/service-painting-detail.jpg',
    features: [
      'Pengecatan total kendaraan',
      'Pengecatan parsial/panel tertentu',
      'Color matching yang presisi',
      'Custom painting & desain grafis',
      'Clear coat premium anti UV'
    ],
    process: [
      {
        title: 'Konsultasi & Color Matching',
        description: 'Konsultasi warna dan jenis cat yang diinginkan, serta proses color matching untuk memastikan kesamaan warna dengan bagian lain.'
      },
      {
        title: 'Persiapan Permukaan',
        description: 'Pembersihan, pengamplasan, dan masking untuk memastikan permukaan siap dicat dengan sempurna.'
      },
      {
        title: 'Proses Pengecatan',
        description: 'Pengecatan dilakukan di ruang khusus bebas debu dengan teknik yang tepat untuk menghasilkan lapisan cat yang rata dan halus.'
      },
      {
        title: 'Clear Coat & Polishing',
        description: 'Aplikasi clear coat untuk perlindungan dan kilau, diikuti dengan proses polishing untuk hasil yang sempurna.'
      }
    ]
  },
  'special': {
    title: 'Layanan Khusus',
    subtitle: 'Perawatan dan Perlindungan Ekstra untuk Kendaraan Anda',
    description: 'Berbagai layanan spesial untuk merawat dan melindungi cat kendaraan Anda, termasuk coating, polishing, dan perawatan khusus lainnya.',
    image: '/src/assets/images/service-special-detail.jpg',
    features: [
      'Nano ceramic coating',
      'Paint protection film (PPF)',
      'Detail & poles eksterior',
      'Hydrophobic treatment',
      'Restorasi headlamp'
    ],
    process: [
      {
        title: 'Konsultasi Kebutuhan',
        description: 'Diskusi mengenai kondisi kendaraan dan layanan khusus yang sesuai untuk kebutuhan Anda.'
      },
      {
        title: 'Inspeksi & Persiapan',
        description: 'Pemeriksaan menyeluruh dan persiapan kendaraan, termasuk pencucian detailing dan clay bar treatment.'
      },
      {
        title: 'Aplikasi Layanan',
        description: 'Pengaplikasian coating, film pelindung, atau treatment khusus sesuai layanan yang dipilih.'
      },
      {
        title: 'Quality Control',
        description: 'Pemeriksaan akhir untuk memastikan kualitas hasil sesuai dengan standar tinggi kami dan penjelasan perawatan pasca layanan.'
      }
    ]
  }
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? SERVICE_DETAILS[serviceId as keyof typeof SERVICE_DETAILS] : undefined;
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Layanan tidak ditemukan</h2>
          <Link to="/services">
            <Button>Kembali ke Daftar Layanan</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>{service.title} - Dimas Paint Jogja</title>
      </Helmet>
      
      {/* Service Detail Header */}
      <div 
        className="py-16 md:py-24 relative"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0,30,60,0.85), rgba(0,30,60,0.7)), url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft size={16} className="mr-2" />
            <span>Kembali ke Layanan</span>
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-white/80 max-w-3xl">{service.subtitle}</p>
        </div>
      </div>
      
      {/* Service Detail Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Tentang Layanan</h2>
              <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4">Proses Kerja</h3>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-8 h-8 rounded-full bg-dpblue-500 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Video Showcase</h3>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/src/assets/images/video-thumbnail.jpg"
                  >
                    <source src="/src/assets/videos/intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-dpblue-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Fitur Layanan</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-dpblue-500 mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-dpblue-100">
                  <h4 className="font-medium mb-2">Tertarik dengan layanan ini?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Hubungi kami sekarang untuk konsultasi dan penawaran terbaik
                  </p>
                  <Button className="w-full bg-dpblue-500 hover:bg-dpblue-600 mb-3">
                    <a href="tel:+6281573635143" className="w-full">Hubungi Sekarang</a>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Link to="/contact" className="w-full">Form Kontak</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton phoneNumber="6281573635143" />
    </div>
  );
}
