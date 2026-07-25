// props é um objeto que contém todas as propriedades passadas para o componente
// props.children é uma propriedade especial que contém os elementos filhos do componente,
// ou seja, tudo que está entre a abertura e o fechamento do componente
export function TituloFormulario(props){
  return (
    <h2>{props.children}</h2>
  );
}