
import { FacebookIcon, InstagramIcon, WhatsApp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dpblue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dimas Paint Jogja</h3>
            <p className="mb-4 text-gray-300">
              Jasa pengecatan profesional dengan kualitas terbaik untuk rumah, kantor, dan properti komersial di Jogja dan sekitarnya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <InstagramIcon size={20} />
              </a>
              <a href="https://wa.me/6281573635143" className="text-gray-300 hover:text-white">
                <WhatsApp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Layanan</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white">Testimonial</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Kontak</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">Pengecatan Rumah</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Pengecatan Komersial</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Cat Dekoratif & Mural</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Renovasi Cat</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Konsultasi Warna</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Jl. Kaliurang KM 5, Yogyakarta</p>
              <p>Indonesia 55281</p>
              <p>+62 815-7363-5143</p>
              <p>dimaspaint.jogja@example.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-dpblue-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Dimas Paint Jogja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
