import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { container, wrapper, input, login_btn } = styles;

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [token, setToken] = useState("");

  const handleClick = () => {
    if (id && token) {
      sessionStorage.setItem("idInstance", id);
      sessionStorage.setItem("apiToken", token);
      navigate("/");
    }
  };
  return (
    <div className={container}>
      <div className={wrapper}>
        <p>Введите учетные данные из системы GREEN-API</p>
        <input
          className={input}
          placeholder="idInstance"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className={input}
          placeholder="apiToken"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button className={login_btn} onClick={handleClick}>
          Войти
        </button>
      </div>
    </div>
  );
};
