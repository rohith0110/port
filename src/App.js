import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Projects from "./pages/projects";

const portfolioStyles = `
:root {
  color-scheme: dark;
  --bg: #050505;
  --surface: #0b0b0b;
  --text: #f2f2f2;
  --muted: #9a9a9a;
  --line: #1f1f1f;
  --line-strong: #343434;
  --focus: #ffffff;
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  min-height: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "Segoe UI", Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

a {
  color: inherit;
}

::selection {
  background: #f2f2f2;
  color: #050505;
}

.portfolio-root {
  --pointer-x: 0;
  --pointer-y: 0;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: clamp(1rem, 3.4vw, 2.3rem) 1rem 4rem;
  overflow-x: hidden;
}

.portfolio-shell {
  position: relative;
  z-index: 2;
  width: min(1120px, 100%);
  display: grid;
  align-content: start;
  gap: 3.2rem;
}

.scene-layer {
  position: fixed;
  border: 1px solid #151515;
  pointer-events: none;
  z-index: 0;
  transition: transform 240ms ease;
}

.scene-layer-a {
  width: clamp(180px, 20vw, 340px);
  height: clamp(220px, 24vw, 420px);
  top: 5.5rem;
  right: 3.8%;
  transform: translate(
      calc(var(--pointer-x) * 14px),
      calc(var(--pointer-y) * 10px)
    )
    rotate(6deg);
  animation: layer-drift-a 13s ease-in-out infinite;
}

.scene-layer-b {
  width: clamp(140px, 16vw, 260px);
  height: clamp(140px, 16vw, 260px);
  bottom: 8%;
  left: 4%;
  border-radius: 50%;
  transform: translate(
      calc(var(--pointer-x) * -10px),
      calc(var(--pointer-y) * -8px)
    )
    rotate(-4deg);
  animation: layer-drift-b 16s ease-in-out infinite;
}

.scene-layer-c {
  width: clamp(220px, 27vw, 500px);
  height: 1px;
  top: 36%;
  left: -7%;
  border: 0;
  background: #1a1a1a;
  transform: translate(calc(var(--pointer-x) * 12px), 0);
  animation: layer-scan 10s ease-in-out infinite;
}

.masthead {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.4rem, 3vw, 2.5rem);
  align-items: stretch;
  border-bottom: 1px solid var(--line);
  padding-bottom: 2.35rem;
}

.masthead-copy {
  display: grid;
  gap: 1rem;
  align-content: center;
}

.kicker {
  margin: 0;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.74rem;
}

.masthead h1 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 0.9;
  font-size: clamp(2.5rem, 7.9vw, 6.6rem);
}

.lead {
  margin: 0;
  max-width: 68ch;
  color: var(--muted);
  line-height: 1.8;
  font-size: clamp(1rem, 1.45vw, 1.1rem);
}

.status-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.56rem;
  align-items: center;
}

.status-pill,
.status-location {
  margin: 0;
  border: 1px solid var(--line);
  min-height: 2.05rem;
  padding: 0.44rem 0.66rem;
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  font-size: 0.68rem;
  line-height: 1;
}

.status-pill {
  color: #d6d6d6;
}

.status-location {
  color: var(--muted);
}

.status-dot {
  width: 0.46rem;
  height: 0.46rem;
  border-radius: 50%;
  margin-right: 0.45rem;
  border: 1px solid #e8e8e8;
  background: #e8e8e8;
  animation: dot-pulse 1.6s ease-in-out infinite;
}

.action-row,
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.58rem;
}

.action-row a,
.contact-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.32rem;
  border: 1px solid var(--line);
  padding: 0.56rem 0.74rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  font-size: 0.72rem;
  line-height: 1;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease,
    transform 130ms ease;
}

.action-row a:hover,
.contact-actions a:hover {
  border-color: #f2f2f2;
  background: #f2f2f2;
  color: #050505;
}

.action-row a:active,
.contact-actions a:active {
  border-color: #cfcfcf;
  background: #cfcfcf;
  transform: translateY(1px);
}

.section-nav {
  position: sticky;
  top: 4.7rem;
  z-index: 25;
  border: 1px solid var(--line);
  background: rgba(5, 5, 5, 0.9);
  backdrop-filter: blur(8px);
}

.section-nav ul {
  margin: 0;
  padding: 0.38rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.34rem;
}

.section-nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  border: 1px solid transparent;
  padding: 0.44rem 0.62rem;
  text-decoration: none;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  line-height: 1;
  transition:
    border-color 150ms ease,
    color 150ms ease,
    background-color 150ms ease;
}

.section-nav a:hover {
  color: var(--text);
  border-color: var(--line);
}

.section-nav a.is-active {
  color: #050505;
  border-color: #f2f2f2;
  background: #f2f2f2;
}

.site-nav {
  position: relative;
  z-index: 30;
  border: 1px solid var(--line);
  background: rgba(5, 5, 5, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0.38rem;
}

.site-nav-brand {
  margin: 0;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.66rem;
  line-height: 1;
}

.site-nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.34rem;
}

.site-nav-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  border: 1px solid transparent;
  padding: 0.44rem 0.62rem;
  text-decoration: none;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  line-height: 1;
  transition:
    border-color 150ms ease,
    color 150ms ease,
    background-color 150ms ease;
}

.site-nav-links a:hover {
  color: var(--text);
  border-color: var(--line);
}

.site-nav-links a.active {
  color: #050505;
  border-color: #f2f2f2;
  background: #f2f2f2;
}

.section-nav a:focus-visible,
.action-row a:focus-visible,
.contact-actions a:focus-visible,
.project-row a:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}

.page-stack {
  display: grid;
  gap: 3.2rem;
}

.home-page > h1,
.projects-page .section > h2 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 0.9;
}

.home-page > h1 {
  max-width: 10ch;
  border-bottom: 1px solid var(--line);
  padding-bottom: 2.35rem;
  font-size: clamp(2.5rem, 7.9vw, 6.6rem);
}

.section {
  border-top: 1px solid var(--line);
  padding-top: 2rem;
  display: grid;
  gap: 1rem;
}

.section h2 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1;
  font-size: clamp(1.35rem, 3vw, 2.3rem);
}

.section h3 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.2;
  font-size: 1.08rem;
}

.section p {
  margin: 0;
  max-width: 72ch;
  color: var(--muted);
  line-height: 1.8;
  font-size: 1rem;
}

.section > ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.52rem;
}

.section > ul li {
  border: 1px solid var(--line);
  padding: 0.54rem 0.66rem;
  color: #d8d8d8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.7rem;
  line-height: 1.45;
  transition:
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.section > ul li:hover {
  border-color: var(--line-strong);
  color: #f2f2f2;
  transform: translateY(-1px);
}

.section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.section-title {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1;
  font-size: clamp(1.35rem, 3vw, 2.3rem);
}

.block-title {
  max-width: 18ch;
}

.projects-stream {
  border-top: 1px solid var(--line);
  display: grid;
}

.project-row {
  position: relative;
  display: grid;
  grid-template-columns: minmax(220px, 290px) 1fr minmax(220px, 250px);
  gap: 1.1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--line);
  transition:
    transform 180ms ease,
    background-color 180ms ease;
}

.project-row::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #ebebeb;
  transition: width 280ms ease;
}

.project-row:hover {
  background: #090909;
  transform: translateY(-1px);
}

.project-row:hover::before {
  width: 100%;
}

.project-meta {
  display: grid;
  gap: 0.42rem;
}

.project-period {
  margin: 0;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.68rem;
}

.project-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.58rem;
}

.project-meta h3 {
  margin: 0;
  font-size: 1.18rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.2;
}

.project-live-link {
  display: inline-flex;
  align-items: center;
  gap: 0.24rem;
  border: 1px solid var(--line);
  min-height: 1.75rem;
  padding: 0.34rem 0.48rem;
  color: var(--muted);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.64rem;
  line-height: 1;
  transition:
    border-color 150ms ease,
    color 150ms ease,
    background-color 150ms ease,
    transform 120ms ease;
}

.project-live-link span {
  transition: transform 150ms ease;
}

.project-live-link:hover {
  border-color: #f2f2f2;
  color: #050505;
  background: #f2f2f2;
}

.project-live-link:hover span {
  transform: translate(1px, -1px);
}

.project-live-link:active {
  border-color: #cccccc;
  background: #cccccc;
  transform: translateY(1px);
}

.project-org {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 0.94rem;
}

.project-content {
  display: grid;
  gap: 0.64rem;
}

.project-impact {
  margin: 0;
  color: var(--text);
  line-height: 1.7;
  font-size: 1.02rem;
}

.project-highlights {
  margin: 0;
  padding: 0 0 0 1rem;
  display: grid;
  gap: 0.4rem;
}

.project-highlights li {
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

.project-tail {
  display: grid;
  gap: 0.7rem;
  align-content: start;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.32rem;
  border: 1px solid var(--line);
  padding: 0.56rem 0.74rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  font-size: 0.72rem;
  line-height: 1;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease,
    transform 130ms ease;
}

.project-link:hover {
  border-color: #f2f2f2;
  background: #f2f2f2;
  color: #050505;
}

.project-link:active {
  border-color: #cfcfcf;
  background: #cfcfcf;
  transform: translateY(1px);
}

.stack-tags {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.stack-tags li {
  border: 1px solid var(--line);
  padding: 0.42rem 0.5rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-size: 0.66rem;
  line-height: 1;
  transition:
    border-color 150ms ease,
    color 150ms ease;
}

.project-row:hover .stack-tags li {
  border-color: #2d2d2d;
  color: #cecece;
}

.experience-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(260px, 0.75fr);
  gap: 1rem;
  align-items: start;
}

.experience-roles,
.experience-sidebars {
  display: grid;
  gap: 0.7rem;
  align-content: start;
}

.experience-role,
.experience-block {
  border-top: 1px solid var(--line-strong);
  padding-top: 0.65rem;
  display: grid;
  gap: 0.28rem;
  align-content: start;
}

.experience-role h3,
.experience-block h3 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.74rem;
}

.experience-org {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.experience-block ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.2rem;
  align-content: start;
}

.experience-block li {
  color: #d3d3d3;
  line-height: 1.45;
  font-size: 0.95rem;
}

.profile-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 1.3rem;
}

.track-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.84rem;
}

.track-grid article {
  border-top: 1px solid var(--line-strong);
  padding-top: 0.74rem;
  display: grid;
  gap: 0.36rem;
}

.track-grid h3 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.7rem;
}

.track-grid p {
  margin: 0;
  color: var(--muted);
  line-height: 1.64;
  font-size: 0.95rem;
}

.fact-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.56rem;
}

.fact-list li {
  border-left: 1px solid var(--line-strong);
  padding-left: 0.76rem;
  color: #d3d3d3;
  line-height: 1.62;
  font-size: 0.98rem;
}

.contact-band {
  gap: 0.8rem;
}

.contact-band p {
  margin: 0;
  max-width: 72ch;
  color: var(--muted);
  line-height: 1.8;
}

[data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  animation: reveal-in 560ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

[data-reveal="0"] {
  animation-delay: 0ms;
}

[data-reveal="1"] {
  animation-delay: 80ms;
}

[data-reveal="2"] {
  animation-delay: 160ms;
}

[data-reveal="3"] {
  animation-delay: 240ms;
}

[data-reveal="4"] {
  animation-delay: 320ms;
}

[data-reveal="5"] {
  animation-delay: 400ms;
}

@keyframes reveal-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes dot-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.64);
    opacity: 0.58;
  }
}

@keyframes layer-drift-a {
  0%,
  100% {
    transform: translate(
        calc(var(--pointer-x) * 14px),
        calc(var(--pointer-y) * 10px)
      )
      rotate(6deg);
  }

  50% {
    transform: translate(
        calc(var(--pointer-x) * 14px + 8px),
        calc(var(--pointer-y) * 10px - 6px)
      )
      rotate(9deg);
  }
}

@keyframes layer-drift-b {
  0%,
  100% {
    transform: translate(
        calc(var(--pointer-x) * -10px),
        calc(var(--pointer-y) * -8px)
      )
      rotate(-4deg);
  }

  50% {
    transform: translate(
        calc(var(--pointer-x) * -10px - 7px),
        calc(var(--pointer-y) * -8px + 7px)
      )
      rotate(3deg);
  }
}

@keyframes layer-scan {
  0%,
  100% {
    opacity: 0.2;
    transform: translate(calc(var(--pointer-x) * 12px), 0);
  }

  50% {
    opacity: 0.85;
    transform: translate(calc(var(--pointer-x) * 12px + 24px), 0);
  }
}

@media (max-width: 980px) {
  .portfolio-shell,
  .page-stack {
    gap: 2.6rem;
  }

  .scene-layer {
    display: none;
  }

  .project-row {
    grid-template-columns: 1fr;
    gap: 0.95rem;
  }

  .project-title-row {
    align-items: start;
  }

  .profile-layout {
    grid-template-columns: 1fr;
  }

  .experience-layout {
    grid-template-columns: 1fr;
  }

  .track-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .portfolio-root {
    padding: 1rem 0.8rem 2.2rem;
  }

  .portfolio-shell,
  .page-stack {
    gap: 2rem;
  }

  .masthead h1,
  .home-page > h1 {
    font-size: clamp(2rem, 14vw, 3.4rem);
  }

  .section {
    padding-top: 1.6rem;
  }

  .action-row a,
  .contact-actions a,
  .project-link {
    min-height: 2.15rem;
    font-size: 0.66rem;
  }

  .status-pill,
  .status-location {
    min-height: 1.88rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
`;

function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      const rect = root.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      root.style.setProperty("--pointer-x", x.toFixed(3));
      root.style.setProperty("--pointer-y", y.toFixed(3));
    };

    const handlePointerLeave = () => {
      root.style.setProperty("--pointer-x", "0");
      root.style.setProperty("--pointer-y", "0");
    };

    root.addEventListener("pointermove", handlePointerMove);
    root.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      root.removeEventListener("pointermove", handlePointerMove);
      root.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="portfolio-root" ref={rootRef}>
      <style>{portfolioStyles}</style>
      <div className="scene-layer scene-layer-a" aria-hidden="true" />
      <div className="scene-layer scene-layer-b" aria-hidden="true" />
      <div className="scene-layer scene-layer-c" aria-hidden="true" />

      <main className="portfolio-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
