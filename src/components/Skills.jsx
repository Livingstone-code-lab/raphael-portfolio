import SectionHeading from './SectionHeading'

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'GitHub', 'REST APIs', 'Responsive design']

export default function Skills() {
  return (
    <section className="skills-band section-wrap section-pad" id="approach">
      <SectionHeading index="02" eyebrow="THE TOOLKIT" title="Tools for turning" italic="ideas real."/>
      <p className="skills-intro reveal">A growing toolkit for shaping dependable, responsive and engaging web experiences.</p>
      <div className="skill-cloud reveal">
        {skills.map((skill, i) => <span className="skill-pill" key={skill}><small>0{i+1}</small>{skill}</span>)}
      </div>
      <div className="skills-note reveal"><span className="status-dot"/> ALWAYS LEARNING. ALWAYS BUILDING.</div>
    </section>
  )
}