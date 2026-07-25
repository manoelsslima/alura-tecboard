import './campo-de-entrada.estilos.css';

// o spread operator (...) é usado para passar todas as propriedades do objeto props
// para o elemento input. Isso é útil quando você quer criar um componente que seja
// um "wrapper" para outro componente, e quer que ele aceite todas as propriedades
// do componente original.
export function CampoDeEntrada(props) {
  return (
    <input {...props} className='campo-entrada-form' />
  );
}