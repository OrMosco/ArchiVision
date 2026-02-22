import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  { name: 'Horizon Tower', category: 'Commercial', year: '2024' },
  { name: 'Coastal Villa', category: 'Residential', year: '2023' },
  { name: 'Urban Hub', category: 'Mixed-Use', year: '2023' },
  { name: 'Glass Pavilion', category: 'Cultural', year: '2022' },
  { name: 'Heritage Center', category: 'Civic', year: '2022' },
  { name: 'Skyline Residences', category: 'Residential', year: '2021' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p>A curated selection of our most ambitious architectural achievements across the globe.</p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.name} className="project-card" variants={cardVariants}>
              <div className="project-card__image">
                <div className="project-card__pattern" />
                <div className="project-card__geo project-card__geo--1" />
                <div className="project-card__geo project-card__geo--2" />
              </div>
              <div className="project-card__info">
                <div className="project-card__name">{project.name}</div>
                <div className="project-card__meta">
                  <span className="project-card__tag">{project.category}</span>
                  <span className="project-card__year">{project.year}</span>
                </div>
              </div>
              <div className="project-card__overlay">
                <button className="project-card__view-btn">View Project</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
