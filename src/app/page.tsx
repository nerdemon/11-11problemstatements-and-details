import React from 'react';
import { Bot, Code2, Video, Trophy, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Navbar Placeholder */}
      <nav style={{ padding: '1.5rem', background: 'var(--white)', borderBottom: '1px solid #e3ebf5', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--primary-navy)' }}>
            11:11 <span style={{ color: 'var(--secondary-green)' }}>Chronos Genesis</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>Powered by Happilee</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-16 text-center" style={{ background: 'linear-gradient(135deg, var(--bg-light) 0%, #fff 100%)' }}>
        <div className="container">
          <span className="badge">30-Hour Hackathon</span>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', lineHeight: 1.2, marginTop: '1.5rem' }}>
            Build With Neo <br />
            <span style={{ color: 'var(--secondary-green)' }}>The Chronos Genesis</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '1.5rem auto' }}>
            Join the elite 30-hour challenge powered by Happilee. Build integrable solutions, construct AI agentic workflows, and fast-track your career with NeoITO.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button className="btn btn-primary">
              Register Now <ArrowRight size={20} />
            </button>
            <button className="btn btn-outline">
              View Guidelines
            </button>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="pt-16 pb-16 section-alt">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Hackathon Tracks</h2>
            <p>Choose your path in the Main Product Building Track.</p>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="card">
              <div style={{ display: 'inline-flex', padding: '1rem', background: '#e8f4eb', borderRadius: '12px', color: 'var(--secondary-green)', marginBottom: '1rem' }}>
                <Code2 size={32} />
              </div>
              <h3>Theme 1: Happilee Integrations</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Build integrations, extensions, or custom features using Happilee&apos;s WhatsApp automation APIs to solve business communication challenges.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--secondary-green)" /> Ecosystem Compatibility</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--secondary-green)" /> Architectural Scalability</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--secondary-green)" /> Real-World Utility</li>
              </ul>
            </div>

            <div className="card">
              <div style={{ display: 'inline-flex', padding: '1rem', background: '#e6f0ff', borderRadius: '12px', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                <Bot size={32} />
              </div>
              <h3>Theme 2: AI Agentic Solutions</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Build autonomous AI systems that identify real-world friction and act with minimal human intervention.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                 <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--primary-navy)" /> Implementation of Agentic AI</li>
                 <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--primary-navy)" /> Autonomy & Usability</li>
                 <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--primary-navy)" /> Real-World Impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Track */}
      <section className="pt-16 pb-16 section-dark">
         <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2>Mandatory Content Track</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', opacity: 0.9 }}>
                Discovery isn&apos;t just about code. Every team must submit a 1-2 min video explaining the core problem and solution. 
              </p>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Submission Guidelines</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.9 }}>
                  <li>• Platforms: Twitter, Instagram, LinkedIn</li>
                  <li>• Hashtag: <strong>#BuildWithNeo</strong></li>
                  <li>• Focus: The &quot;Why&quot; and the &quot;How&quot; of your solution</li>
                  <li>• Optional: Pitch in a BTS/Journey video for extra awards</li>
                </ul>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
               <Video size={160} style={{ opacity: 0.5 }} />
            </div>
         </div>
      </section>

      {/* Prizes Section */}
      <section className="pt-16 pb-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Prize Distribution</h2>
            <p className="badge" style={{ fontSize: '1.125rem' }}>Total Budget: ₹60,000</p>
          </div>
          
          <div className="grid grid-cols-3">
             <div className="card text-center" style={{ borderTop: '4px solid #gold' }}>
               <Trophy size={40} color="#ffd700" style={{ margin: '0 auto 1rem' }} />
               <h3 style={{ margin: 0 }}>1st Place</h3>
               <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-navy)' }}>₹15,000</div>
             </div>
             <div className="card text-center" style={{ borderTop: '4px solid #silver' }}>
               <Trophy size={40} color="#C0C0C0" style={{ margin: '0 auto 1rem' }} />
               <h3 style={{ margin: 0 }}>2nd Place</h3>
               <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-navy)' }}>₹10,000</div>
             </div>
             <div className="card text-center" style={{ borderTop: '4px solid #cd7f32' }}>
               <Trophy size={40} color="#cd7f32" style={{ margin: '0 auto 1rem' }} />
               <h3 style={{ margin: 0 }}>3rd Place</h3>
               <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-navy)' }}>₹5,000</div>
             </div>
          </div>
          
          <div className="text-center mt-8">
            <p style={{ color: 'var(--text-muted)' }}>Additional ₹30,000 allocated for Content Track Awards & Swag</p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="pt-16 pb-16 section-alt">
        <div className="container text-center">
          <div style={{ display: 'inline-flex', padding: '1rem', background: '#e6f0ff', borderRadius: '50%', color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>
            <Briefcase size={40} />
          </div>
          <h2>Internship & Career Pathway</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem', color: 'var(--text-muted)' }}>
            One of the most valuable outcomes of this hackathon is the structured pathway towards professional growth. Winners gain priority hiring consideration at NeoITO, and participants are offered a 2-month intensive industry-level internship program.
          </p>
          <div className="grid grid-cols-2 text-left" style={{ marginTop: '3rem' }}>
            <div className="card" style={{ background: 'var(--bg-light)' }}>
               <h4>Internship Highlights</h4>
               <ul style={{ marginLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                 <li>Real SaaS project experience</li>
                 <li>Mentorship from senior engineers & PMs</li>
                 <li>Exposure to AI, DevOps, & Product Design</li>
                 <li>Shadowing & practical impact workflows</li>
               </ul>
            </div>
            <div className="card" style={{ background: 'var(--bg-light)' }}>
               <h4>Full-Time Offer Potential</h4>
               <ul style={{ marginLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                 <li>Software Development</li>
                 <li>Product Management</li>
                 <li>AI & Machine Learning</li>
                 <li>DevOps & Infrastructure</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--white)', padding: '3rem 0', borderTop: '1px solid #e3ebf5', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ margin: 0 }}>11:11 The Chronos Genesis</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Hosted by NeoITO • Powered by Happilee</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '2rem' }}>&copy; {new Date().getFullYear()} NeoITO Hackathon. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
