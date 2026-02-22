import { motion } from 'framer-motion'
import './About.css'

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '15+', label: 'Years of Experience' },
  { number: '30+', label: 'Awards Won' },
  { number: '100%', label: 'Client Satisfaction' },
]

const timeline = [
  { year: '2009', title: 'Studio Founded', desc: 'Established in the heart of the city with a vision for transformative design.' },
  { year: '2013', title: 'First Major Award', desc: 'Received the National Architecture Excellence Award for the Meridian Tower project.' },
  { year: '2017', title: 'International Expansion', desc: 'Opened offices in London and Tokyo, bringing our philosophy to global markets.' },
  { year: '2021', title: '50th Project Milestone', desc: 'Celebrated the completion of our 50th landmark project across three continents.' },
  { year: '2024', title: 'Sustainable Innovation', desc: 'Launched our Net-Zero Architecture initiative, pioneering eco-conscious design.' },
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
            <span className="about__label">About Us</span>
            <h2 className="about__title">
              Design With <em>Purpose</em>,<br />Build With Precision
            </h2>
            <p className="about__text">
              For over fifteen years, ArchiVision has been shaping the built environment through bold design thinking and meticulous craftsmanship. Our studio is founded on the belief that exceptional architecture transcends mere function.
            </p>
            <p className="about__text">
              We approach every project as a unique dialogue between human need, cultural context, and spatial possibility — creating structures that are not just inhabitable, but truly alive.
            </p>
            <div className="about__signature">
              <div className="about__signature-line" />
              <span className="about__signature-name">Elena Marchetti, Principal Architect</span>
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
          <h3 className="about__timeline-title">Our Journey</h3>
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
