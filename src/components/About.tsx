import { motion } from 'framer-motion';
import { Award, Heart, Users, Clock } from 'lucide-react';

const timeline = [
  { year: '2009', event: 'SmileCare Founded', description: 'Started with a vision to provide exceptional dental care' },
  { year: '2012', event: 'Expanded Services', description: 'Added cosmetic dentistry and orthodontics' },
  { year: '2016', event: 'State-of-Art Facility', description: 'Moved to our modern, fully equipped clinic' },
  { year: '2020', event: '5000+ Happy Patients', description: 'Celebrated milestone of transforming thousands of smiles' },
  { year: '2024', event: 'Award Winning', description: 'Recognized as Best Dental Clinic in the region' },
];

const team = [
  { name: 'Dr. Sarah Johnson', role: 'Chief Dentist', specialty: 'Cosmetic Dentistry', emoji: '👩‍⚕️' },
  { name: 'Dr. Michael Chen', role: 'Orthodontist', specialty: 'Braces & Invisalign', emoji: '👨‍⚕️' },
  { name: 'Dr. Emily Davis', role: 'Endodontist', specialty: 'Root Canal Specialist', emoji: '👩‍⚕️' },
  { name: 'Dr. James Wilson', role: 'Oral Surgeon', specialty: 'Dental Implants', emoji: '👨‍⚕️' },
];

const values = [
  { icon: Heart, title: 'Patient-Centered Care', desc: 'Your comfort and health are our top priorities' },
  { icon: Award, title: 'Excellence', desc: 'Committed to the highest standards of dental care' },
  { icon: Users, title: 'Expert Team', desc: 'Highly trained professionals with years of experience' },
  { icon: Clock, title: 'Always Available', desc: '24/7 emergency dental services when you need us' },
];

export default function About() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About SmileCare</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional dental care for over 15 years
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            At SmileCare Dental, we believe that everyone deserves a healthy, beautiful smile. Our approach combines cutting-edge technology with compassionate care to deliver exceptional results in a comfortable environment.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We understand that visiting the dentist can be stressful, which is why we've created a welcoming atmosphere where patients feel valued and cared for. From routine checkups to complex procedures, we're committed to making your dental experience as pleasant as possible.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-4 border-teal-500 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-bold mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Expert Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
