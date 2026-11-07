import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-topline reveal">
        <span className="eyebrow"><i className="status-dot"/> AVAILABLE FOR SELECT OPPORTUNITIES</span>
        <span className="eyebrow location">LAGOS, NIGERIA <span className="tiny-cross">✳</span> 06°27'N 03°24'E</span>
      </div>

      <div className="hero-stage">
        <div className="hero-copy hero-copy-left reveal">
          <span className="micro-label">INDEPENDENT FRONTEND DEVELOPER</span>
          <h1>Ideas<br/>into <em>impact.</em></h1>
          <p>I build thoughtful digital experiences with a balance of creativity, clarity and code.</p>
          <a className="text-link" href="#work">Explore my work <MoveUpRight size={16}/></a>
        </div>

        <div className="portrait-composition reveal">
          <div className="portrait-halo"/>
          <div className="portrait-frame">
            <img src="/assets/raphaelPortrait.png" alt="Portrait of Raphael Livingstone Dozie" />
          </div>
          <span className="portrait-index">FIG. 01 — THE CREATOR</span>
          <span className="orbit orbit-one"/>
          <span className="orbit orbit-two"/>
          <span className="floating-stamp">CRAFT<br/>WITH<br/><b>INTENT</b> ✳</span>
        </div>

        <div className="hero-copy hero-copy-right reveal">
          <span className="micro-label">HELLO, I'M</span>
          <h2>Raphael<br/><em>Livingstone</em><br/>Dozie<span className="accent-dot">.</span></h2>
          <p>Passionate about bringing ideas to life and turning complex problems into simple, engaging interfaces.</p>
          <a className="round-link" href="#contact" aria-label="Go to contact"><ArrowUpRight size={22}/></a>
        </div>
      </div>

      <div className="hero-bottom reveal">
        <span className="scroll-cue"><ArrowDown size={14}/> SCROLL TO EXPLORE</span>
        <p>Design-minded developer <span>·</span> Building for the web</p>
        <span className="hero-year">PORTFOLIO — 2026</span>
      </div>
    </section>
  )
}