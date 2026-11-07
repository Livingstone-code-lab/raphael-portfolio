import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section className="contact section-wrap section-pad" id="contact">
      <SectionHeading index="04" eyebrow="HAVE SOMETHING IN MIND?" title="Let's make" italic="it happen."/>
      <div className="contact-panel reveal">
        <div className="contact-orbit">✳</div>
        <span className="micro-label">GOOD IDEAS START WITH A CONVERSATION</span>
        <h3>Have a project<br/>in <em>mind?</em></h3>
        <p>Whether you have an opportunity, a collaboration in mind or simply want to say hello, my inbox is open.</p>
        <div className="contact-actions">
          <a className="button button-dark" href="mailto:dozielivingstone402@gmail.com"><Mail size={17}/> Email me <ArrowUpRight size={16}/></a>
          <a className="button button-outline" href="https://wa.me/2347061931502" target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp <ArrowUpRight size={16}/></a>
        </div>
      </div>
    </section>
  )
}