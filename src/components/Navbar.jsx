import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['About', '#about'],
  ['Selected work', '#work'],
  ['Approach', '#approach'],
  ['Contact', '#contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Raphael home">RL<span>.</span></a>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={20}/> : <Menu size={20}/>}
      </button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="mailto:dozielivingstone402@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>
  )
}