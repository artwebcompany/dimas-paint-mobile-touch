
import { Helmet } from "react-helmet";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Kontak - Dimas Paint Jogja</title>
      </Helmet>
      
      {/* Contact Header */}
      <div className="bg-dpblue-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Hubungi Kami</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Kami siap membantu mewujudkan kendaraan impian Anda
            </p>
          </motion.div>
        </div>
      </div>
      
      <ContactSection />
      <WhatsAppButton phoneNumber="6281573635143" />
    </div>
  );
};

export default ContactPage;
