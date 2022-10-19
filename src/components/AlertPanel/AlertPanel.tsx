import { IAlert } from "../../types/alert.interface";
import Alert from "../Alert/Alert";
import s from './alertpanel.module.scss';

const AlertPanel = () => {

  const alerts: IAlert[] = [
    // {
    //   id: 1,
    //   type: "default",
    //   title: "Default alert",
    //   message: "Проверка уведомлений",
    //   time: 30
    // },
    // {
    //   id: 2,
    //   type: "error",
    //   title: "Error alert",
    //   message: "Проверка уведомлений",
    //   time: 30
    // }
  ];

  return (
    <div className={s.alertPanel}>
      {
        alerts && alerts.map((e: IAlert) => <Alert
          key={e.id}
          {...e}
          onClick={() => { }}
        />)
      }
    </div>
  )
}

export default AlertPanel;