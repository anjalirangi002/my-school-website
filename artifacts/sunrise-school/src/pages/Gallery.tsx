import { motion } from "framer-motion";

const images = [
  { src: "/images/hero.png", alt: "Sunrise School Building", title: "Campus Exterior" },
  { src: "/images/assembly.png", alt: "Morning Assembly", title: "Morning Assembly" },
  { src: "/images/classroom.png", alt: "Classroom", title: "Smart Classrooms" },
  { src: "/images/science-lab.png", alt: "Science Lab", title: "Science Laboratory" },
  { src: "/images/library.png", alt: "Library", title: "School Library" },
  { src: "/images/sports.png", alt: "Sports Day", title: "Annual Sports Day" },
  { src: "/images/cultural.png", alt: "Cultural Event", title: "Cultural Festival" },
  { src: "/images/bus.png", alt: "School Bus", title: "Transport Facility" },
  { src: "/images/playground.png", alt: "Playground", title: "Kids Playground" }
];

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Photo Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Glimpses of life at Sunrise Senior Secondary School — where every day is a new opportunity to learn, play, and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] border border-border bg-muted"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
