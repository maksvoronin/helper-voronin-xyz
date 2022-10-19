import MainLayout from '../../layouts/MainLayout';
import s from './main.module.scss';

const Main = () => {
  return(
    <MainLayout title={"Добро пожаловать!"}>
      <div className={`container ${s.mainWrapper}`}>
        <div className={s.leftSide}>
          <h1>Добро пожаловать!</h1>
          <p>Helper - сервис, помогающий в поиске неисправностей и оптимизации работы на участке.</p>
          <p className={s.auth}>Для продолжения необходимо авторизоваться</p>

          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <button>Войти</button>
        </div>
      </div>
    </MainLayout>
  )
}

export default Main;