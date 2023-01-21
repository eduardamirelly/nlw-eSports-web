import { GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import { LabelForm } from '../Form/LabelForm';
import { Input } from './Input';

export function ModalForm() {
  return (
    <form className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <LabelForm label="Qual o game?" htmlFor="game" />
        <Input id="game" placeholder="Selecione o game que deseja jogar" />
      </div>

      <div className="flex flex-col gap-2">
        <LabelForm label="Seu nome (ou nickname)" htmlFor="name" />
        <Input id="name" placeholder="Como te chamam dentro do game?" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <LabelForm label="Joga há quantos anos?" htmlFor="yearsPlaying" />
          <Input
            type="number"
            id="yearsPlaying"
            placeholder="Tudo bem ser ZERO"
          />
        </div>
        <div className="flex flex-col gap-2">
          <LabelForm label="Qual seu discord?" htmlFor="discord" />
          <Input id="discord" placeholder="Usuário" />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <LabelForm label="Quando costuma jogar?" htmlFor="weekDays" />
          <div className="grid grid-cols-4 gap-2">
            <button
              className="w-10 h-10 rounded bg-zinc-900 active:bg-violet-500"
              title="Domingo"
            >
              D
            </button>
            <button
              className="w-10 h-10 rounded bg-zinc-900 active:bg-violet-500"
              title="Segunda"
            >
              S
            </button>
            <button
              className="w-10 h-10 rounded bg-zinc-900 active:bg-violet-500"
              title="Terça"
            >
              T
            </button>
            <button
              className="w-10 h-10 rounded bg-zinc-900 active:bg-violet-500"
              title="Quarta"
            >
              Q
            </button>
            <button
              className="w-10 h-10 rounded bg-zinc-900 active:bg-violet-500"
              title="Quinta"
            >
              Q
            </button>
            <button
              className="w-10 h-10 rounded bg-zinc-900 active:bg-violet-500"
              title="Sexta"
            >
              S
            </button>
            <button
              className="w-10 h-10 rounded bg-zinc-900 active:bg-violet-500"
              title="Sábado"
            >
              S
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <LabelForm label="Qual horário do dia?" htmlFor="hourStart" />
          <div className="grid grid-cols-2 gap-2">
            <Input type="time" id="hourStart" placeholder="De" />
            <Input type="time" id="hourEnd" placeholder="Até" />
          </div>
        </div>
      </div>

      <div className="mt-2 flex gap-2 text-sm">
        <Input type="checkbox" />
        Costumo me conectar ao chat de voz?
      </div>

      <footer className="mt-4 flex justify-end gap-4">
        <Dialog.Close
          type="button"
          className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold"
        >
          Cancelar
        </Dialog.Close>
        <button
          className="bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3"
          type="submit"
        >
          <GameController size={24} />
          Encontrar duo
        </button>
      </footer>
    </form>
  );
}
