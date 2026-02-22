import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  { name: 'MEP Coordination Suite', category: 'MEP Automation', year: '2024', tech: 'Python · Revit API', accent: 'cyan' },
  { name: 'Smart City Master Plan', category: 'Urban Design', year: '2024', tech: 'GIS · QGIS', accent: 'gold' },
  { name: 'Parametric Facade System', category: 'Computational Design', year: '2023', tech: 'Grasshopper · Python', accent: 'cyan' },
  { name: 'Revit Automation Toolkit', category: 'Software Dev', year: '2023', tech: 'C# · Dynamo', accent: 'cyan' },
  { name: 'Transit Hub — Haifa Port', category: 'Architecture', year: '2022', tech: 'Revit · AutoCAD', accent: 'gold' },
  { name: 'Green Infrastructure Plan', category: 'Urban Design', year: '2022', tech: 'QGIS · Rhino', accent: 'gold' },
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
          <span className="section-label">// Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p>A curated selection of code, design, and automation projects spanning architecture, urban planning, and MEP engineering.</p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.name} className={`project-card project-card--${project.accent}`} variants={cardVariants}>
              <div className="project-card__image">
                <div className="project-card__pattern" />
                <div className="project-card__geo project-card__geo--1" />
                <div className="project-card__geo project-card__geo--2" />
              </div>
              <div className="project-card__info">
                <div className="project-card__name">{project.name}</div>
                <div className="project-card__tech">{project.tech}</div>
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
