import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and schedule your appointment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Dental Street</p>
                    <p className="text-gray-600">Healthcare Plaza, Suite 456</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors">+1 (234) 567-8900</p>
                    <p className="text-gray-500 text-sm">Monday - Saturday, 9 AM - 6 PM</p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:info@smilecare.com"
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 group-hover:text-purple-600 transition-colors">info@smilecare.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </motion.a>

                {/* Hours */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-red-600 font-medium mt-2">🚨 24/7 Emergency Care Available</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl shadow-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-2">Dental Emergency?</h3>
              <p className="mb-4 text-white/90">We're available 24/7 for urgent dental care</p>
              <motion.a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-600 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Emergency Line
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full min-h-[600px]">
              <div className="w-full h-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                {/* Placeholder for Google Maps */}
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-4">
                    123 Dental Street<br />
                    Healthcare Plaza, Suite 456<br />
                    New York, NY 10001
                  </p>
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MapPin className="w-5 h-5" />
                    Open in Google Maps
                  </motion.a>
                  
                  {/* Decorative map elements */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow">
                      <p className="text-2xl mb-1">🚗</p>
                      <p className="text-xs text-gray-600">Free Parking</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow">
                      <p className="text-2xl mb-1">🚇</p>
                      <p className="text-xs text-gray-600">Near Subway</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow">
                      <p className="text-2xl mb-1">♿</p>
                      <p className="text-xs text-gray-600">Accessible</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
