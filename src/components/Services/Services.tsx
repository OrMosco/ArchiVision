import { motion } from 'framer-motion'
import { Code2, Cpu, Globe, Building2, Layers, ArrowRight } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Cpu size={22} />,
    title: 'MEP Automation',
    desc: 'Custom scripts and plugins that automate MEP coordination, clash detection, and system sizing — cutting hours of manual work to seconds.',
    tags: ['Python', 'Revit API', 'Dynamo'],
    accent: 'cyan',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Software Development',
    desc: 'Purpose-built tools, Revit add-ins, and web platforms for architecture and engineering workflows.',
    tags: ['C#', 'TypeScript', 'React'],
    accent: 'cyan',
  },
  {
    icon: <Layers size={22} />,
    title: 'Parametric Design',
    desc: 'Algorithmic and generative design systems using Grasshopper and Dynamo — from facade optimization to structural form-finding.',
    tags: ['Grasshopper', 'Rhino', 'Dynamo'],
    accent: 'cyan',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Architectural Design',
    desc: 'From concept to construction documents — spaces that are resolved technically, contextually, and aesthetically.',
    tags: ['Revit', 'AutoCAD', 'BIM'],
    accent: 'gold',
  },
  {
    icon: <Globe size={22} />,
    title: 'Urban Design',
    desc: 'Urban master planning, public realm strategies, and data-driven city analysis that shapes liveable, resilient communities.',
    tags: ['QGIS', 'GIS', 'ArcGIS'],
    accent: 'gold',
  },
  {
    icon: <Layers size={22} />,
    title: 'Design Consultation',
    desc: 'Technical guidance on BIM standards, computational workflows, and bridging the gap between design intent and delivery.',
    tags: ['BIM', 'Coordination', 'LOD'],
    accent: 'gold',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
          <span className="section-label">// What I Build</span>
          <h2 className="section-title">Services</h2>
          <p>End-to-end solutions at the intersection of code, architecture, and urban systems.</p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, i) => (
            <motion.div key={service.title} className={`service-card service-card--${service.accent}`} variants={cardVariants}>
              <div className="service-card__icon">{service.icon}</div>
              <span className="service-card__number">0{i + 1}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <div className="service-card__tags">
                {service.tags.map(tag => (
                  <span key={tag} className="service-card__tag">{tag}</span>
                ))}
              </div>
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
