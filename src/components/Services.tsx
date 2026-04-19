import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Shield, Smile, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    shortDesc: 'Professional whitening for a brighter smile',
    fullDesc: 'Transform your smile with our advanced teeth whitening treatments. Using the latest technology, we can brighten your teeth several shades in just one visit. Safe, effective, and long-lasting results.',
    price: 'From $299',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Shield,
    title: 'Root Canal',
    shortDesc: 'Pain-free root canal therapy',
    fullDesc: 'Our experienced endodontists use modern techniques and sedation options to make root canal treatment comfortable and stress-free. Save your natural tooth and eliminate pain.',
    price: 'From $699',
    color: 'from-red-400 to-pink-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Smile,
    title: 'Braces & Invisalign',
    shortDesc: 'Straighten your teeth with confidence',
    fullDesc: 'Choose from traditional braces or clear Invisalign aligners to achieve the perfect smile. Our orthodontists create customized treatment plans for optimal results.',
    price: 'From $3,999',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Dental Implants',
    shortDesc: 'Permanent solution for missing teeth',
    fullDesc: 'Replace missing teeth with dental implants that look, feel, and function like natural teeth. Our skilled surgeons use state-of-the-art technology for precise placement.',
    price: 'From $1,999',
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    shortDesc: 'Regular checkups and cleanings',
    fullDesc: 'Maintain optimal oral health with routine examinations, professional cleanings, and preventive treatments. Early detection prevents costly procedures.',
    price: 'From $99',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    shortDesc: 'Enhance your smile aesthetically',
    fullDesc: 'From veneers to bonding, our cosmetic procedures are designed to give you the smile of your dreams. Personalized treatments for natural-looking results.',
    price: 'From $499',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-50',
  },
];

interface ServicesProps {
  preview?: boolean;
}

export default function Services({ preview = false }: ServicesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const displayServices = preview ? services.slice(0, 4) : services;

  return (
    <section className={`${preview ? 'py-20' : 'pt-32 pb-20'} bg-gradient-to-b from-white to-gray-50`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive dental care tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className={`p-6 ${service.bgColor}`}>
                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-teal-600 font-bold">{service.price}</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <p className="text-gray-600 text-sm mb-4">{service.fullDesc}</p>
                    <motion.button
                      className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book This Service
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-xl font-medium hover:bg-teal-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
