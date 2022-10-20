import MainLayout from "../../layouts/MainLayout";
import s from './register.module.scss';
import {useState} from 'react';
import { alert } from "../../services/alerting.service";
import authService from "../../services/auth.service";

const Register = () => {

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [road, setRoad] = useState<string>("");
  const [work, setWork] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [copyPassword, setCopyPassword] = useState<string>("");

  const sendData = async() => {
    if(!copyPassword || copyPassword === '') return alert("error", "Заполните форму", "Укажите повтор пароля", 10);
    if(password !== copyPassword) return alert("error", "Что-то не так...", "Введенные пароли не совпадают", 10);

    await authService.register(name, surname, email, phone, road, work, password);
  }

  return(
    <MainLayout title="Регистрация">
      <div className={`container ${s.registerWrapper}`}>
        <h1>Регистрация</h1>
        <div className={s.duoInputs}>
          <input type="text" placeholder="Ваше имя" value={name} onChange={({target}) => setName(target.value)} />
          <input type="text" placeholder="Ваша фамилия" value={surname} onChange={({target}) => setSurname(target.value)} />
        </div>
        <input type="text" placeholder="Ваша электронная почта" value={email} onChange={({target}) => setEmail(target.value)} />
        <input type="text" placeholder="Ваш номер телефона" value={phone} onChange={({target}) => setPhone(target.value)} />
        <select value={road} onChange={({target}) => setRoad(target.value)}>
          <option value="-1">Выберите дорогу</option>
          <option value="1">test</option>
        </select>
        <input type="text" placeholder="Ваше предприятие" value={work} onChange={({target}) => setWork(target.value)} />
        <div className={s.duoInputs}>
          <input type="password" placeholder="Задайте пароль" value={password} onChange={({target}) => setPassword(target.value)} />
          <input type="password" placeholder="Повторите пароль" value={copyPassword} onChange={({target}) => setCopyPassword(target.value)} />
        </div>
        <button onClick={sendData}>Зарегистрироваться</button>
      </div>
    </MainLayout>
  );
}

export default Register;