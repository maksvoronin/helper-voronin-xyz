import React from "react";
import AlertPanel from "../components/AlertPanel/AlertPanel";

interface IDashboardLayout {
  children?: React.ReactNode,
  title: string
}

const DashboardLayout : React.FC<IDashboardLayout> = ({ children, title }) => {
  
  return (
    <>
      <title>{title}</title>

      <AlertPanel />
      

      {children}
    </>
  )
}

export default DashboardLayout;