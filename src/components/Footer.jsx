import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return <footer className="footer section-wrap">
    <div className="footer-top"><a className="wordmark footer-mark" href="#top">RL<span>.</span></a><p>Thoughtfully built.<br/>Always becoming.</p><a className="back-top" href="#top">BACK TO TOP ↑</a></div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} RAPHAEL LIVINGSTONE DOZIE</span>
      <div className="social-links">
        <a href="https://github.com/Livingstone-code-lab/" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13}/></a>
        <a href="https://www.linkedin.com/in/dozie-raphael-40490038b" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={13}/></a>
        <a href="https://x.com/Blaq_devv" target="_blank" rel="noreferrer">X / TWITTER <ArrowUpRight size={13}/></a>
      </div>
      <span>DESIGNED & BUILT WITH INTENTION</span>
    </div>
  </footer>
}