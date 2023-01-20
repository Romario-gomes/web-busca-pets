import { forwardRef, ForwardRefRenderFunction } from 'react';
import style from './input.module.scss';

interface IInputProps{
  type: string;
  name: string;
  id?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({ type, name, id, ...rest }) => {
  return (
    <input
      className={style.input}
      type={type}
      name={name}
      id={id}
      {...rest}
    />
  )
}

export const Input = forwardRef(InputBase);