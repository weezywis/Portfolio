const services = [
  { number: '01', title: 'Executive Support', text: 'I help leaders protect their time, stay ahead of priorities, and keep the details moving.' },
  { number: '02', title: 'Project & Operations', text: 'I coordinate people, timelines, tasks, and follow-ups so work moves from idea to delivery.' },
  { number: '03', title: 'HR & People Operations', text: 'I support hiring, onboarding, employee records, policies, and the systems behind a growing team.' },
  { number: '04', title: 'AI-Powered Workflows', text: 'I use AI and automation to reduce repetitive work, organize information, and improve team workflows.' },
]

const caseStudies = [
  { tag: 'TALENT OPERATIONS', title: 'From 300+ applicants to a coordinated talent programme', result: '300+ applicants • 50+ interviews • 13 selected', text: 'Built and coordinated the application, screening, interview, selection, onboarding, communication, and programme tracking process for a structured talent development programme.' },
  { tag: 'CONTENT OPERATIONS', title: 'Keeping multiple creative teams moving', result: '40–60 assets/month across 4 brands', text: 'Coordinated designers, writers, videographers, editors, and social media teams using clear trackers, deadlines, naming systems, and regular check-ins.' },
  { tag: 'HR SYSTEMS', title: 'Turning people operations into a system', result: 'Hiring • onboarding • attendance • documentation', text: 'Created practical HR workflows and documentation that make employee processes easier to track, repeat, and improve as teams grow.' },
]

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="logo" href="#top">WE<span>.</span></a>
        <div className="navlinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="navcta" href="mailto:weezywisno1@gmail.com">Let's talk ↗</a>
      </nav>

      <section id="top" className="hero wrap">
        <div className="eyebrow">EXECUTIVE ASSISTANT • HR • PROJECT OPERATIONS</div>
        <h1>I help founders<br /><em>get their time back.</em></h1>
        <p className="hero-copy">I manage the people, projects, systems, and day-to-day details that keep a business moving, so leaders can focus on the work that needs them most.</p>
        <div className="hero-actions"><a className="button dark" href="#work">See my work ↓</a><a className="text-link" href="mailto:weezywisno1@gmail.com">Start a conversation ↗</a></div>
        <div className="proof"><div><strong>5+</strong><span>Years experience</span></div><div><strong>300+</strong><span>Applicants coordinated</span></div><div><strong>40–60</strong><span>Creative assets / month</span></div><div><strong>4</strong><span>Brands coordinated</span></div></div>
      </section>

      <section id="services" className="section cream"><div className="wrap">
        <div className="section-head"><div className="eyebrow">WHAT I DO</div><h2>More than admin.<br /><em>I make work move.</em></h2></div>
        <div className="service-grid">{services.map(s => <article className="service" key={s.number}><span>{s.number}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
      </div></section>

      <section id="work" className="section"><div className="wrap">
        <div className="section-head split"><div><div className="eyebrow">SELECTED WORK</div><h2>Proof, not just<br /><em>promises.</em></h2></div><p>Here are a few examples of the systems, projects, and operations I have helped coordinate.</p></div>
        <div className="work-grid">{caseStudies.map((c, i) => <article className="case" key={c.tag}><div className="case-top"><span>0{i + 1}</span><span>{c.tag}</span></div><h3>{c.title}</h3><div className="result">{c.result}</div><p>{c.text}</p><a href="mailto:weezywisno1@gmail.com?subject=Portfolio%20enquiry">Discuss this project ↗</a></article>)}</div>
      </div></section>

      <section id="about" className="section dark-section"><div className="wrap about-grid"><div><div className="eyebrow light">A LITTLE ABOUT ME</div><h2>The calm behind<br /><em>the moving parts.</em></h2></div><div className="about-copy"><p>I work at the intersection of executive support, HR, project management, and operations. I like taking a messy list of priorities and turning it into something people can actually work with.</p><p>My strength is not just getting tasks done. It is seeing what needs to happen next, keeping people aligned, and building simple systems that make the next round easier.</p><div className="pill-row"><span>Google Workspace</span><span>Notion</span><span>Zoho</span><span>Canva</span><span>Make</span><span>AI Tools</span></div></div></div></section>

      <section id="contact" className="contact wrap"><div className="eyebrow">READY WHEN YOU ARE</div><h2>Let's make your<br /><em>work lighter.</em></h2><p>If you need someone who can support the executive, coordinate the team, and keep the work moving, I would love to hear from you.</p><a className="button dark" href="mailto:weezywisno1@gmail.com">Email Wendy ↗</a></section>

      <footer className="footer wrap"><span>© 2026 Wendy Ekong</span><div><a href="https://www.linkedin.com/in/wendy-ekong-0a770173">LinkedIn</a><a href="mailto:weezywisno1@gmail.com">Email</a></div></footer>
    </main>
  )
}
