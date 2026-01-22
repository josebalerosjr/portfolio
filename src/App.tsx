import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import './index.css'

function App() {
  return (
    <div className="container">
      <ThemeToggle />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <footer style={{ marginTop: '4rem', paddingBottom: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        <p>&copy; {new Date().getFullYear()} Jose Baleros Jr. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
