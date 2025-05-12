
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Define project types to organize the portfolio
type ProjectCategory = 'semua' | 'interior' | 'eksterior' | 'khusus';

// Portfolio items
const PORTFOLIO_ITEMS = [
  {
    id: 'renovasi-cat-rumah-modern',
    title: 'Renovasi Body Repair Mobil Toyota Avanza',
    category: 'eksterior',
    image: '/portfolio-1.jpg',
    description: 'Perbaikan dan pengecatan ulang body mobil Toyota Avanza yang mengalami kerusakan parah pada bagian samping.'
  },
  {
    id: 'pengecatan-interior-minimalis',
    title: 'Restorasi Cat Motor Klasik Honda CB',
    category: 'interior',
    image: '/portfolio-2.jpg',
    description: 'Restorasi pengecatan total pada motor klasik Honda CB dengan mempertahankan warna original namun memberikan sentuhan modern pada finishing-nya.'
  },
  {
    id: 'lukisan-mural-cafe',
    title: 'Custom Airbrush Motor Harley Davidson',
    category: 'khusus',
    image: '/portfolio-3.jpg',
    description: 'Pengerjaan custom airbrush pada tangki dan body motor Harley Davidson dengan tema elang dan api.'
  },
  {
    id: 'pengecatan-kantor',
    title: 'Penggantian Warna Mobil BMW',
    category: 'interior',
    image: '/portfolio-4.jpg',
    description: 'Transformasi warna mobil BMW dari hitam menjadi biru metalik dengan hasil yang sempurna.'
  },
  {
    id: 'renovasi-fasad-ruko',
    title: 'Body Repair Mobil Pasca Kecelakaan',
    category: 'eksterior',
    image: '/portfolio-5.jpg',
    description: 'Perbaikan total body mobil yang mengalami kerusakan parah akibat kecelakaan.'
  },
  {
    id: 'cat-tekstur-dekoratif',
    title: 'Paint Protection Film Mercedes Benz',
    category: 'khusus',
    image: '/portfolio-6.jpg',
    description: 'Pemasangan paint protection film pada seluruh body Mercedes Benz untuk perlindungan maksimal terhadap goresan dan kotoran.'
  },
];

// Portfolio filter categories
const CATEGORIES = [
  { label: 'Semua', value: 'semua' },
  { label: 'Interior', value: 'interior' },
  { label: 'Eksterior', value: 'eksterior' },
  { label: 'Special', value: 'khusus' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('semua');

  const filteredItems = activeCategory === 'semua' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-gradient-to-b from-dpblue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lihat hasil karya body repair dan pengecatan berkualitas yang telah kami kerjakan untuk klien kami.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value 
                  ? 'bg-gradient-to-r from-dpblue-500 to-dpblue-600 text-white shadow-md' 
                  : 'bg-white text-foreground hover:bg-dpblue-100'
              }`}
              onClick={() => setActiveCategory(category.value as ProjectCategory)}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-white to-dpblue-50/50 hover:shadow-lg transition-all duration-300">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const idx = index % 3;
                          e.currentTarget.src = `https://images.unsplash.com/photo-154902884${idx}036-${idx}38ae8a7e35?w=600&h=400&fit=crop`;
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex justify-end">
                        <Link to={`/portfolio/${item.id}`}>
                          <Button variant="outline" size="sm" className="text-dpblue-600 border-dpblue-300 hover:bg-dpblue-50">
                            Lihat Detail
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      const idx = index % 3;
                      e.currentTarget.src = `https://images.unsplash.com/photo-154902884${idx}036-${idx}38ae8a7e35?w=800&h=600&fit=crop`;
                    }}
                  />
                  <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="flex justify-end mt-4">
                    <Link to={`/portfolio/${item.id}`}>
                      <Button className="bg-dpblue-500 hover:bg-dpblue-600">Lihat Detail</Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
