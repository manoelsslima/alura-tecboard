import { TituloFormulario } from '../TituloFormulario';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { Label } from '../Label';
import { ListaSuspensa } from '../ListaSuspensa';
import { CampoDeEntrada } from '../CampoDeEntrada';
import { Botao } from '../Botao';

import './formulario-de-evento.estilos.css';

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Qual a data do evento?
          </Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name="dataEvento"
            placeholder="01/01/2024" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Selecione
          </Label>
          <ListaSuspensa />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>
          Criar evento
        </Botao>
      </div>
    </form>
  );
}