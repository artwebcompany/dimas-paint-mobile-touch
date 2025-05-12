
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, Wrench } from "lucide-react";
import { motion } from "framer-motion";

// Define available portfolio items
const PORTFOLIO_ITEMS = [
  {
    id: 'renovasi-cat-rumah-modern',
    title: 'Renovasi Body Repair Mobil Toyota Avanza',
    category: 'eksterior',
    date: '15 April 2023',
    image: '/portfolio-1.jpg',
    tools: 'Cat Dupont, Clear Coat Premium, Polishing',
    description: 'Perbaikan dan pengecatan ulang body mobil Toyota Avanza yang mengalami kerusakan parah pada bagian samping. Proses meliputi ketok, pendempulan, pengecatan dasar, pengecatan warna, dan finishing clear coat anti gores.',
    gallery: [
      '/portfolio-detail-1.jpg',
      '/portfolio-detail-2.jpg',
      '/portfolio-detail-3.jpg',
    ]
  },
  {
    id: 'pengecatan-interior-minimalis',
    title: 'Restorasi Cat Motor Klasik Honda CB',
    category: 'interior',
    date: '22 Mei 2023',
    image: '/portfolio-2.jpg',
    tools: 'Cat Khusus Motor, Glasurit Paint, Coating Anti Gores',
    description: 'Restorasi pengecatan total pada motor klasik Honda CB dengan mempertahankan warna original namun memberikan sentuhan modern pada finishing-nya. Meliputi striping khusus dan clear coat premium tahan lama.',
    gallery: [
      '/portfolio-detail-4.jpg',
      '/portfolio-detail-5.jpg',
      '/portfolio-detail-6.jpg',
    ]
  },
  {
    id: 'lukisan-mural-cafe',
    title: 'Custom Airbrush Motor Harley Davidson',
    category: 'khusus',
    date: '10 Juni 2023',
    image: '/portfolio-3.jpg',
    tools: 'Airbrush Premium, Cat Metalik, UV Protection Coat',
    description: 'Pengerjaan custom airbrush pada tangki dan body motor Harley Davidson dengan tema elang dan api. Menggunakan teknik airbrush detail tinggi dan dilapisi clear coat UV protection untuk ketahanan warna.',
    gallery: [
      '/portfolio-detail-7.jpg',
      '/portfolio-detail-8.jpg',
      '/portfolio-detail-9.jpg',
    ]
  },
  {
    id: 'pengecatan-kantor',
    title: 'Penggantian Warna Mobil BMW',
    category: 'interior',
    date: '5 Juli 2023',
    image: '/portfolio-4.jpg',
    tools: 'Cat Premium PPG, Clear Coat Anti Gores, Polishing 3 Step',
    description: 'Transformasi warna mobil BMW dari hitam menjadi biru metalik dengan hasil yang sempurna. Proses meliputi pengamplasan total, epoxy, cat dasar, hingga cat metalik dan clear coat premium.',
    gallery: [
      '/portfolio-detail-10.jpg',
      '/portfolio-detail-11.jpg',
      '/portfolio-detail-12.jpg',
    ]
  },
  {
    id: 'renovasi-fasad-ruko',
    title: 'Body Repair Mobil Pasca Kecelakaan',
    category: 'eksterior',
    date: '18 Agustus 2023',
    image: '/portfolio-5.jpg',
    tools: 'Las Khusus Body, Cat Original, Scanning 3D',
    description: 'Perbaikan total body mobil yang mengalami kerusakan parah akibat kecelakaan. Meliputi penggantian panel, pelurusan rangka, pendempulan, dan pengecatan yang presisi sesuai warna asli.',
    gallery: [
      '/portfolio-detail-13.jpg',
      '/portfolio-detail-14.jpg',
      '/portfolio-detail-15.jpg',
    ]
  },
  {
    id: 'cat-tekstur-dekoratif',
    title: 'Paint Protection Film Mercedes Benz',
    category: 'khusus',
    date: '30 September 2023',
    image: '/portfolio-6.jpg',
    tools: 'PPF Premium, Ceramic Coating, Nano Protection',
    description: 'Pemasangan paint protection film pada seluruh body Mercedes Benz untuk perlindungan maksimal terhadap goresan dan kotoran. Dilengkapi dengan lapisan ceramic coating untuk kilau permanen.',
    gallery: [
      '/portfolio-detail-16.jpg',
      '/portfolio-detail-17.jpg',
      '/portfolio-detail-18.jpg',
    ]
  },
];

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    const found = PORTFOLIO_ITEMS.find(item => item.id === id);
    
    if (found) {
      setPortfolio(found);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-dpblue-500 text-xl">Memuat...</div>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Portfolio tidak ditemukan</h2>
        <Button onClick={() => navigate('/portfolio')}>Kembali ke Portfolio</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-dpblue-50/30">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Kembali ke Portfolio
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{portfolio.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-8 text-sm">
              <div className="flex items-center gap-2 bg-dpblue-100/60 text-dpblue-700 py-1 px-3 rounded-full">
                <Calendar size={16} />
                <span>{portfolio.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-dpblue-100/60 text-dpblue-700 py-1 px-3 rounded-full">
                <Tag size={16} />
                <span>{portfolio.category === 'khusus' ? 'Special' : portfolio.category === 'interior' ? 'Interior' : 'Eksterior'}</span>
              </div>
              <div className="flex items-center gap-2 bg-dpblue-100/60 text-dpblue-700 py-1 px-3 rounded-full">
                <Wrench size={16} />
                <span>{portfolio.tools}</span>
              </div>
            </div>
            
            <div className="mb-10">
              <img 
                src={portfolio.image} 
                alt={portfolio.title}
                className="w-full max-h-[500px] object-cover rounded-xl shadow-lg mb-6"
                onError={(e) => {
                  const idx = Math.floor(Math.random() * 3);
                  e.currentTarget.src = `https://images.unsplash.com/photo-154902884${idx}036-${idx}38ae8a7e35?w=1200&fit=crop`;
                }}
              />
              
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">{portfolio.description}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Galeri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.gallery.map((image: string, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <img 
                      src={image} 
                      alt={`${portfolio.title} - Gambar ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                      onError={(e) => {
                        const idx = (index % 3) + 1;
                        e.currentTarget.src = `https://images.unsplash.com/photo-154902884${idx}036-${idx}38ae8a7e35?w=600&h=400&fit=crop`;
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-dpblue-100/50 to-dpblue-200/30 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Tertarik dengan layanan ini?</h3>
              <p className="mb-4">Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk kendaraan Anda.</p>
              <Button 
                onClick={() => window.open(`https://wa.me/6281573635143?text=${encodeURIComponent('Halo, saya tertarik dengan layanan ' + portfolio.title + ' dari Dimas Paint Jogja')}`, '_blank')}
                className="bg-green-500 hover:bg-green-600"
              >
                Hubungi via WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="6281573635143" />
    </div>
  );
}
