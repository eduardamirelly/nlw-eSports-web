interface InputNumberFormProps {
  id: string;
  placeholder: string;
}

export function InputNumberForm({ id, placeholder }: InputNumberFormProps) {
  return <input id={id} type="number" placeholder={placeholder} />;
}
