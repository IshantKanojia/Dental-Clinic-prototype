import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentSection: (section: string) => void;
}

export default function Footer({ setCurrentSection }: FooterProps) {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    'Teeth Whitening',
    'Root Canal',
    'Braces & Invisalign',
    'Dental Implants',
    'Cosmetic Dentistry',
    'Emergency Care',
  ];

  const socialLinks = [
    { icon: 'f', label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: '📷', label: 'Instagram', href: '#', color: 'hover:text-pink-600' },
    { icon: '🐦', label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: '💼', label: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
  ];

  const handleNavClick = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SmileCare</h3>
                <p className="text-xs text-gray-400">Dental Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for comprehensive dental care. Creating confident smiles since 2009.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon, label, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  title={label}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors text-lg ${color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('booking')}
                  className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
                >
                  Book Appointment →
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Dental Street<br />
                  Healthcare Plaza, Suite 456<br />
                  New York, NY 10001
                </span>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors">
                  <Phone className="w-5 h-5 text-teal-400" />
                  +1 (234) 567-8900
                </a>
              </li>
              <li>
                <a href="mailto:info@smilecare.com" className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors">
                  <Mail className="w-5 h-5 text-teal-400" />
                  info@smilecare.com
                </a>
              </li>
            </ul>

            {/* Emergency Badge */}
            <div className="mt-6 bg-red-600 rounded-lg p-3">
              <p className="text-white font-bold text-sm">🚨 24/7 Emergency Care</p>
              <p className="text-white/90 text-xs">Call anytime for urgent dental needs</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">HIPAA Compliance</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
