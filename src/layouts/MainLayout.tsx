import React from "react";
import AlertPanel from "../components/AlertPanel/AlertPanel";
import Header from "../components/Header/Header";

interface IMainLayout {
  children?: React.ReactNode,
  title: string
}

const MainLayout : React.FC<IMainLayout> = ({ children, title }) => {
  
  return (
    <>
      <title>{title} / Voronin Helper</title>

      <Header />
      <AlertPanel />
      

      {children}
    </>
  )
}

export default MainLayout;