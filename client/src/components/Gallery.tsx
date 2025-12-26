import { motion } from "framer-motion";
import { useState } from "react";
import { X, Maximize2, Camera } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/gallery1.jpg", title: "Workshop Session" },
    { src: "/gallery2.jpg", title: "Student Interaction" },
    { src: "/gallery3.jpg", title: "Certification Ceremony" },
    { src: "/gallery4.jpg", title: "Practical Lab Training" },
    { src: "/gallery5.jpg", title: "Personality Development Class" },
    { src: "/gallery6.jpg", title: "Campus Recruitment Drive" },
    { src: "/gallery7.jpg", title: "Technical Seminar" },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
            <Camera className="w-3 h-3" />
            <span>Visual Evidence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Moments of <span className="text-primary italic font-serif">Transformation</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            A window into our vibrant training culture, corporate workshops, and student success milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold text-xl">{image.title}</h4>
                  <p className="text-white/70 text-sm font-medium">VSP Training Excellence</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corporate Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-8 right-8 flex items-center space-x-4">
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest hidden md:block">Press ESC to Close</span>
            <button 
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              alt="Gallery FullView" 
              className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
