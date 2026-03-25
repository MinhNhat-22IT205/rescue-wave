import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4 space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
