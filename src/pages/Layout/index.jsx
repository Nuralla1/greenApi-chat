import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { SideBar } from "../../components";

export const Layout = () => {
  const { container, background } = styles;
  const navigate = useNavigate();
  const idInstance = sessionStorage.getItem("idInstance");
  const apiToken = sessionStorage.getItem("apiToken");

  useEffect(() => {
    if (!idInstance || !apiToken) {
      navigate("/login");
    }
  });

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
