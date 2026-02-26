import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Invitation from './pages/Invitation'
import Wishes from './pages/Wishes'
import Game from './pages/Game'
import Dinner from './pages/Dinner'
import './App.css'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Invitation />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/game" element={<Game />} />
          <Route path="/dinner" element={<Dinner />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
