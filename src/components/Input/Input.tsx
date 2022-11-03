import * as React from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import style from './Input.module.css';

export interface IInputProps {
  value: string;
  onChangeValue: (value: string) => any;
}

export default function Input({ value, onChangeValue }: IInputProps) {
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChangeValue(e.target.value);
  }

  return (
    <div className={style.inputWrapper}>
      <div className={style.inputBox}>
        <AiOutlineBars />
        <input
          className={style.input}
          type="text"
          placeholder="Add new task"
          value={value}
          onChange={handleOnChange}
          id="title"
        />
      </div>
    </div>
  );
}
