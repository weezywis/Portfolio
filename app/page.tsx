const services = [
  { number: '01', title: 'Executive Support', text: 'I help leaders protect their time, stay ahead of priorities, and keep the details moving.' },
  { number: '02', title: 'Project & Operations', text: 'I coordinate people, timelines, tasks, meetings, and follow-ups so work moves from idea to delivery.' },
  { number: '03', title: 'HR & Talent Operations', text: 'I support recruitment, interview coordination, onboarding, employee documentation, and people workflows.' },
  { number: '04', title: 'AI-Powered Workflows', text: 'I use AI and automation to reduce repetitive work, organize information, and make everyday operations easier.' },
]

const caseStudies = [
  { tag: 'EXECUTIVE SUPPORT', title: "Making a founder's week easier to run", result: 'Calendar • meetings • follow-ups', text: "A practical executive support system built around a conflict-checked weekly calendar, meeting coordination, preparation, logistics, and a live follow-up queue so open threads do not get lost." },
  { tag: 'PROJECT MANAGEMENT', title: 'Keeping cross-functional work moving', result: 'Sprint board • timeline • milestones', text: 'A shared project system that gives design, development, and marketing one source of truth, with owners, tags, sprints, dependencies, milestones, and a clear view of what needs attention next.' },
  { tag: 'RECRUITMENT & ONBOARDING', title: 'From application to onboarding', result: '300+ applicants • 50+ interviews • 13 selected', text: 'Coordinated a structured talent pipeline covering applications, screening, interview scheduling, selection, communication, onboarding, and programme tracking.' },
]

const tools = ['Google Workspace', 'Notion', 'Zoho', 'Microsoft 365', 'Google Sheets', 'Make', 'Canva', 'AI Tools']

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="logo" href="#top">WE<span>.</span></a>
        <div className="navlinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="navcta" href="mailto:weezywisno1@gmail.com">Let's talk ↗</a>
      </nav>

      <section id="top" className="hero wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">EXECUTIVE ASSISTANT • HR • PROJECT OPERATIONS</div>
            <h1>I help founders<br /><em>get their time back.</em></h1>
            <p className="hero-copy">I manage the people, projects, systems, and day-to-day details that keep a business moving, so leaders can focus on the work that needs them most.</p>
            <div className="hero-actions"><a className="button dark" href="#work">See my work ↓</a><a className="text-link" href="mailto:weezywisno1@gmail.com">Start a conversation ↗</a></div>
          </div>
          <div className="hero-photo"><img src="/wendy-photo.svg" alt="Wendy Ekong" /><div className="photo-note">Executive & Operations Support<br /><span>Based in Nigeria · Available for remote work</span></div></div>
        </div>
        <div className="proof"><div><strong>5+</strong><span>Years experience</span></div><div><strong>300+</strong><span>Applicants coordinated</span></div><div><strong>50+</strong><span>Interviews coordinated</span></div><div><strong>40–60</strong><span>Creative assets / month</span></div></div>
      </section>

      <section id="services" className="section cream"><div className="wrap">
        <div className="section-head"><div className="eyebrow">WHAT I DO</div><h2>More than admin.<br /><em>I make work move.</em></h2></div>
        <div className="service-grid">{services.map(s => <article className="service" key={s.number}><span>{s.number}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
      </div></section>

      <section id="work" className="section"><div className="wrap">
        <div className="section-head split"><div><div className="eyebrow">SELECTED WORK</div><h2>Proof, not just<br /><em>promises.</em></h2></div><p>These projects show how I structure executive support, project coordination, and recruitment operations using practical systems and clear ownership.</p></div>
        <div className="work-grid">{caseStudies.map((c, i) => <article className="case" key={c.tag}><div className="case-top"><span>0{i + 1}</span><span>{c.tag}</span></div><h3>{c.title}</h3><div className="result">{c.result}</div><p>{c.text}</p><a href="mailto:weezywisno1@gmail.com?subject=Portfolio%20enquiry">Discuss this project ↗</a></article>)}</div>
      </div></section>

      <section className="section process-section"><div className="wrap">
        <div className="section-head split"><div><div className="eyebrow">HOW I WORK</div><h2>Simple systems.<br /><em>Clear ownership.</em></h2></div><p>I do not just wait for instructions. I look at what is moving, what is stuck, what is missing, and what needs to happen next.</p></div>
        <div className="process-grid"><article><span>01</span><h3>Understand</h3><p>Get clear on priorities, people, deadlines, expectations, and the executive's working style.</p></article><article><span>02</span><h3>Organize</h3><p>Turn scattered information into calendars, trackers, boards, checklists, and simple workflows.</p></article><article><span>03</span><h3>Coordinate</h3><p>Keep people informed, follow up on open items, surface blockers, and protect important time.</p></article><article><span>04</span><h3>Improve</h3><p>Use AI, automation, and better documentation to reduce repeat work and make the next cycle easier.</p></article></div>
      </div></section>

      <section id="about" className="section dark-section"><div className="wrap about-grid"><div><div className="eyebrow light">A LITTLE ABOUT ME</div><h2>The calm behind<br /><em>the moving parts.</em></h2></div><div className="about-copy"><p>I work at the intersection of executive support, HR, project management, and operations. I enjoy taking a messy list of priorities and turning it into something people can actually work with.</p><p>My strength is not just getting tasks done. It is seeing what needs to happen next, keeping people aligned, and building simple systems that make the next round easier.</p><div className="pill-row">{tools.map(tool => <span key={tool}>{tool}</span>)}</div></div></div></section>

      <section className="section credentials"><div className="wrap credentials-grid"><div><div className="eyebrow">WHAT YOU GET</div><h2>One person who can<br /><em>connect the dots.</em></h2></div><div className="credential-list"><div><strong>Executive support</strong><span>Calendar, meetings, follow-ups, preparation and daily priorities.</span></div><div><strong>Project coordination</strong><span>Boards, timelines, owners, check-ins, dependencies and delivery tracking.</span></div><div><strong>People operations</strong><span>Recruitment, interviews, onboarding, documentation and employee workflows.</span></div><div><strong>AI + automation</strong><span>Practical ways to reduce repetitive work and keep information organized.</span></div></div></div></section>

      <section id="contact" className="contact wrap"><div className="eyebrow">READY WHEN YOU ARE</div><h2>Let's make your<br /><em>work lighter.</em></h2><p>If you need someone who can support the executive, coordinate the team, and keep the work moving, I would love to hear from you.</p><a className="button dark" href="mailto:weezywisno1@gmail.com">Email Wendy ↗</a></section>

      <footer className="footer wrap"><span>© 2026 Wendy Ekong</span><div><a href="https://www.linkedin.com/in/wendy-ekong-0a770173">LinkedIn</a><a href="mailto:weezywisno1@gmail.com">Email</a></div></footer>
    </main>
  )
}
