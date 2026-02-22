import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
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
            <span className="hero__eyebrow-text">Architecture & Design Studio</span>
          </div>

          <h1 className="hero__title">
            Where Vision<br />
            Meets <em>Structure</em>
          </h1>

          <p className="hero__subtitle">
            Crafting iconic spaces that transcend time — we blend architectural precision
            with creative vision to deliver environments that inspire and endure.
          </p>

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
