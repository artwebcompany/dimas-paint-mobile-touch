
import { motion } from "framer-motion";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Layanan - Dimas Paint Jogja</title>
      </Helmet>
      
      {/* Services Header */}
      <div className="bg-gradient-to-r from-dpblue-800 to-dpblue-600 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Layanan Kami</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Berbagai layanan profesional body repair dan pengecatan untuk kendaraan Anda
            </p>
          </motion.div>
        </div>
      </div>
      
      <Services />
      
      {/* Additional Services Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Mengapa Memilih Dimas Paint?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 bg-dpblue-100 p-2 rounded-full">
                    <span className="text-dpblue-600 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Tenaga Ahli Berpengalaman</h3>
                    <p className="text-muted-foreground">Teknisi kami memiliki pengalaman bertahun-tahun di bidang body repair dan pengecatan kendaraan.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-dpblue-100 p-2 rounded-full">
                    <span className="text-dpblue-600 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Material Premium</h3>
                    <p className="text-muted-foreground">Kami hanya menggunakan material cat dan perlengkapan berstandar internasional.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-dpblue-100 p-2 rounded-full">
                    <span className="text-dpblue-600 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Garansi Hasil</h3>
                    <p className="text-muted-foreground">Semua layanan kami dilengkapi garansi untuk memastikan kepuasan pelanggan.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/images/services-bg.jpg" 
                alt="Bengkel Dimas Paint"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1599256621730-535171e28e50?w=800&h=600&fit=crop";
                }}
              />
              <div className="absolute -bottom-5 -right-5 bg-dpblue-500 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">10+ Tahun</p>
                <p className="text-sm">Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton phoneNumber="6281573635143" />
    </div>
  );
};

export default ServicesPage;
