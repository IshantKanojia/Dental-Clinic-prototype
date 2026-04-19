import { motion } from 'framer-motion';
import { useState } from 'react';

const beforeAfterImages = [
  { before: '😐', after: '😁', title: 'Teeth Whitening', description: '6 shades brighter in one session' },
  { before: '😬', after: '😊', title: 'Orthodontics', description: 'Perfect alignment achieved' },
  { before: '😟', after: '😃', title: 'Dental Veneers', description: 'Complete smile makeover' },
  { before: '😕', after: '😄', title: 'Dental Implants', description: 'Natural looking replacement' },
];

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformations That Speak
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See the amazing results our patients have achieved
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl mb-8"
            style={{ height: '400px' }}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image (Right Side) */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
              <div className="text-center">
                <div className="text-9xl mb-4">{beforeAfterImages[currentImageIndex].before}</div>
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                  <p className="font-bold text-gray-800">BEFORE</p>
                </div>
              </div>
            </div>

            {/* After Image (Left Side) */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-500"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <div className="text-center">
                <div className="text-9xl mb-4">{beforeAfterImages[currentImageIndex].after}</div>
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                  <p className="font-bold text-gray-800">AFTER</p>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-6 bg-gray-400 rounded"></div>
                  <div className="w-1 h-6 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>

            {/* Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {beforeAfterImages[currentImageIndex].title}
              </h3>
              <p className="text-gray-600">{beforeAfterImages[currentImageIndex].description}</p>
            </div>
          </motion.div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-4 gap-4">
            {beforeAfterImages.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setSliderPosition(50);
                }}
                className={`relative rounded-xl overflow-hidden aspect-square ${
                  currentImageIndex === index
                    ? 'ring-4 ring-teal-500 shadow-xl'
                    : 'ring-2 ring-gray-200 hover:ring-teal-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="bg-gray-300 flex items-center justify-center text-4xl">
                    {item.before}
                  </div>
                  <div className="bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-4xl">
                    {item.after}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1 px-2 text-center">
                  {item.title}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Instruction */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center text-gray-500 mt-6"
          >
            👆 Drag the slider to see the transformation
          </motion.p>
        </div>
      </div>
    </section>
  );
}
