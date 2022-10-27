import MainLayout from "../../layouts/MainLayout";
import s from './register.module.scss';
import {useEffect, useState} from 'react';
import { alert } from "../../services/alerting.service";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import config from "../../config";
import IResult from "../../types/result.interface";

const Register = () => {

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [road, setRoad] = useState<string>("");
  const [work, setWork] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [copyPassword, setCopyPassword] = useState<string>("");

  const navigate = useNavigate();  

  const sendData = async() => {
    if(!copyPassword || copyPassword === '') return alert("error", "Заполните форму", "Укажите повтор пароля", 10);
    if(password !== copyPassword) return alert("error", "Что-то не так...", "Введенные пароли не совпадают", 10);
    if (!name || name === '') { alert("error", "Заполните форму", "Укажите ваше имя", 10); return false; }
    if (!surname || surname === '') { alert("error", "Заполните форму", "Укажите вашу фамилию", 10); return false; }
    if (!email || email === '') { alert("error", "Заполните форму", "Укажите вашу почту", 10); return false; }
    if (!phone || phone === '') { alert("error", "Заполните форму", "Укажите номер телефона", 10); return false; }
    if (!road || road === '-1') { alert("error", "Заполните форму", "Выберите дорогу", 10); return false; }
    if (!work || work === '') { alert("error", "Заполните форму", "Укажите предприятие", 10); return false; }
    if (!password || password === '') { alert("error", "Заполните форму", "Укажите пароль", 10); return false; }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('road', road);
    formData.append('work', work);
    formData.append('password', password);

    await axios.post(`${config.API}/auth/register`, formData, { headers: { "Content-Type": "multipart/form-data" } }).then(({ data }: AxiosResponse<IResult>) => {
      if (data.status === "success") {
        localStorage.accountToken = data.data.user_data.token;
        alert("default", "Успешная регистрация!", "Теперь Вы можете пользоваться нашим сервисом.", 15);
        navigate('/dashboard');
      } else {
        alert("error", "Произошла ошибка", data.message, 15);
      }
    }).catch(e => {
      if (e.code === 'ERR_NETWORK') {
        alert("error", "Произошла ошибка", "Сервер временно недоступен, попробуйте позже", 10);
      }
      console.warn(e);
    });
  }

  useEffect(() => {
    if (localStorage.accountToken) {
      axios.get(`${config.API}/auth/exists?token=${localStorage.accountToken}`).then(({ data }: AxiosResponse<IResult>) => {
        return data.status === "success" ? navigate('/dashboard') : false;
      }).catch(e => {
        if (e.code === 'ERR_NETWORK') {
          alert("error", "Произошла ошибка", "Сервер временно недоступен, попробуйте позже", 10);
        }
        console.warn(e);
      });
    }
  }, [navigate]);

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