import { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import authService from '../../services/auth.service';
import { AuthFrom } from '../../types/authFrom.interface';
import s from './main.module.scss';

const Main = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendData = async () => {
    await authService.login(email, password, AuthFrom.BROWSER, 'web_client');
  }

  return(
    <MainLayout title={"Добро пожаловать!"}>
      <div className={`container ${s.mainWrapper}`}>
        <div className={s.leftSide}>
          <h1>Добро пожаловать!</h1>
          <p>Helper - сервис, помогающий в поиске неисправностей и оптимизации работы на участке.</p>
          <p className={s.auth}>Для продолжения необходимо авторизоваться</p>

          <input type="text" placeholder="Email" value={email} onChange={({target}) => setEmail(target.value)} />
          <input type="password" placeholder="Пароль" value={password} onChange={({target}) => setPassword(target.value)} />
          <button onClick={sendData}>Войти</button>
        </div>
      </div>
    </MainLayout>
  )
}

export default Main;