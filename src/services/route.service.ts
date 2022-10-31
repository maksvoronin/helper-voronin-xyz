import { NavigateFunction } from "react-router-dom";

class RouteService {

  private navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  home() {
    this.navigate('/');
  }

  join() {
    this.navigate('/login');
  }

  reg() {
    this.navigate('/reg');
  }

  dashboard() {
    this.navigate('/dashboard');
  }

}

export default RouteService;