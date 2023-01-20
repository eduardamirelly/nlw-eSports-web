interface InputTimeFormProps {
  id: string;
  placeholder: string;
}

export function InputTimeForm({ id, placeholder }: InputTimeFormProps) {
  return <input id={id} type="time" placeholder={placeholder} />;
}
