import React from 'react';
import styles from './Select.module.css';

type OptionObj = {
  value: number | string;
  label: string | React.ReactNode;
};

type SelectProps = {
  isDisabled?: boolean;
  name: string;
  options: OptionObj[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => unknown;
  id: string;
  defaultValue?: number | string;
};

export const Select = (props: SelectProps) => {
  const { isDisabled, name, options, onChange, id, defaultValue } = { ...props };
  return (
    <div className={styles.customSelect} style={{ width: '200px' }}>
      <select
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        id={id}
        disabled={isDisabled || false}
      >
        {options.map((option, i) => (
          <option key={`key${i}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
