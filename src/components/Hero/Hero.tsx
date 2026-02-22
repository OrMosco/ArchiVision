import { motion } from 'framer-motion'
import './Hero.css'

const techTags = ['Python', 'Revit API', 'Dynamo', 'Grasshopper', 'React', 'AutoCAD', 'BIM', 'TypeScript']

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__scan" />
        <div className="hero__diagonal" />
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
        <div className="hero__shape hero__shape--4" />
        <div className="hero__shape hero__shape--circle" />
        <div className="hero__shape hero__shape--line" />
        <div className="hero__overlay" />
      </div>

      <div className="container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text">Tech × Design Studio</span>
          </div>

          <h1 className="hero__title">
            Code Meets<br />
            <em>Architecture</em>
          </h1>

          <p className="hero__subtitle">
            Building at the intersection of software and space — automation tools for MEP engineering,
            parametric design systems, and urban environments that shape the future.
          </p>

          <div className="hero__tags">
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                className="hero__tag"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="hero__actions">
            <motion.a
              href="#projects"
              className="hero__btn hero__btn--primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="hero__btn hero__btn--secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      <a href="#projects" className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </a>
    </section>
  )
}
