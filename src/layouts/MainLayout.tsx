import React from "react";
import AlertPanel from "../components/AlertPanel/AlertPanel";
import Header from "../components/Header/Header";

interface IMainLayout {
  children?: React.ReactNode,
  title: string
}

const userIsAuth = false;

const MainLayout : React.FC<IMainLayout> = ({ children, title }) => {
  
  return (
    <>
      <title>{title} {!userIsAuth && "/ Voronin Helper"}</title>

      <Header />
      <AlertPanel />
      

      {children}
    </>
  )
}

export default MainLayout;