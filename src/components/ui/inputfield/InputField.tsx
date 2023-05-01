import styles from './input-field.module.scss';

interface InputFieldProps {
  value: string;
  name: string;
  placeholder: string;
  type?: string;
  label: string;
  onChange: (value: string) => void;
}

export default function InputField({
  name,
  label,
  value,
  placeholder,
  type = 'text',
  onChange,
}: InputFieldProps) {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <label
          htmlFor={name}
          className={styles.label}>
          {label}
        </label>
        <input
          className={styles.input}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.value)
          }
        />
      </fieldset>
    </>
  );
}
