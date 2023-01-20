import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className="xl:w-full rounded-lg pt-1 bg-nlw-gradient self-center overflow-hidden mt-8 mx-3">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center flex-wrap gap-6">
        <div>
          <strong className="block font-bold text-2xl text-white">
            Não encontrou seu duo?
          </strong>
          <span className="block text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center justify-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
