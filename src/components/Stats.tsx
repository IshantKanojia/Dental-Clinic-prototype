import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Users, Award, Clock, Smile } from 'lucide-react';

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Smiles Treated', color: 'text-teal-600 bg-teal-100' },
  { icon: Award, value: 15, suffix: '+', label: 'Years Experience', color: 'text-blue-600 bg-blue-100' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Emergency Care', color: 'text-purple-600 bg-purple-100' },
  { icon: Smile, value: 98, suffix: '%', label: 'Satisfaction Rate', color: 'text-green-600 bg-green-100' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gray-900">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has made us the preferred choice for dental care
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </motion.div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
