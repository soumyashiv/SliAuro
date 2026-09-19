import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './pages/Product'
import Docs from './pages/Docs'
import Contact from './pages/Contact'
import GetStarted from './pages/GetStarted'
import { useRoute } from './hooks/useRoute'
import './index.css'

function App() {
  const route = useRoute()

  // Every page opens at the top.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [route])

  return (
    <div className="w-full min-h-screen">
      <Navbar route={route} />
      {route === 'home' && <Hero />}
      {route === 'product' && <Product />}
      {route === 'docs' && <Docs />}
      {route === 'contact' && <Contact />}
      {route === 'get-started' && <GetStarted />}
    </div>
  )
}

export default App
