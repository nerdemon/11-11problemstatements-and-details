import React from 'react';
import { Bot, Code2, Video, Trophy, Slash, Monitor } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Navbar exactly like the image */}
      <nav>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-main)', letterSpacing: '4px' }}>
            11 <span className="text-neon">:</span> 11
          </div>
          <div className="nav-links" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
             {/* Hidden on tight displays, but representing the image center links */}
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
             <a href="#home">Home</a>
             <a href="#tracks">Tracks</a>
             <a href="#timeline">Timeline</a>
             <a href="#sponsors">Sponsors</a>
             <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section matching the screenshot closely */}
      <section className="pt-16 pb-16 text-center" id="home" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="container">
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ margin: 0, color: 'var(--white)', fontSize: '2rem', textShadow: 'none', letterSpacing: '8px' }}>
              NEO<Monitor style={{ display: 'inline', color: '#b92b27', margin: '0 4px', width: '28px' }} />ITO
            </h3>
            <p style={{ color: 'var(--neon-green)', letterSpacing: '4px', fontSize: '0.75rem', marginTop: '0.25rem' }}>PRESENTS</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
            <div className="time-block">1</div>
            <div className="time-block">1</div>
            <div className="time-separator">
              <span style={{ width: 8, height: 8, background: 'var(--neon-green)', borderRadius: '50%' }}></span>
              <span style={{ width: 8, height: 8, background: 'var(--neon-green)', borderRadius: '50%' }}></span>
            </div>
            <div className="time-block">1</div>
            <div className="time-block">1</div>
          </div>

          <h2 style={{ fontSize: '1.5rem', letterSpacing: '8px', marginBottom: '1.5rem' }}>
            A 30-HOUR HACKATHON
          </h2>
          <h2 style={{ fontSize: '1.5rem', letterSpacing: '8px', color: 'var(--text-main)', textShadow: 'none', marginBottom: '4rem' }}>
            APRIL 11,12
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--neon-green)', fontSize: '0.875rem', letterSpacing: '2px' }}>
              POWERED BY 
              <span style={{ color: 'var(--white)', fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'lowercase' }}>
                <span style={{ background: '#61dafb', color: '#000', padding: '2px 8px', borderRadius: '4px' }}>h</span> happilee
              </span>
              <Slash size={16} />
              <div style={{ width: '24px', height: '24px', border: '2px solid #b92b27', borderRadius: '50%', position: 'relative' }}>
                <div style={{ position: 'absolute', width: '100%', height: '2px', background: '#b92b27', top: '50%', transform: 'rotate(45deg)' }}></div>
              </div>
            </div>

            <div className="partner-pill">
               <span style={{ color: 'var(--white)', fontWeight: 'bold' }}>CSI SCT SB</span>
               <span style={{ color: 'var(--border-color)' }}>x</span>
               <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>CSI TVM Chapter</span>
            </div>

            <div style={{ color: 'var(--white)', opacity: 0.8, fontSize: '0.75rem', letterSpacing: '1px', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '0.5rem 3rem' }}>
               SREE CHITRA THIRUNAL COLLEGE OF ENGINEERING
            </div>

          </div>

          <div style={{ marginTop: '2rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', letterSpacing: '2px' }}>
               REGISTRATION DEADLINE: APRIL 7, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Tracks Section (Cyberpunk restyled) */}
      <section className="pt-16 pb-16" id="tracks" style={{ borderTop: '1px dashed var(--border-color)', background: 'rgba(0,0,0,0.4)' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ fontSize: '2.5rem' }}>{`// SYSTEM_TRACKS`}</h2>
            <p style={{ color: 'var(--text-muted)' }}>Initialize your sequence in one of the approved modules.</p>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="card">
              <div style={{ color: 'var(--neon-green)', marginBottom: '1rem' }}>
                <Code2 size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>THEME_01: HAPPILEE INTEGRATIONS</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
                Construct extensions, analytics modules, and workflow enhancements using Happilee&apos;s WhatsApp automation APIs to solve business communication challenges.
              </p>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>[+] Ecosystem Compatibility</div>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>[+] Architectural Scalability</div>
                <div>[+] Real-World Utility & Adoption Potential</div>
              </div>
            </div>

            <div className="card">
              <div style={{ color: 'var(--neon-green)', marginBottom: '1rem' }}>
                <Bot size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>THEME_02: AI AGENTIC SOLUTIONS</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
                Deploy autonomous AI systems that identify real-world friction and execute decisions with minimal human intervention.
              </p>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                 <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>[+] Implementation of Agentic AI Paradigms</div>
                 <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>[+] Autonomy & Usability</div>
                 <div>[+] Real-World Impact Scoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Track */}
      <section className="pt-16 pb-16">
         <div className="container" style={{ border: '1px solid var(--border-color)', padding: '3rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '2rem', background: 'var(--bg-deep)', padding: '0 10px', color: 'var(--neon-green)' }}>MANDATORY_CONTENT_TRACK</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 500px' }}>
                <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif', color: 'var(--text-muted)' }}>
                  Discovery isn&apos;t just about code. Every team must deploy a 1-2 min video transmission explaining the core problem and solution. 
                </p>
                <div style={{ fontFamily: 'Inter, sans-serif', color: 'var(--white)' }}>
                  <p style={{ color: 'var(--neon-green)', marginBottom: '0.5rem', fontFamily: 'Share Tech Mono, monospace' }}>{'>'} SUBMISSION_PROTOCOLS</p>
                  <ul style={{ listStyle: 'none', gap: '0.5rem', opacity: 0.8, marginLeft: '1rem' }}>
                    <li><span className="text-neon">PLATFORMS:</span> Twitter, Instagram, LinkedIn</li>
                    <li><span className="text-neon">IDENTIFIER:</span> #BuildWithNeo</li>
                    <li><span className="text-neon">REQUIRED:</span> The &quot;Why&quot; and the &quot;How&quot;</li>
                    <li><span className="text-neon">OPTIONAL:</span> BTS/Journey video for extra rank</li>
                  </ul>
                </div>
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', opacity: 0.2 }}>
                 <Video size={160} color="var(--neon-green)" />
              </div>
            </div>
         </div>
      </section>

      {/* Prizes Section - Fixed Distribution details */}
      <section className="pt-16 pb-16" style={{ background: 'rgba(0, 255, 102, 0.02)' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ fontSize: '2.5rem' }}>{`// REWARD_ALLOCATION`}</h2>
            <p style={{ color: 'var(--text-muted)' }}>TOTAL ASSET POOL: 30000</p>
          </div>
          
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--white)' }}>&gt; MAIN TRACK AWARDS</h3>
          <div className="grid grid-cols-3" style={{ marginBottom: '4rem' }}>
             <div className="card text-center" style={{ borderTop: '2px solid #ffd700' }}>
               <Trophy size={40} color="#ffd700" style={{ margin: '0 auto 1rem' }} />
               <h3 style={{ margin: 0, color: '#ffd700' }}>1ST RANK</h3>
               <div style={{ fontSize: '2.5rem', color: 'var(--white)' }}>₹15,000</div>
             </div>
             <div className="card text-center" style={{ borderTop: '2px solid #C0C0C0' }}>
               <Trophy size={40} color="#C0C0C0" style={{ margin: '0 auto 1rem' }} />
               <h3 style={{ margin: 0, color: '#C0C0C0' }}>2ND RANK</h3>
               <div style={{ fontSize: '2.5rem', color: 'var(--white)' }}>₹10,000</div>
             </div>
             <div className="card text-center" style={{ borderTop: '2px solid #cd7f32' }}>
               <Trophy size={40} color="#cd7f32" style={{ margin: '0 auto 1rem' }} />
               <h3 style={{ margin: 0, color: '#cd7f32' }}>3RD RANK</h3>
               <div style={{ fontSize: '2.5rem', color: 'var(--white)' }}>₹5,000</div>
             </div>
          </div>
          
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--white)' }}>&gt; CONTENT TRACK AWARDS</h3>
          <div className="grid grid-cols-2">
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ color: 'var(--neon-green)' }}>Best Problem-Solution Video</div>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ color: 'var(--neon-green)' }}>Best BTS / Build Journey Video</div>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ color: 'var(--neon-green)' }}>Most Creative / Entertaining Content</div>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ color: 'var(--neon-green)' }}>Highest Engagement Post</div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="pt-16 pb-16">
        <div className="container">
          <div className="card" style={{ borderLeft: '4px solid var(--neon-green)' }}>
            <h2 style={{ marginBottom: '1rem' }}>{`// PROGRESSION_PATHWAY`}</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px' }}>
              Outstanding execution results in direct career integration. Winners secure priority hiring evaluation at NeoITO. Remaining top performers will be offered a 2-month intense industry internship.
            </p>
            <div className="grid grid-cols-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
              <div>
                 <h4 style={{ color: 'var(--white)', fontFamily: 'Share Tech Mono, monospace' }}>&gt; FULL-TIME MODULES</h4>
                 <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                   <li>[+] Software Engineering</li>
                   <li>[+] Product Management</li>
                   <li>[+] AI & Machine Learning</li>
                   <li>[+] DevOps Infrastructure</li>
                 </ul>
              </div>
              <div>
                 <h4 style={{ color: 'var(--white)', fontFamily: 'Share Tech Mono, monospace' }}>&gt; INTERNSHIP BENEFITS</h4>
                 <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                   <li>[+] Real SaaS Production</li>
                   <li>[+] Senior Mentorship Array</li>
                   <li>[+] Performance Upgrades</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--bg-panel)', padding: '3rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ margin: 0, letterSpacing: '4px' }}>11:11 CHRONOS GENESIS</h3>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', marginTop: '1rem' }}>
            SYSTEM END. ALL RIGHTS EXCLUSIVE. {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
