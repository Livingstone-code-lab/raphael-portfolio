import { ArrowUpRight, Code2, Layers3, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'

const traits = [
  { icon: <Code2/>, title: 'Thoughtful code', text: 'I break problems into clear, manageable pieces and build with structure in mind.' },
  { icon: <Layers3/>, title: 'Design awareness', text: 'I care about the details that make an interface feel intuitive, considered and alive.' },
  { icon: <Sparkles/>, title: 'Always evolving', text: 'I stay curious, learn by building and treat every project as a chance to improve.' }
]

export default function About() {
  return (
    <section className="about section-wrap section-pad" id="about">
      <SectionHeading index="01" eyebrow="A LITTLE ABOUT ME" title="Curiosity meets" italic="craft."/>
      <div className="about-grid">
        <div className="about-lead reveal">
          <p className="large-copy">I'm Raphael — a self-driven frontend developer who believes the web should be both <em>useful and beautiful.</em></p>
          <p className="body-copy">I enjoy taking an idea from its earliest sketch to a working experience. My process is rooted in curiosity, problem-solving and a genuine love for creating things people can use.</p>
          <p className="body-copy">Working primarily with JavaScript and the React ecosystem, I'm continually sharpening my craft and exploring better ways to build responsive, accessible and engaging interfaces.</p>
          <a className="text-link" href="https://github.com/Livingstone-code-lab/" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16}/></a>
        </div>
        <div className="trait-list reveal">
          {traits.map((trait, i) => <article className="trait" key={trait.title}>
            <div className="trait-icon">{trait.icon}</div>
            <div><span className="micro-label">0{i+1} / MY APPROACH</span><h3>{trait.title}</h3><p>{trait.text}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  )
}