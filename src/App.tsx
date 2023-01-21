import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { CreateAdBanner } from './components/CreateAdBanner';
import { Game } from './@types/game';
import { GameBanner } from './components/GameBanner';

import logoImg from './assets/logo.svg';

import './styles/main.css';
import { ModalForm } from './components/Form/ModalForm';

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/games`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />

      <h1 className="sm:text-6xl text-4xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid xl:grid-cols-6 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg lg:w-2/6 w-3/4 shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>

            <ModalForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
