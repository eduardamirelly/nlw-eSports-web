interface LabelFormProps {
  htmlFor: string;
  label: string;
}

export function LabelForm({ label, htmlFor }: LabelFormProps) {
  return <label htmlFor={htmlFor}>{label}</label>;
}
