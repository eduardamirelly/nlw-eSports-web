import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-zinc-900 hover:bg-zinc-900/80 focus:border-none outline-none py-3 px-4 rounded text-sm placeholder:text-zinc-500"
    />
  );
}
