interface InputTextFormProps {
  id: string;
  placeholder: string;
}

export function InputTextForm({ id, placeholder }: InputTextFormProps) {
  return <input id={id} type="text" placeholder={placeholder} />;
}
