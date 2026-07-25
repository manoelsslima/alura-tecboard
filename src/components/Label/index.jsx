import './label.estilos.css';

// htmlFor é uma propriedade do elemento label. O componente <Label /> é um componente
// que recebe a propriedade htmlFor e a repassa para o elemento label. Isso é
// necessário porque o React não permite que você use a palavra-chave for como uma
// propriedade de um elemento, então você precisa usar htmlFor no lugar.
export function Label({children, htmlFor}) {
  return (
    <label htmlFor={htmlFor} className='label'>
      {children}
    </label>
  )
}