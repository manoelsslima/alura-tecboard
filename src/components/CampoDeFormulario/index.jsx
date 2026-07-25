// {children} é uma forma de desestruturar o objeto props, pegando apenas a propriedade children
export function CampoDeFormulario({ children }){
  return (
    <fieldset>
      {children}
    </fieldset>
  );
}