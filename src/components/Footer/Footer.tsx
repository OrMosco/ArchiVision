import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand-logo">Archi<span>Vision</span></div>
            <p className="footer__brand-desc">
              Tech × Design studio specializing in MEP automation, parametric design, urban planning, and software development for the built environment.
            </p>
          </div>
          <div>
            <div className="footer__col-title">Navigate</div>
            <ul className="footer__links">
              {['Projects', 'About', 'Services', 'Contact'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Services</div>
            <ul className="footer__links">
              {['MEP Automation', 'Parametric Design', 'Urban Design', 'Software Dev', 'Architectural Design'].map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Contact</div>
            <ul className="footer__links">
              <li><a href="mailto:hello@archivision.studio">hello@archivision.studio</a></li>
              <li><a href="#contact">Tel Aviv, Israel</a></li>
              <li><a href="#contact">Sun – Thu, 09:00 – 18:00</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© 2024 ArchiVision Studio. All rights reserved.</span>
          <div className="footer__socials">
            {['GH', 'Li', 'Be', 'Tw'].map(s => (
              <div key={s} className="footer__social">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
