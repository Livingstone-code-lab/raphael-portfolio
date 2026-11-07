import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="work section-wrap section-pad" id="work">
      <SectionHeading index="03" eyebrow="SELECTED PROJECTS" title="A few things I've" italic="brought to life."/>
      <div className="work-intro reveal"><p>Experiments, practical tools and product ideas — each one built to solve a problem and make something a little better.</p><span>04 PROJECTS / 2026</span></div>
      <div className="project-grid">{projects.map(project => <ProjectCard key={project.number} project={project}/>)}</div>
    </section>
  )
}