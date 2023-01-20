import './styles/main.css';

import logoImg from './assets/logo.svg';
import gameImg01 from './assets/game_1.png';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
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

      <div className="grid xl:grid-cols-6 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-6 mt-16"></div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
