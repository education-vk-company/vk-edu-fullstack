import './App.css'

import { useEffect, useState } from 'react'

import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Feedback from './Pages/Feedback'
import Home from './Pages/Home'

const getCurrentURL = () => {
  const pathname = window.location.pathname; // /home, /about, /contacts, /feedback
  const pathnameWithoutSlash = pathname.slice(1); // home, about, contacts, feedback
  return pathnameWithoutSlash || 'home';
}

function AppOrdinaryURL() {
  const [page, setPage] = useState(getCurrentURL());

  useEffect(() => {
    const links = document.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()

        const href = link.getAttribute('href')
        setPage(href.slice(1))
        history.pushState(null, '', href)
      })
    })

    window.addEventListener('popstate', () => {
      const page = getCurrentURL()
      setPage(page);
    })
  }, [])

  return (
    <>
      <header>
        <ul>
          <li><a href="/home">Главная</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/contacts">Контакты</a></li>
          <li><a href="/feedback">Форма обратной связи</a></li>
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

export default AppOrdinaryURL
