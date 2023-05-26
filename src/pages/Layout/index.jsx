import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { SideBar } from "../../components";

export const Layout = () => {
  const { container, background } = styles;

  return (
    <>
      <div className={background}>
        <div className={container}>
          <SideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
