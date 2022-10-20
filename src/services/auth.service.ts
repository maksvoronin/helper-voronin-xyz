import axios from "axios";
import config from "../config";
import { AuthFrom } from "../types/authFrom.interface";
import { alert } from "./alerting.service";

class AuthService {
  async login(email: string, password: string, from: AuthFrom, userAgent: string) {
    if (!email || email === '') {
      return alert("error", "Заполните форму", "Укажите Вашу почту", 15);
    }

    if (!password || password === '') {
      return alert("error", "Заполните форму", "Укажите пароль", 15);
    }

    axios.post(`${config.API}/login`, { email, password, from, userAgent }).then(({ data }) => {

    }).catch(e => {
      if(e.code === 'ERR_NETWORK') {
        alert("error", "Произошла ошибка", "Сервер временно недоступен, попробуйте позже", 10);
      }
      console.warn(e);
    });
  }

  async register(name: string, surname: string, email: string, phone: string, road: string, work: string, password: string) {
    if(!name || name === '') return alert("error", "Заполните форму", "Укажите ваше имя", 10);
    if(!surname || surname === '') return alert("error", "Заполните форму", "Укажите вашу фамилию", 10);
    if(!email || email === '') return alert("error", "Заполните форму", "Укажите вашу почту", 10);
    if(!phone || phone === '') return alert("error", "Заполните форму", "Укажите номер телефона", 10);
    if(!road || road === '-1') return alert("error", "Заполните форму", "Выберите дорогу", 10);
    if(!work || work === '') return alert("error", "Заполните форму", "Укажите предприятие", 10);
    if(!password || password === '') return alert("error", "Заполните форму", "Укажите пароль", 10);

    alert("default", "Успешная регистрация!", "Теперь Вы можете пользоваться нашим сервисом.", 15);
  }
}

export default new AuthService();