import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { id: 1, category: 'clinic', emoji: '🏥', title: 'Modern Reception Area', desc: 'Welcoming and comfortable' },
  { id: 2, category: 'clinic', emoji: '🪑', title: 'Treatment Room', desc: 'State-of-the-art equipment' },
  { id: 3, category: 'clinic', emoji: '💼', title: 'Consultation Office', desc: 'Private and professional' },
  { id: 4, category: 'clinic', emoji: '🧪', title: 'Digital Lab', desc: 'Advanced technology' },
  { id: 5, category: 'results', emoji: '😁', title: 'Teeth Whitening Result', desc: 'Brighter smile achieved' },
  { id: 6, category: 'results', emoji: '😊', title: 'Invisalign Success', desc: 'Perfect alignment' },
  { id: 7, category: 'results', emoji: '😃', title: 'Dental Veneers', desc: 'Complete transformation' },
  { id: 8, category: 'results', emoji: '😄', title: 'Implant Restoration', desc: 'Natural looking results' },
  { id: 9, category: 'team', emoji: '👩‍⚕️', title: 'Dr. Sarah Johnson', desc: 'Chief Dentist' },
  { id: 10, category: 'team', emoji: '👨‍⚕️', title: 'Dr. Michael Chen', desc: 'Orthodontist' },
  { id: 11, category: 'team', emoji: '👩‍⚕️', title: 'Dr. Emily Davis', desc: 'Endodontist' },
  { id: 12, category: 'team', emoji: '👨‍⚕️', title: 'Dr. James Wilson', desc: 'Oral Surgeon' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'clinic', label: 'Our Clinic' },
  { id: 'results', label: 'Results' },
  { id: 'team', label: 'Our Team' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a tour of our modern facility and see the smiles we've created
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow">
                  <div className="w-full h-full flex items-center justify-center text-7xl">
                    {image.emoji}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.desc}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="aspect-video bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                  <div className="text-9xl">{selectedImage.emoji}</div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedImage.title}</h2>
                  <p className="text-gray-600 text-lg">{selectedImage.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
