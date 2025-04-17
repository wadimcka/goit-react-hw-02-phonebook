import React from 'react';
import { InputLabel, InputWraper, InputField } from './UniversalInput.styled';

export default function UniversalInput({
  type,
  name,
  pattern = undefined,
  title,
  value,
  onChange,
  label,
  required = true,
}) {
  return (
    <InputWraper>
      {label ? (
        <InputLabel>
          {label}
          <InputField
            type={type}
            name={name}
            pattern={pattern}
            title={title}
            required={required}
            value={value}
            onChange={onChange}
          />
        </InputLabel>
      ) : (
        <InputField
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </InputWraper>
  );
}
