import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Features from './Pages/Features'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
