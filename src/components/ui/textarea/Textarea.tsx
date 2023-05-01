interface TextareaProps {
  name: string;
  rows?: number;
  placeholder: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
}

import styles from './textarea.module.scss';

export default function Textarea({
  name,
  rows = 30,
  placeholder,
  label,
  value,
  onChange,
}: TextareaProps) {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <label
          htmlFor={name}
          className={styles.label}>
          {label}
        </label>
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange(e.target.value)
          }
          className={styles.textarea}></textarea>
      </fieldset>
    </>
  );
}
