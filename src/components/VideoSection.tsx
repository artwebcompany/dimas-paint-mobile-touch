
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 bg-dpblue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proses Pengecatan Kami</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Saksikan bagaimana kami melakukan proses pengecatan yang profesional dan berkualitas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <video
              ref={videoRef}
              className="w-full h-auto"
              poster="/src/assets/images/video-thumbnail.jpg"
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/src/assets/videos/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div 
              className={`absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              onClick={togglePlay}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full w-16 h-16 flex items-center justify-center border-white text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-dpblue-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Persiapan Permukaan</h3>
              <p className="text-white/80 text-sm">Membersihkan dan mempersiapkan permukaan untuk hasil yang sempurna</p>
            </div>
            <div className="bg-dpblue-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Proses Pengecatan</h3>
              <p className="text-white/80 text-sm">Menggunakan teknik dan peralatan modern untuk hasil terbaik</p>
            </div>
            <div className="bg-dpblue-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Finishing & Polishing</h3>
              <p className="text-white/80 text-sm">Memberikan kilau dan perlindungan pada hasil pengecatan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
