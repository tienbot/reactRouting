import s from './Button.module.scss'

export const Button = ({onClick}) => {
return <button onClick={onClick} className={s.Button}>кнопка</button>
}