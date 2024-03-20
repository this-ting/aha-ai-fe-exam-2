'use client';

import { useState, ChangeEventHandler } from 'react';

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const changeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return [value, changeValue] as const;
}
