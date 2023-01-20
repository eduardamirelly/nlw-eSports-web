import { GameController } from 'phosphor-react';
import { InputNumberForm } from './InputNumberForm';
import { InputTextForm } from './InputTextForm';
import { InputTimeForm } from './InputTimeForm';
import { LabelForm } from './LabelForm';

export function ModalForm() {
  return (
    <form>
      <div>
        <LabelForm label="Qual o game?" htmlFor="game" />
        <InputTextForm
          id="game"
          placeholder="Selecione o game que deseja jogar"
        />
      </div>

      <div>
        <LabelForm label="Seu nome (ou nickname)" htmlFor="name" />
        <InputTextForm id="name" placeholder="Como te chamam dentro do game?" />
      </div>

      <div>
        <div>
          <LabelForm label="Joga há quantos anos?" htmlFor="yearsPlaying" />
          <InputNumberForm id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
        </div>
        <div>
          <LabelForm label="Qual seu discord?" htmlFor="discord" />
          <InputTextForm id="discord" placeholder="Usuário" />
        </div>
      </div>

      <div>
        <div>
          <LabelForm label="Quando costuma jogar?" htmlFor="weekDays" />
        </div>
        <div>
          <LabelForm label="Qual horário do dia?" htmlFor="hourStart" />
          <div>
            <InputTimeForm id="hourStart" placeholder="De" />
            <InputTimeForm id="hourEnd" placeholder="Até" />
          </div>
        </div>
      </div>

      <div>
        <input type="checkbox" />
        Costumo me conectar ao chat de voz?
      </div>

      <footer>
        <button>Cancelar</button>
        <button type="submit">
          <GameController />
          Encontrar duo
        </button>
      </footer>
    </form>
  );
}
