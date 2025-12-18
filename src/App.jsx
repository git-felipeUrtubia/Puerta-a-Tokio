import './assets/styles/general/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from './components/general/NavBar.jsx'
import { Home } from './components/home/Home.jsx'

export const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
