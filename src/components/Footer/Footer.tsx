import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand-logo">Archi<span>Vision</span></div>
            <p className="footer__brand-desc">
              Shaping the future of the built environment through visionary design, precision engineering, and a passion for excellence.
            </p>
          </div>
          <div>
            <div className="footer__col-title">Navigation</div>
            <ul className="footer__links">
              {['Projects', 'About', 'Services', 'Contact'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Services</div>
            <ul className="footer__links">
              {['Architectural Design', 'Interior Planning', 'Urban Development', 'Consultation'].map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Contact</div>
            <ul className="footer__links">
              <li><a href="mailto:hello@archivision.studio">hello@archivision.studio</a></li>
              <li><a href="tel:+442079460123">+44 20 7946 0123</a></li>
              <li><a href="#contact">14 Meridian Place, London</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© 2024 ArchiVision Studio. All rights reserved.</span>
          <div className="footer__socials">
            {['Ig', 'Li', 'Tw', 'Bh'].map(s => (
              <div key={s} className="footer__social">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
