interface LabelFormProps {
  htmlFor: string;
  label: string;
}

export function LabelForm({ label, htmlFor }: LabelFormProps) {
  return (
    <label className="font-semibold" htmlFor={htmlFor}>
      {label}
    </label>
  );
}
