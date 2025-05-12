
import { Helmet } from "react-helmet";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Testimonial - Dimas Paint Jogja</title>
      </Helmet>
      
      {/* Testimonials Header */}
      <div className="bg-gradient-to-r from-dpblue-800 to-dpblue-600 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Testimonial Pelanggan</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Apa kata pelanggan tentang layanan body repair dan pengecatan kami
            </p>
          </motion.div>
        </div>
      </div>
      
      <Testimonials />
      
      {/* Submit testimonial CTA */}
      <section className="py-16 bg-dpblue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Puas dengan layanan kami?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bagikan pengalaman Anda menggunakan jasa Dimas Paint Jogja dan bantu calon pelanggan lain membuat keputusan yang tepat.
          </p>
          <a href="#contact" className="inline-block bg-dpblue-500 hover:bg-dpblue-600 text-white py-3 px-6 rounded-md font-medium transition-colors">
            Kirim Testimoni
          </a>
        </div>
      </section>
      
      <WhatsAppButton phoneNumber="6281573635143" />
    </div>
  );
};

export default TestimonialsPage;
