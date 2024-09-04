import './App.css'
import Headers from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Landingpage from './pages/Landingpage.jsx'
import Home from './pages/Home.jsx'
import WatchHistory from './pages/WatchHistory.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/home" element={<Home />} />
        <Route path='/watch-history' element={<WatchHistory />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
