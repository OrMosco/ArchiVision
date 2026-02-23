import { motion } from 'framer-motion'
import './About.css'

const stats = [
  { number: '20+', label: 'Projects Delivered' },
  { number: '5+', label: 'Years in Tech + Design' },
  { number: '3', label: 'Domains: Arch · Urban · MEP' },
  { number: '∞', label: 'Lines of Code' },
]

const timeline = [
  { year: '2018', title: 'Architecture Degree', desc: 'Graduated with a B.Arch — building a foundation in design theory, construction, and spatial thinking.' },
  { year: '2019', title: 'First Code Project', desc: 'Wrote a Dynamo script to automate repetitive Revit tasks. Realized code could transform design workflows entirely.' },
  { year: '2021', title: 'MEP Automation Focus', desc: 'Specialized in automating MEP coordination using Revit API and Python — reducing clash-detection time from days to hours.' },
  { year: '2022', title: 'Urban Design & GIS', desc: 'Expanded into urban-scale projects and data-driven city analysis using QGIS, GIS, and parametric urbanism tools.' },
  { year: '2024', title: 'ArchiVision Studio', desc: 'Launched as an independent studio offering software development, parametric design, and full-spectrum architectural services.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="about__label">// About</span>
            <h2 className="about__title">
              Architect Who<br /><em>Writes Code</em>
            </h2>
            <p className="about__text">
              I work at the crossroads of architecture and software engineering — designing spaces, building automation tools, and solving complex problems that sit between the digital and the built world.
            </p>
            <p className="about__text">
              From MEP automation scripts that save weeks of coordination time, to urban master plans shaped by data, to web-based design tools — my work is driven by one idea: technology should amplify good design, not replace it.
            </p>
            <div className="about__signature">
              <div className="about__signature-line" />
              <span className="about__signature-name">ArchiVision Studio</span>
            </div>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="about__stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="about__stat-number">{stat.number}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about__timeline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="about__timeline-title">Journey</h3>
          <div className="about__timeline-items">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="about__timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="about__timeline-year">{item.year}</div>
                <div className="about__timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
