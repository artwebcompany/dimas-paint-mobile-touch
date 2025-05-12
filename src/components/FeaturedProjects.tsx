
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FEATURED_PROJECTS = [
  {
    id: 'restorasi-mobil-klasik',
    title: 'Restorasi Total Mobil Klasik',
    image: '/src/assets/images/featured-1.jpg',
    description: 'Proyek restorasi lengkap mobil klasik VW Kombi 1972 dengan pewarnaan custom dan detailing interior.',
  },
  {
    id: 'pengecatan-motor-custom',
    title: 'Custom Painting Harley Davidson',
    image: '/src/assets/images/featured-2.jpg',
    description: 'Pengecatan custom dengan teknik airbrush tema elang dan api pada motor Harley Davidson.',
  },
  {
    id: 'wrapping-mobil-sport',
    title: 'Color Change BMW M4 Competition',
    image: '/src/assets/images/featured-3.jpg',
    description: 'Transformasi warna BMW M4 Competition dari hitam menjadi biru metalik dengan hasil yang spektakuler.',
  }
];

export default function FeaturedProjects() {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyek Unggulan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beberapa karya terbaik yang menunjukkan kualitas dan keahlian tim Dimas Paint Jogja
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const idx = index % 3;
                    e.currentTarget.src = `https://images.unsplash.com/photo-158459283${idx}399-${idx}544de43a7e?w=600&h=800&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="font-bold text-xl text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full md:w-auto border-white/50 text-white hover:bg-white/20 transition-colors mt-auto"
                  >
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            onClick={() => navigate('/portfolio')}
            className="bg-dpblue-500 hover:bg-dpblue-600"
          >
            Lihat Semua Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
