import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// no react, componentes são FUNÇÕES

// props é um objeto que contém todas as propriedades passadas para o componente
// props.children é uma propriedade especial que contém os elementos filhos do componente,
// ou seja, tudo que está entre a abertura e o fechamento do componente
function TituloFormulario(props){
  return (
    <h2>{props.children}</h2>
  )
}

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <fieldset>
        <label htmlFor="nome">Qual o nome do evento?</label>
        <input type="text" id="nome" name="nome" placeholder="Summer dev hits" />
      </fieldset>
    </form>
  );
}

function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo do TechBoard" />
      </header>
      <section>
        <img src="/banner.png" alt="Banner de tecnologia" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
