import { CaretDown, Check, GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { useState, FormEvent, useEffect } from 'react';

import { LabelForm } from '../Form/LabelForm';
import { Input } from './Input';
import { Game } from '../../@types/game';

export function ModalForm() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/games`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <LabelForm label="Qual o game?" htmlFor="game" />
        <Select.Root name="game">
          <Select.Trigger className="flex items-center justify-between bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-500 hover:bg-zinc-900/80">
            <Select.Value placeholder="Selecione o game que deseja jogar" />
            <Select.Icon className="text-zinc-400">
              <CaretDown size={24} />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              data-align="center"
              data-side="bottom"
              className="hidden bg-zinc-700 shadow-sm shadow-black/60 rounded"
            >
              <Select.ScrollUpButton>
                <CaretDown size={24} />
              </Select.ScrollUpButton>

              <Select.Viewport>
                <Select.Group>
                  {games.map((game) => (
                    <Select.Item
                      value={game.id}
                      className="px-4 py-3 flex items-center gap-1 text-zinc-500 bg-zinc-900 hover:bg-zinc-800"
                    >
                      <Select.ItemText>{game.title}</Select.ItemText>
                      <Select.ItemIndicator>
                        <Check size={24} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Viewport>

              <Select.ScrollDownButton>
                <CaretDown size={24} />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      <div className="flex flex-col gap-2">
        <LabelForm label="Seu nome (ou nickname)" htmlFor="name" />
        <Input
          id="name"
          name="name"
          placeholder="Como te chamam dentro do game?"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <LabelForm label="Joga há quantos anos?" htmlFor="yearsPlaying" />
          <Input
            type="number"
            id="yearsPlaying"
            name="yearsPlaying"
            placeholder="Tudo bem ser ZERO"
          />
        </div>
        <div className="flex flex-col gap-2">
          <LabelForm label="Qual seu discord?" htmlFor="discord" />
          <Input id="discord" name="discord" placeholder="Usuário" />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <LabelForm label="Quando costuma jogar?" htmlFor="weekDays" />
          <div>
            <ToggleGroup.Root
              className="grid grid-cols-4 gap-2"
              type="multiple"
              value={weekDays}
              onValueChange={setWeekDays}
            >
              <ToggleGroup.Item
                value="0"
                className={`w-10 h-10 rounded ${
                  weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                }`}
                title="Domingo"
              >
                D
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="1"
                className={`w-10 h-10 rounded ${
                  weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                }`}
                title="Segunda"
              >
                S
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="2"
                className={`w-10 h-10 rounded ${
                  weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                }`}
                title="Terça"
              >
                T
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="3"
                className={`w-10 h-10 rounded ${
                  weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                }`}
                title="Quarta"
              >
                Q
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="4"
                className={`w-10 h-10 rounded ${
                  weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                }`}
                title="Quinta"
              >
                Q
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="5"
                className={`w-10 h-10 rounded ${
                  weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                }`}
                title="Sexta"
              >
                S
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="6"
                className={`w-10 h-10 rounded ${
                  weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                }`}
                title="Sábado"
              >
                S
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <LabelForm label="Qual horário do dia?" htmlFor="hourStart" />
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="time"
              name="hourStart"
              id="hourStart"
              placeholder="De"
            />
            <Input type="time" name="hourEnd" id="hourEnd" placeholder="Até" />
          </div>
        </div>
      </div>

      <label className="mt-2 flex gap-2 text-sm items-center">
        <Checkbox.Root
          checked={useVoiceChannel}
          onCheckedChange={(checked) => {
            if (checked === true) {
              setUseVoiceChannel(true);
            } else {
              setUseVoiceChannel(false);
            }
          }}
          className="w-6 h-6 rounded bg-zinc-900 p-1"
        >
          <Checkbox.Indicator>
            <Check className="w-4 h-4 text-emerald-400" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        Costumo me conectar ao chat de voz?
      </label>

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
