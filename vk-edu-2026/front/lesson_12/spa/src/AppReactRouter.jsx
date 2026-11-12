import './App.css'

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Feedback from './Pages/Feedback'
import Home from './Pages/Home'

function AppReactRouter() {
  return (
    <>
      <Router>
        <header>
          <ul>
            <li><Link to="/home">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/feedback">Форма обратной связи</Link></li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:aboutID" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default AppReactRouter
