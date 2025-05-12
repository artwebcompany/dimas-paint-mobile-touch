
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden"
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/src/assets/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Jasa <span className="text-dpblue-300">Body Repair</span> & Pengecatan Profesional di Jogja
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-6">
                Solusi terbaik untuk perbaikan dan pengecatan kendaraan dengan hasil premium dan tahan lama.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#contact">
                    <Button size="lg" className="bg-dpblue-500 hover:bg-dpblue-600 text-white font-medium">
                      Hubungi Kami
                    </Button>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#portfolio">
                    <Button size="lg" variant="outline" className="border-dpblue-300 text-white hover:bg-dpblue-500/30">
                      Lihat Portfolio
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Promo Banner */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg shadow-lg"
            >
              <p className="font-bold text-white text-lg">PROMO SPESIAL!</p>
              <p className="text-white text-sm">Dapatkan diskon 15% untuk pengecatan full body hingga akhir bulan!</p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl w-full max-w-lg aspect-video">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop
                playsInline
              >
                <source src="/src/assets/videos/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold">Lihat Proses Pengecatan Kami</p>
                <p className="text-sm text-white/80">Kualitas Premium untuk Kendaraan Anda</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
