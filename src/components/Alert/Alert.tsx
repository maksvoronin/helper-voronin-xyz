import React from "react";
import { IAlert } from "../../types/alert.interface";
import s from './alert.module.scss';

const Alert : React.FC<IAlert> = ({type, title, message, time, onClick}) => {
  return(
    <div className={`${s.alert} ${s[type]}`} onClick={onClick}>
      <div className={s.close}>&times;</div>
      <p className={s.title}>{title}</p>
      <p className={s.message}>{message}</p>
    </div>
  )
}

export default Alert;