import axios, { AxiosResponse } from "axios";
import config from "../config";

class AuthService {

  async checkAuth() {
    try {
      const {data} = await axios.get(`${config.API}/auth/exists?token=${localStorage.accountToken}`);
      return data.status === "success";
    } catch(e) {
      console.log(e);
    }
  }

}

export default new AuthService();