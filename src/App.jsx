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
  );
}

// {children} é uma forma de desestruturar o objeto props, pegando apenas a propriedade children
function CampoDeFormulario({ children }){
  return (
    <fieldset>
      {children}
    </fieldset>
  );
}

// htmlFor é uma propriedade do elemento label. O componente <Label /> é um componente
// que recebe a propriedade htmlFor e a repassa para o elemento label. Isso é
// necessário porque o React não permite que você use a palavra-chave for como uma
// propriedade de um elemento, então você precisa usar htmlFor no lugar.
function Label({children, htmlFor}) {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

// o spread operator (...) é usado para passar todas as propriedades do objeto props
// para o elemento input. Isso é útil quando você quer criar um componente que seja
// um "wrapper" para outro componente, e quer que ele aceite todas as propriedades
// do componente original.
function CampoDeEntrada(props) {
  return (
    <input {...props} />
  );
}

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada id="nome" name="nome" placeholder="Summer dev hits" />
      </CampoDeFormulario>
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
