import './styles/main.css';

import logoImg from './assets/logo.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import { Game } from './@types/game';
import { GameBanner } from './components/GameBanner';

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
            title={game.title}
            bannerUrl={game.bannelUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
