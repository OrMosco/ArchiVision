import { motion } from 'framer-motion'
import { Building2, Layout, Globe, MessageSquare, ArrowRight } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Building2 size={24} />,
    title: 'Architectural Design',
    desc: 'From concept to completion, we craft structures that define skylines and redefine possibility.',
  },
  {
    icon: <Layout size={24} />,
    title: 'Interior Planning',
    desc: 'Thoughtfully curated interiors that balance aesthetics, function, and the human experience.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Urban Development',
    desc: 'Strategic urban masterplanning that creates cohesive, liveable communities for generations.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Project Consultation',
    desc: 'Expert guidance throughout every phase — from site analysis to final occupancy and beyond.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p>Comprehensive architectural solutions tailored to your vision and requirements.</p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, i) => (
            <motion.div key={service.title} className="service-card" variants={cardVariants}>
              <div className="service-card__icon">{service.icon}</div>
              <span className="service-card__number">0{i + 1}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <div className="service-card__link">
                Learn more <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
