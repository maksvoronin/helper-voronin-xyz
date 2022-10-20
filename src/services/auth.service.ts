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
}

export default new AuthService();