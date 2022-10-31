import React from "react";
import AlertPanel from "../components/AlertPanel/AlertPanel";
import Sidebar from "../components/Sidebar/Sidebar";
import s from './dashboardlayout.module.scss';

interface IDashboardLayout {
  children?: React.ReactNode,
  title: string
}

const DashboardLayout : React.FC<IDashboardLayout> = ({ children, title }) => {
  
  return (
    <div className={s.dashboardLayout}>
      <title>{title}</title>

      <AlertPanel />
      <Sidebar />

      {children}
    </div>
  )
}

export default DashboardLayout;