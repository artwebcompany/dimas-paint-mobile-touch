
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-dpblue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Jasa <span className="text-dpblue-500">Pengecatan</span> Profesional di Jogja
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Layanan pengecatan profesional untuk rumah, kantor, dan properti komersial dengan hasil premium dan tahan lama.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-dpblue-500 hover:bg-dpblue-600 text-white font-medium">
                  Hubungi Kami
                </Button>
              </a>
              <a href="#portfolio">
                <Button size="lg" variant="outline" className="border-dpblue-500 text-dpblue-500 hover:bg-dpblue-50">
                  Lihat Portfolio
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src="/hero-image.jpg" 
              alt="Jasa Pengecatan Profesional Dimas Paint Jogja" 
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1558618062-225406171cce?w=800&auto=format&fit=crop";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
