import { useState, useEffect } from "react";
// ─── Photo is in your public folder ──────────────────────────
// Place your photo at:  public/assets/portfolio image.png
const profilePhoto = process.env.PUBLIC_URL + "/assets/profile.png";

// ============================================================
// DATA - Edit your personal info here
// ============================================================

const MY_NAME = "Somabrata Sahoo";
const MY_TITLE = "Flutter Developer";
const MY_EMAIL = "somabrata@email.com";
const MY_GITHUB = "https://github.com/somabrata";
const MY_LINKEDIN = "https://linkedin.com/in/somabrata-sahoo";

const SKILLS = [
  { name: "Flutter",        level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Dart",           level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  { name: "Android",        level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
  { name: "Firebase",       level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "REST APIs",      level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Git",            level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub",         level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Postman",        level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Android Studio", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
  { name: "VS Code",        level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
];

const PROJECTS = [
  {
    title: "ShopWave – E-Commerce App",
    desc: "A full-featured shopping app with cart, order tracking, and Stripe payments.",
    tech: ["Flutter", "Firebase", "Stripe"],
    icon: "🛍️",
    color: "#22d3ee",
    github: "#",
    demo: "#",
  },
  {
    title: "ChatSphere – Messaging App",
    desc: "Real-time chat with end-to-end encryption, media sharing, and push notifications.",
    tech: ["Flutter", "Firebase", "WebSockets"],
    icon: "💬",
    color: "#a78bfa",
    github: "#",
    demo: "#",
  },
  {
    title: "SkyPulse – Weather App",
    desc: "Animated weather forecasting app with location-based updates and 7-day forecast.",
    tech: ["Flutter", "REST API", "Geolocator"],
    icon: "🌤️",
    color: "#38bdf8",
    github: "#",
    demo: "#",
  },
  {
    title: "CoinTrack – Expense Tracker",
    desc: "Personal finance tracker with budget goals, analytics, and CSV export.",
    tech: ["Flutter", "Hive DB", "Charts"],
    icon: "💰",
    color: "#34d399",
    github: "#",
    demo: "#",
  },
  {
    title: "NewsFlow – News Aggregator",
    desc: "Curated news reader with topic filtering and offline reading mode.",
    tech: ["Flutter", "NewsAPI", "SQLite"],
    icon: "📰",
    color: "#fb923c",
    github: "#",
    demo: "#",
  },
];

const TIMELINE = [
  { year: "2024", title: "Started Coding", desc: "Discovered programming and fell in love with building things.", icon: "🚀" },
  { year: "2025", title: "Learned Flutter", desc: "Mastered Flutter & Dart. Built 10+ apps with Firebase integration.", icon: "🦋" },
  { year: "2026", title: "Production Developer", desc: "Building scalable, polished mobile apps for real-world users.", icon: "⚡" },
];

// ============================================================
// MAIN APP - Everything is in this one file
// ============================================================

export default function App() {
  return (
    <div style={{ background: "#05050f", color: "white", fontFamily: "sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'DM Sans', sans-serif; }
        html { scroll-behavior: smooth; }
        h1, h2, h3 { font-family: 'Rajdhani', sans-serif; }
        ::-webkit-scrollbar { width: 6px; background: #05050f; }
        ::-webkit-scrollbar-thumb { background: #22d3ee55; border-radius: 4px; }
        a { text-decoration: none; color: inherit; }
      `}</style>
    </div>
  );
}

// ============================================================
// NAVBAR
// ============================================================

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  // Change navbar style when user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll to a section
  function goTo(id) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const links = ["home", "about", "skills", "projects", "experience", "contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(5,5,15,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(34,211,238,0.15)" : "none",
      transition: "all 0.4s",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <button onClick={() => goTo("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#22d3ee,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: "white" }}>
            SS
          </div>
          <span style={{ color: "white", fontWeight: 700, fontSize: 18 }}>
            Soma<span style={{ color: "#22d3ee" }}>Dev</span>
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
          {links.map(link => (
            <button key={link} onClick={() => goTo(link)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.65)", padding: "8px 14px",
              borderRadius: 8, fontSize: 14, fontWeight: 500,
              textTransform: "capitalize", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.target.style.color = "#22d3ee"; e.target.style.background = "rgba(34,211,238,0.08)"; }}
            onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,0.65)"; e.target.style.background = "none"; }}>
              {link}
            </button>
          ))}
          <button onClick={() => goTo("contact")} style={{
            marginLeft: 8, padding: "8px 20px", borderRadius: 10,
            background: "linear-gradient(135deg,#22d3ee,#6366f1)",
            color: "white", fontWeight: 700, fontSize: 14,
            border: "none", cursor: "pointer",
          }}>
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5 }}
          className="hamburger"
        >
          <span style={{ display: "block", width: 24, height: 2, background: "#22d3ee", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#22d3ee", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#22d3ee", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(5,5,15,0.98)", padding: "12px 24px 20px", borderBottom: "1px solid rgba(34,211,238,0.1)" }}>
          {links.map(link => (
            <button key={link} onClick={() => goTo(link)} style={{
              display: "block", width: "100%", textAlign: "left",
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.75)", padding: "12px 16px",
              borderRadius: 10, fontSize: 15, fontWeight: 500,
              textTransform: "capitalize",
            }}>
              {link}
            </button>
          ))}
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

// ============================================================
// HERO SECTION  — full-width, centred, text only
// ============================================================

function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", position: "relative",
      overflow: "hidden", background: "#05050f",
    }}>

      {/* ── subtle grid bg ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(34,211,238,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.035) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* ── glow orbs ── */}
      <div style={{ position:"absolute", top:"10%", left:"5%",  width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,#22d3ee,transparent 70%)", filter:"blur(100px)", opacity:0.09, pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", right:"5%", width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle,#6366f1,transparent 70%)", filter:"blur(100px)", opacity:0.09, pointerEvents:"none" }} />

      {/* ── centred content ── */}
      <div style={{ position:"relative", zIndex:1, maxWidth:780, margin:"0 auto", padding:"120px 24px 80px", textAlign:"center" }}>

        {/* Available badge */}
        <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"7px 18px", borderRadius:99, border:"1px solid rgba(34,211,238,0.3)", color:"#22d3ee", fontSize:12, fontWeight:700, marginBottom:32, background:"rgba(34,211,238,0.06)", letterSpacing:"0.05em" }}>
          <span style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", display:"inline-block", animation:"heroPulse 2s infinite" }} />
          Available for freelance &amp; full-time
        </div>

        {/* Greeting line */}
        <p style={{ color:"rgba(255,255,255,0.45)", fontSize:18, fontWeight:500, marginBottom:12, letterSpacing:"0.02em" }}>
          Hi there, I'm
        </p>

        {/* Big name */}
        <h1 style={{ fontSize:"clamp(3.2rem,8vw,6.5rem)", fontWeight:900, lineHeight:0.95, color:"white", marginBottom:20 }}>
          {MY_NAME.split(" ")[0]}&nbsp;
          <span style={{ background:"linear-gradient(135deg,#22d3ee,#6366f1)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            {MY_NAME.split(" ")[1]}
          </span>
        </h1>

        {/* Divider + title */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:28 }}>
          <div style={{ height:1, width:48, background:"linear-gradient(to right,transparent,#22d3ee)" }} />
          <span style={{ color:"#22d3ee", fontSize:13, fontWeight:800, letterSpacing:"0.22em", textTransform:"uppercase" }}>{MY_TITLE}</span>
          <div style={{ height:1, width:48, background:"linear-gradient(to left,transparent,#22d3ee)" }} />
        </div>

        {/* Short bio */}
        <p style={{ color:"rgba(255,255,255,0.58)", fontSize:18, lineHeight:1.85, maxWidth:600, margin:"0 auto 40px" }}>
          I craft beautiful, high-performance mobile experiences with Flutter —
          from pixel-perfect UI to robust backend integration. I build apps
          that users love and businesses trust.
        </p>

        {/* CTA buttons */}
        <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap", marginBottom:64 }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior:"smooth" })}
            style={{ padding:"15px 32px", borderRadius:14, background:"linear-gradient(135deg,#22d3ee,#6366f1)", color:"white", fontWeight:800, fontSize:15, border:"none", cursor:"pointer", boxShadow:"0 0 30px rgba(34,211,238,0.3)", transition:"all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 0 50px rgba(34,211,238,0.55)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 0 30px rgba(34,211,238,0.3)"; }}>
            View Projects →
          </button>
          <button
            style={{ padding:"15px 32px", borderRadius:14, background:"transparent", color:"#22d3ee", fontWeight:800, fontSize:15, border:"1px solid rgba(34,211,238,0.4)", cursor:"pointer", transition:"all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.background="rgba(34,211,238,0.08)"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.transform="translateY(0)"; }}>
            ↓ Download Resume
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display:"flex", justifyContent:"center", gap:0 }}>
          {[["10+","Apps Built"],["2+","Years Learning"],["5k+","GitHub Commits"]].map(([num, label], i) => (
            <div key={label} style={{
              flex:1, maxWidth:160, padding:"20px 0",
              borderLeft: i === 0 ? "1px solid rgba(34,211,238,0.15)" : "none",
              borderRight:"1px solid rgba(34,211,238,0.15)",
              borderTop:"1px solid rgba(34,211,238,0.15)",
              borderBottom:"1px solid rgba(34,211,238,0.15)",
              background:"rgba(34,211,238,0.03)",
            }}>
              <div style={{ fontSize:28, fontWeight:900, color:"#22d3ee", fontFamily:"'Rajdhani',sans-serif" }}>{num}</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)", marginTop:4, letterSpacing:"0.05em" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Social quick links */}
        <div style={{ display:"flex", justifyContent:"center", gap:12, marginTop:32 }}>
          {[
            { label:"GitHub",   href: MY_GITHUB,   icon:"🐙" },
            { label:"LinkedIn", href: MY_LINKEDIN,  icon:"💼" },
            { label:"Email",    href:`mailto:${MY_EMAIL}`, icon:"📧" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 16px", borderRadius:10, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(34,211,238,0.12)", color:"rgba(255,255,255,0.6)", fontSize:13, fontWeight:600, transition:"all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.border="1px solid rgba(34,211,238,0.4)"; e.currentTarget.style.color="white"; e.currentTarget.style.background="rgba(34,211,238,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.border="1px solid rgba(34,211,238,0.12)"; e.currentTarget.style.color="rgba(255,255,255,0.6)"; e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}>
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
        <span style={{ color:"rgba(255,255,255,0.25)", fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase" }}>Scroll</span>
        <div style={{ width:1, height:40, background:"linear-gradient(to bottom, #22d3ee, transparent)", animation:"scrollFade 2s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
        @keyframes scrollFade { 0%,100%{opacity:0.2;} 50%{opacity:0.9;} }
      `}</style>
    </section>
  );
}

// ============================================================
// ABOUT SECTION  — photo left, bio + detail right
// ============================================================

function About() {
  return (
    <section id="about" style={{ padding:"100px 24px", background:"#07070f" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>

        <SectionTag text="About Me" />

        <div style={{ display:"grid", gridTemplateColumns:"420px 1fr", gap:72, marginTop:52, alignItems:"start" }} className="about-grid">

          {/* ── LEFT: photo ───────────────────────────────── */}
          <div style={{ position:"relative" }}>

            {/* Decorative corner accent top-left */}
            <div style={{ position:"absolute", top:-16, left:-16, width:80, height:80, borderTop:"2px solid #22d3ee", borderLeft:"2px solid #22d3ee", borderRadius:"4px 0 0 0", zIndex:2 }} />
            {/* Decorative corner accent bottom-right */}
            <div style={{ position:"absolute", bottom:-16, right:-16, width:80, height:80, borderBottom:"2px solid #6366f1", borderRight:"2px solid #6366f1", borderRadius:"0 0 4px 0", zIndex:2 }} />

            {/* Glow behind photo */}
            <div style={{ position:"absolute", inset:0, borderRadius:20, background:"linear-gradient(135deg,rgba(34,211,238,0.2),rgba(99,102,241,0.2))", filter:"blur(30px)", opacity:0.6, zIndex:0 }} />

            {/* The photo */}
            <div style={{ position:"relative", zIndex:1, borderRadius:20, overflow:"hidden", border:"1px solid rgba(34,211,238,0.25)", boxShadow:"0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(34,211,238,0.12)" }}>
              <img
                src={profilePhoto}
                alt={MY_NAME}
                style={{ width:"100%", aspectRatio:"4/5", objectFit:"cover", display:"block" }}
              />
              {/* Name plate overlay at bottom */}
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"28px 24px 24px", background:"linear-gradient(to top, rgba(5,5,15,0.95) 0%, transparent 100%)" }}>
                <div style={{ fontWeight:900, fontSize:22, color:"white", fontFamily:"'Rajdhani',sans-serif" }}>{MY_NAME}</div>
                <div style={{ color:"#22d3ee", fontSize:12, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginTop:3 }}>{MY_TITLE}</div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div style={{ position:"absolute", top:24, right:-20, zIndex:3, padding:"12px 16px", borderRadius:14, background:"rgba(5,5,15,0.9)", border:"1px solid rgba(34,211,238,0.3)", backdropFilter:"blur(12px)", textAlign:"center", boxShadow:"0 8px 32px rgba(0,0,0,0.4)" }}>
              <div style={{ fontSize:22, fontWeight:900, color:"#22d3ee", fontFamily:"'Rajdhani',sans-serif", lineHeight:1 }}>2+</div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,0.5)", fontWeight:600, letterSpacing:"0.08em", marginTop:3 }}>Yrs Experience</div>
            </div>

            {/* Floating apps badge */}
            <div style={{ position:"absolute", bottom:80, left:-20, zIndex:3, padding:"12px 16px", borderRadius:14, background:"rgba(5,5,15,0.9)", border:"1px solid rgba(99,102,241,0.35)", backdropFilter:"blur(12px)", textAlign:"center", boxShadow:"0 8px 32px rgba(0,0,0,0.4)" }}>
              <div style={{ fontSize:22, fontWeight:900, color:"#a78bfa", fontFamily:"'Rajdhani',sans-serif", lineHeight:1 }}>10+</div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,0.5)", fontWeight:600, letterSpacing:"0.08em", marginTop:3 }}>Apps Built</div>
            </div>
          </div>

          {/* ── RIGHT: bio + details ──────────────────────── */}
          <div style={{ paddingTop:8 }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.7rem)", color:"white", marginBottom:6, lineHeight:1.2 }}>
              Passionate about
            </h2>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.7rem)", marginBottom:28, lineHeight:1.2, background:"linear-gradient(135deg,#22d3ee,#6366f1)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              building great apps
            </h2>

            {/* Bio paragraphs */}
            <div style={{ color:"rgba(255,255,255,0.65)", fontSize:16, lineHeight:1.9, marginBottom:36 }}>
              <p style={{ marginBottom:16 }}>
                Hi! I'm <strong style={{ color:"white" }}>Somabrata Sahoo</strong>, a self-taught Flutter developer from Odisha, India, with a deep passion for crafting intuitive, high-performance mobile applications. My journey started in 2024 when I decided to turn my curiosity for technology into a real skill.
              </p>
              <p style={{ marginBottom:16 }}>
                Within a year, I immersed myself in the Flutter ecosystem — mastering Dart, state management (Provider &amp; BLoC), Firebase, and REST API integration. I love translating complex user needs into clean, elegant code.
              </p>
              <p>
                My focus is on scalable, maintainable architecture — writing code that not only works today, but can grow with a product over time.
              </p>
            </div>

            {/* Personal detail rows */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px 24px", marginBottom:36 }}>
              {[
                ["📍","Location",   "Odisha, India"],
                ["🎓","Education",  "Self-Taught Developer"],
                ["📱","Speciality", "Flutter & Mobile Apps"],
                ["🌐","Languages",  "Dart, English, Odia, Hindi"],
              ].map(([icon, key, val]) => (
                <div key={key} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 0", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize:16 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize:10, color:"rgba(255,255,255,0.35)", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>{key}</div>
                    <div style={{ fontSize:14, color:"rgba(255,255,255,0.8)", fontWeight:600, marginTop:1 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trait pills */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:36 }}>
              {[
                { icon:"🎯", text:"Laser Focused" },
                { icon:"⚡", text:"Fast Learner" },
                { icon:"🏗️", text:"Clean Architecture" },
                { icon:"🌍", text:"Open Source" },
                { icon:"🔥", text:"Passionate Coder" },
                { icon:"📐", text:"Detail-Oriented" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display:"flex", alignItems:"center", gap:7, padding:"8px 14px", borderRadius:99, background:"rgba(34,211,238,0.07)", border:"1px solid rgba(34,211,238,0.18)", fontSize:13, fontWeight:600, color:"rgba(255,255,255,0.8)", transition:"all 0.2s", cursor:"default" }}
                  onMouseEnter={e => { e.currentTarget.style.background="rgba(34,211,238,0.15)"; e.currentTarget.style.color="white"; }}
                  onMouseLeave={e => { e.currentTarget.style.background="rgba(34,211,238,0.07)"; e.currentTarget.style.color="rgba(255,255,255,0.8)"; }}>
                  <span style={{ fontSize:14 }}>{icon}</span> {text}
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}
                style={{ padding:"13px 28px", borderRadius:12, background:"linear-gradient(135deg,#22d3ee,#6366f1)", color:"white", fontWeight:800, fontSize:14, border:"none", cursor:"pointer", boxShadow:"0 0 24px rgba(34,211,238,0.28)", transition:"all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 0 42px rgba(34,211,238,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 0 24px rgba(34,211,238,0.28)"; }}>
                Get In Touch →
              </button>
              <a href={MY_GITHUB} target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"13px 28px", borderRadius:12, background:"transparent", color:"#22d3ee", fontWeight:800, fontSize:14, border:"1px solid rgba(34,211,238,0.35)", transition:"all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(34,211,238,0.08)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.transform="translateY(0)"; }}>
                🐙 GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .about-grid{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// SKILLS SECTION
// ============================================================

function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 24px", background: "#05050f" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <SectionTag text="Skills" />
        <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "white", marginTop: 12, marginBottom: 48 }}>
          My tech <span style={{ background: "linear-gradient(135deg,#22d3ee,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>arsenal</span>
        </h2>

        {/* Skills grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
          {SKILLS.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div style={{ padding: 20, borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(34,211,238,0.1)", textAlign: "center", transition: "all 0.3s", cursor: "default" }}
      onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(34,211,238,0.45)"; e.currentTarget.style.background = "rgba(34,211,238,0.06)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
      onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(34,211,238,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "translateY(0)"; }}>

      {/* Tech icon image */}
      <img src={skill.icon} alt={skill.name} style={{ width: 44, height: 44, objectFit: "contain", marginBottom: 12, filter: skill.name === "GitHub" ? "invert(1)" : "none" }} />

      {/* Name */}
      <div style={{ fontWeight: 600, color: "white", fontSize: 14, marginBottom: 12 }}>{skill.name}</div>

      {/* Progress bar */}
      <div style={{ height: 4, borderRadius: 99, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${skill.level}%`, borderRadius: 99, background: "linear-gradient(90deg,#22d3ee,#6366f1)" }} />
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 6 }}>{skill.level}%</div>
    </div>
  );
}

// ============================================================
// PROJECTS SECTION
// ============================================================

function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px", background: "#07070f" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <SectionTag text="Projects" />
        <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "white", marginTop: 12, marginBottom: 48 }}>
          Things I've <span style={{ background: "linear-gradient(135deg,#22d3ee,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>built</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {PROJECTS.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        borderRadius: 20, overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? project.color + "66" : "rgba(255,255,255,0.07)"}`,
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 30px 60px rgba(0,0,0,0.4)` : "none",
        transition: "all 0.35s",
        display: "flex", flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card top - colored strip with icon */}
      <div style={{ height: 130, display: "flex", alignItems: "center", justifyContent: "center", background: `${project.color}15`, borderBottom: `1px solid ${project.color}22` }}>
        <div style={{ width: 72, height: 72, borderRadius: 18, background: `${project.color}18`, border: `1px solid ${project.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>
          {project.icon}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: "white", fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{project.title}</h3>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.65, flex: 1, marginBottom: 16 }}>{project.desc}</p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
          {project.tech.map(t => (
            <span key={t} style={{ padding: "3px 10px", borderRadius: 8, background: `${project.color}14`, color: project.color, border: `1px solid ${project.color}30`, fontSize: 11, fontWeight: 700 }}>
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          <a href={project.github} style={{ flex: 1, padding: "9px 0", borderRadius: 10, border: `1px solid ${project.color}40`, color: project.color, fontSize: 12, fontWeight: 700, textAlign: "center", transition: "background 0.2s" }}
            onMouseEnter={e => e.target.style.background = `${project.color}10`}
            onMouseLeave={e => e.target.style.background = "transparent"}>
            GitHub →
          </a>
          <a href={project.demo} style={{ flex: 1, padding: "9px 0", borderRadius: 10, background: `linear-gradient(135deg,${project.color},#6366f1)`, color: "white", fontSize: 12, fontWeight: 700, textAlign: "center" }}>
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// EXPERIENCE / TIMELINE SECTION
// ============================================================

function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 24px", background: "#05050f" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>

        <SectionTag text="Experience" />
        <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "white", marginTop: 12, marginBottom: 60 }}>
          My <span style={{ background: "linear-gradient(135deg,#22d3ee,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>journey</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, #22d3ee, #6366f1, transparent)", transform: "translateX(-50%)" }} />

          {TIMELINE.map((item, i) => (
            <div key={item.year} style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40, flexDirection: i % 2 === 0 ? "row" : "row-reverse", textAlign: i % 2 === 0 ? "right" : "left" }}>

              {/* Text card */}
              <div style={{ flex: 1 }}>
                <div style={{ padding: 20, borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(34,211,238,0.12)", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(34,211,238,0.4)"; e.currentTarget.style.background = "rgba(34,211,238,0.04)"; }}
                  onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(34,211,238,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                  <div style={{ color: "#22d3ee", fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>{item.year}</div>
                  <div style={{ color: "white", fontWeight: 800, fontSize: 18, marginBottom: 6, fontFamily: "'Rajdhani', sans-serif" }}>{item.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </div>

              {/* Center icon dot */}
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,rgba(34,211,238,0.18),rgba(99,102,241,0.18))", border: "2px solid rgba(34,211,238,0.45)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, zIndex: 1, boxShadow: "0 0 20px rgba(34,211,238,0.25)" }}>
                {item.icon}
              </div>

              {/* Empty spacer on opposite side */}
              <div style={{ flex: 1 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTACT SECTION
// ============================================================

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSend() {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  }

  const inputStyle = {
    width: "100%", padding: "13px 16px", borderRadius: 12,
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(34,211,238,0.18)",
    color: "white", fontSize: 15, fontFamily: "inherit", outline: "none",
    transition: "border 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#07070f" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <SectionTag text="Contact" />
        <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "white", marginTop: 12, marginBottom: 48 }}>
          Let's work <span style={{ background: "linear-gradient(135deg,#22d3ee,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>together</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="two-col">

          {/* Contact info */}
          <div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Got a project idea or just want to chat about Flutter? I'm always open to new opportunities and conversations.
            </p>

            {[
              { icon: "📧", label: "Email",    value: MY_EMAIL,    href: `mailto:${MY_EMAIL}` },
              { icon: "💼", label: "LinkedIn", value: "in/alexdaniels-dev", href: MY_LINKEDIN },
              { icon: "🐙", label: "GitHub",   value: "github.com/alexdaniels", href: MY_GITHUB },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(34,211,238,0.1)", marginBottom: 12, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(34,211,238,0.4)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(34,211,238,0.1)"; e.currentTarget.style.transform = "translateX(0)"; }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div>
                  <div style={{ color: "#22d3ee", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>{item.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Your Name</label>
              <input type="text" placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
                onFocus={e => e.target.style.border = "1px solid rgba(34,211,238,0.55)"}
                onBlur={e => e.target.style.border = "1px solid rgba(34,211,238,0.18)"} />
            </div>
            <div>
              <label style={{ display: "block", color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Email</label>
              <input type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
                onFocus={e => e.target.style.border = "1px solid rgba(34,211,238,0.55)"}
                onBlur={e => e.target.style.border = "1px solid rgba(34,211,238,0.18)"} />
            </div>
            <div>
              <label style={{ display: "block", color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Message</label>
              <textarea rows={5} placeholder="Tell me about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: "none" }}
                onFocus={e => e.target.style.border = "1px solid rgba(34,211,238,0.55)"}
                onBlur={e => e.target.style.border = "1px solid rgba(34,211,238,0.18)"} />
            </div>
            <button onClick={handleSend} style={{
              padding: "15px", borderRadius: 12, border: "none", cursor: "pointer",
              background: sent ? "linear-gradient(135deg,#10b981,#059669)" : "linear-gradient(135deg,#22d3ee,#6366f1)",
              color: "white", fontWeight: 800, fontSize: 15, transition: "all 0.3s",
            }}
              onMouseEnter={e => e.target.style.opacity = "0.88"}
              onMouseLeave={e => e.target.style.opacity = "1"}>
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .two-col{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================

function Footer() {
  return (
    <footer style={{ padding: "40px 24px", background: "#03030a", borderTop: "1px solid rgba(34,211,238,0.1)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#22d3ee,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, color: "white" }}>SS</div>
          <span style={{ color: "white", fontWeight: 700 }}>Soma<span style={{ color: "#22d3ee" }}>Dev</span></span>
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 10 }}>
          {[
            { icon: "🐙", href: MY_GITHUB,   label: "GitHub" },
            { icon: "💼", href: MY_LINKEDIN, label: "LinkedIn" },
            { icon: "📧", href: `mailto:${MY_EMAIL}`, label: "Email" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(34,211,238,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(34,211,238,0.12)"; e.currentTarget.style.border = "1px solid rgba(34,211,238,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.border = "1px solid rgba(34,211,238,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>© {new Date().getFullYear()} {MY_NAME}. All rights reserved.</div>
          <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, marginTop: 2 }}>
            Built with <span style={{ color: "#22d3ee" }}>React</span> & <span style={{ color: "#6366f1" }}>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// REUSABLE SMALL COMPONENT
// ============================================================

// Section tag shown above every heading: ──── LABEL ────
function SectionTag({ text }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "#22d3ee", fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>
      <span style={{ display: "block", width: 32, height: 1, background: "#22d3ee" }} />
      {text}
      <span style={{ display: "block", width: 32, height: 1, background: "#22d3ee" }} />
    </div>
  );
}
