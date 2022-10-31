import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import authService from '../../services/auth.service';
import RouteService from '../../services/route.service';

const Dashboard = () => {

  const navigate = useNavigate();
  const routeService = new RouteService(navigate);

  useEffect(() => {
    authService.checkAuth().then(r => {
      !r && routeService.home(); 
    });
  }, [navigate]);

  return (
    <DashboardLayout title="Панель управления">

    </DashboardLayout>
  )
}

export default Dashboard;