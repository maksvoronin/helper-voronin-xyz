import axios, { AxiosResponse } from 'axios';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import DashboardLayout from '../../layouts/DashboardLayout';
import { alert } from '../../services/alerting.service';
import IResult from '../../types/result.interface';

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.accountToken) {
      axios.get(`${config.API}/auth/exists?token=${localStorage.accountToken}`).then(({ data }: AxiosResponse<IResult>) => {
        return data.status === "success" ? false : navigate('/');
      }).catch(e => {
        if (e.code === 'ERR_NETWORK') {
          alert("error", "Произошла ошибка", "Сервер временно недоступен, попробуйте позже", 10);
        }
        console.warn(e);
      });
    } else {
      navigate('/');
    }
  }, [navigate]);

  return(
    <DashboardLayout title="Панель управления">

    </DashboardLayout>
  )
}

export default Dashboard;