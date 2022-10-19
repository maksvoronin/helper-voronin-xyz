import { Link } from 'react-router-dom';
import s from './header.module.scss';

const Header = () => {
  return(
    <header className={s.header}>
      <div className={`container ${s.headerContainer}`}>
        <Link to="/"><p>Helper</p></Link>

        <div className={s.buttons}>
          <Link to={"/login"}>Вход</Link>
          <Link to={"/reg"}>Регистрация</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;