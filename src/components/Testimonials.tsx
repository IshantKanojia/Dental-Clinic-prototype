import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Manager',
    rating: 5,
    text: 'SmileCare completely transformed my smile! The teeth whitening service was painless and the results exceeded my expectations. The staff is incredibly professional and caring.',
    image: '👩',
  },
  {
    name: 'John Davis',
    role: 'Business Owner',
    rating: 5,
    text: 'I was terrified of getting a root canal, but Dr. Johnson made the experience so comfortable. The advanced technology and pain management techniques were amazing. Highly recommend!',
    image: '👨',
  },
  {
    name: 'Emily Chen',
    role: 'Teacher',
    rating: 5,
    text: 'After years of being self-conscious about my crooked teeth, I finally got Invisalign at SmileCare. The results are incredible and the entire process was smooth. Thank you!',
    image: '👩',
  },
  {
    name: 'Michael Thompson',
    role: 'Software Engineer',
    rating: 5,
    text: 'The dental implant procedure was much easier than I anticipated. Dr. Wilson is a true professional. My new tooth looks and feels completely natural. Best decision ever!',
    image: '👨',
  },
  {
    name: 'Lisa Anderson',
    role: 'Nurse',
    rating: 5,
    text: 'As a healthcare professional, I appreciate the attention to detail and cleanliness at SmileCare. Their preventive care program has kept my family\'s teeth healthy for years.',
    image: '👩',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real stories from real people who trusted us with their smiles
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-teal-100" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{testimonials[currentIndex].image}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={handlePrev}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-teal-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">based on 500+ Google Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
