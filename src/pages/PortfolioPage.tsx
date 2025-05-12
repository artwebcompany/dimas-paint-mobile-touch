
import { Helmet } from "react-helmet";
import Portfolio from "@/components/Portfolio";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Portfolio - Dimas Paint Jogja</title>
      </Helmet>
      
      {/* Portfolio Header */}
      <div 
        className="py-16 md:py-24 relative"
        style={{ 
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/src/assets/images/portfolio-header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Portfolio</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Karya terbaik dari layanan body repair dan pengecatan Dimas Paint Jogja
            </p>
          </motion.div>
        </div>
      </div>
      
      <Portfolio />
      <WhatsAppButton phoneNumber="6281573635143" />
    </div>
  );
};

export default PortfolioPage;
