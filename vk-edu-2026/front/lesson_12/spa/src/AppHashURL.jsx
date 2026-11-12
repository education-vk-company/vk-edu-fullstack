import './App.css'

import { useEffect, useState } from 'react'

import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Feedback from './Pages/Feedback'
import Home from './Pages/Home'

const getCurrentHash = () => {
  const hash = window.location.hash; // #home, #about, #contacts, #feedback
  const hashWithoutHash = hash.slice(1); // home, about, contacts, feedback
  return hashWithoutHash || 'home';
}

function AppHashURL() {
  const [page, setPage] = useState(getCurrentHash());

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const page = getCurrentHash()
      setPage(page)
    })
  }, [])

  return (
    <>
      <header>
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#contacts">Контакты</a></li>
          <li><a href="#feedback">Форма обратной связи</a></li>
        </ul>
      </header>
      <main>
        {page === 'home' && <Home /> }
        {page === 'about' && <About /> }
        {page === 'contacts' && <Contacts /> }
        {page === 'feedback' && <Feedback /> }
      </main>
    </>
  )
}

export default AppHashURL
