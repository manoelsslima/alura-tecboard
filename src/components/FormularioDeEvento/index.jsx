import { TituloFormulario } from '../TituloFormulario';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { Label } from '../Label';
import { CampoDeEntrada } from '../CampoDeEntrada';
import './formulario-de-evento.estilos.css';

export function FormularioDeEvento() {
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