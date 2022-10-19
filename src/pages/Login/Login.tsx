import { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { alert } from '../../services/alerting.service';
import s from './login.module.scss';

const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendData = () => {
    if(!email || email === '') {
      return alert("error", "Заполните форму", "Укажите email", 10);
    }

    if(!password || password === '') {
      return alert("error", "Заполните форму", "Укажите пароль", 10);
    }

    alert("default", "Успешно!", "Вы успешно авторизовались!", 5);
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