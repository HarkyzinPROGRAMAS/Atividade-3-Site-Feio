import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import baixakilogo from './assets/baixakilogo.jpg'
import noticias from './assets/noticias.png'

function App() {
  return (
    <>
      <header>
        <section className="header">
          <img src={baixakilogo} alt="logo do baixaki" />
          <div className="botoes">
            <button type="submit" className="botaoPesquisa">
              Pesquisar
            </button>
          </div>
        </section>
        <section className="pagina1">
          <div className="botoes2">
            <button type="button">Windows</button>
            <button type="button">Mac</button>
            <button type="button">Linux</button>
            <button type="button">Android</button>
          </div>
        </section>
      </header>
      <section className="noticias">
        <img src={noticias} alt="aaaaa" />
      </section>
    </>
  )
}

export default App
