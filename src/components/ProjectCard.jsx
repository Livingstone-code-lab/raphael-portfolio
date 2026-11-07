import { ArrowUpRight, ExternalLink, Code2 } from 'lucide-react'

function ProjectVisual({ type }) {
  return <div className={`project-visual visual-${type}`}>
    {type === 'queue' && <div className="mock-queue"><div className="mock-top"><b>queueflow</b><span>● LIVE</span></div><div className="mock-big">A<span>12</span></div><div className="mock-lines"><i/><i/><i/></div><div className="mock-bottom"><span>WAITING</span><b>03</b></div></div>}
    {type === 'crypto' && <div className="mock-crypto"><div className="mock-top"><b>MARKET OVERVIEW</b><span>↗ 2.48%</span></div><strong>$64,284<span>.90</span></strong><div className="chart-line"><svg viewBox="0 0 360 100" preserveAspectRatio="none"><path d="M0 80 C25 72 26 48 50 58 S83 80 105 50 S142 62 165 36 S205 58 228 27 S270 42 294 16 S335 30 360 5"/></svg></div><div className="mock-bottom"><span>BTC / USD</span><span>24H CHANGE</span></div></div>}
    {type === 'mortgage' && <div className="mock-mortgage"><span>YOUR MONTHLY ESTIMATE</span><strong>₦ 485,000</strong><div className="mortgage-bar"><i/></div><div className="mortgage-stats"><span>PRINCIPAL <b>72%</b></span><span>INTEREST <b>28%</b></span></div></div>}
    {type === 'weather' && <div className="mock-weather"><span>LAGOS, NG</span><div className="sun-shape">☼</div><strong>29°</strong><p>Partly sunny</p><div className="weather-bottom"><span>HUMIDITY 68%</span><span>WIND 12KM/H</span></div></div>}
    <span className="visual-caption">INTERFACE STUDY / {type.toUpperCase()}</span>
  </div>
}

export default function ProjectCard({ project }) {
  return <article className="project-card reveal">
    <a className="project-art-link" href={project.liveUrl || '#contact'} aria-label={`Open ${project.name} project`}>
      <ProjectVisual type={project.visual}/>
      <span className="project-open"><ArrowUpRight size={20}/></span>
    </a>
    <div className="project-info">
      <div className="project-meta"><span>{project.number} / SELECTED WORK</span><span>{project.category}</span></div>
      <div className="project-title-row"><h3>{project.name}</h3><span className="project-arrow"><ArrowUpRight size={21}/></span></div>
      <p>{project.description}</p>
      <div className="project-footer">
        <div className="stack-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          <a href={project.liveUrl || undefined} onClick={e => !project.liveUrl && e.preventDefault()} aria-label="Live demo" title="live URL"><ExternalLink size={16}/></a>
          <a href={project.sourceUrl || undefined} onClick={e => !project.sourceUrl && e.preventDefault()} aria-label="Source code" title="source URL"><Code2 size={16}/></a>
        </div>
      </div>
    </div>
  </article>
}