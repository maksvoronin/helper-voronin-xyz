import MainLayout from "../../layouts/MainLayout";
import s from './register.module.scss';
import {useState} from 'react';
import { alert } from "../../services/alerting.service";

const Register = () => {

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [road, setRoad] = useState<string>("");
  const [work, setWork] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [copyPassword, setCopyPassword] = useState<string>("");

  const sendData = () => {
    if(!name || name === '') return alert("error", "Заполните форму", "Укажите ваше имя", 10);
    if(!surname || surname === '') return alert("error", "Заполните форму", "Укажите вашу фамилию", 10);
    if(!email || email === '') return alert("error", "Заполните форму", "Укажите вашу почту", 10);
    if(!phone || phone === '') return alert("error", "Заполните форму", "Укажите номер телефона", 10);
    if(!road || road === '-1') return alert("error", "Заполните форму", "Выберите дорогу", 10);
    if(!work || work === '') return alert("error", "Заполните форму", "Укажите предприятие", 10);
    if(!password || password === '') return alert("error", "Заполните форму", "Укажите пароль", 10);
    if(!copyPassword || copyPassword === '') return alert("error", "Заполните форму", "Укажите повтор пароля", 10);
    if(password !== copyPassword) return alert("error", "Что-то не так...", "Введенные пароли не совпадают", 10);
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