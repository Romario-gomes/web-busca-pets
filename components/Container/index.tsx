import { ReactNode } from "react"
import style from './container.module.scss';
interface IContainerContent {
  children: ReactNode;
}

export default function Container({ children }: IContainerContent) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}