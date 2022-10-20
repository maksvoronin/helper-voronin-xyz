import { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import authService from '../../services/auth.service';
import { AuthFrom } from '../../types/authFrom.interface';
import s from './login.module.scss';

const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendData = async () => {
    await authService.login(email, password, AuthFrom.BROWSER, 'web_client');
  }
  
  return (
    <MainLayout title="Вход">
      <div className={s.loginWrapper}>
        <div className={s.loginContainer}>
          <h1>Вход</h1>
          <input type="text" placeholder="Ваша почта" value={email} onChange={({target}) => setEmail(target.value)} />
          <input type="password" placeholder="Пароль" value={password} onChange={({target}) => setPassword(target.value)} />
          <button onClick={sendData}>Войти</button>
        </div>
      </div>
    </MainLayout>
  )
}

export default Login;