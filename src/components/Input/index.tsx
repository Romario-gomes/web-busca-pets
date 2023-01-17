import style from './input.module.scss';

interface IInputProps{
  type: string;
  name: string;
  id?: string;
}

export default function Input({ type, name, id }: IInputProps) {
  return (
    <input className={style.input} type={type} name={name} id={id} />
  )
}