
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Define project types to organize the portfolio
type ProjectCategory = 'semua' | 'interior' | 'eksterior' | 'khusus';

// Portfolio items
const PORTFOLIO_ITEMS = [
  {
    title: 'Renovasi Cat Rumah Modern',
    category: 'eksterior',
    image: '/portfolio-1.jpg',
    description: 'Pengecatan ulang eksterior rumah dengan warna modern dan tahan cuaca.'
  },
  {
    title: 'Pengecatan Interior Minimalis',
    category: 'interior',
    image: '/portfolio-2.jpg',
    description: 'Pengecatan interior dengan nuansa minimalis untuk ruang tamu dan kamar.'
  },
  {
    title: 'Lukisan Mural Café',
    category: 'khusus',
    image: '/portfolio-3.jpg',
    description: 'Mural dekoratif untuk dinding café dengan desain kustom.'
  },
  {
    title: 'Pengecatan Kantor',
    category: 'interior',
    image: '/portfolio-4.jpg',
    description: 'Pengecatan ruang kantor dengan warna yang meningkatkan produktivitas.'
  },
  {
    title: 'Renovasi Fasad Ruko',
    category: 'eksterior',
    image: '/portfolio-5.jpg',
    description: 'Pengecatan ulang fasad ruko untuk tampilan yang lebih modern dan menarik.'
  },
  {
    title: 'Cat Tekstur Dekoratif',
    category: 'khusus',
    image: '/portfolio-6.jpg',
    description: 'Aplikasi cat tekstur khusus untuk dinding feature yang menarik perhatian.'
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
    <section id="portfolio" className="section bg-dpblue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lihat hasil karya pengecatan berkualitas yang telah kami kerjakan untuk klien kami.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value 
                  ? 'bg-dpblue-500 text-white' 
                  : 'bg-white text-foreground hover:bg-dpblue-100'
              }`}
              onClick={() => setActiveCategory(category.value as ProjectCategory)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="cursor-pointer group overflow-hidden rounded-lg shadow-md bg-white">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const idx = index % 3;
                        e.currentTarget.src = `https://images.unsplash.com/photo-154902884${idx}036-${idx}38ae8a7e35?w=600&h=400&fit=crop`;
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
