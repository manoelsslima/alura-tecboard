import { TituloFormulario } from '../TituloFormulario';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { Label } from '../Label';
import { ListaSuspensa } from '../ListaSuspensa';
import { CampoDeEntrada } from '../CampoDeEntrada';
import { Botao } from '../Botao';

import './formulario-de-evento.estilos.css';

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData) {
    const evento = {
//      id: 1,
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento'),
    }
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
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
          <Label htmlFor="capa">
            Qual o endereço da imagem de capa?
          </Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            name="capa"
            placeholder="http://..." />
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
          <Label htmlFor="tema">
            Tema do Evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
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