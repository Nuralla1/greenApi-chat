import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { Scroll } from "../Scroll";
import { SideBarHeader } from "../SideBarHeader";
import Avatar from "../../assets/photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { users } from "../../data/mockData";

const regEx = /^\+?7[0-9]{10}$/;

export const SideBar = () => {
  const {
    container,
    searchBar,
    contacts_wrapper,
    users_wrapper,
    username,
    time,
  } = styles;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [contacts, setContacts] = useState(users);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (phoneNumber.match(regEx)) {
        sessionStorage.setItem("phoneNumber", phoneNumber);
        alert(`Чат с пользователем ${phoneNumber} начат!`);
        setContacts((prev) => [
          { name: "Новый контакт", id: new Date(), phone: phoneNumber },
          ...prev,
        ]);
      } else {
        alert("Номер должен быть в формате  +7 XXX XXX XXXX");
      }
      setPhoneNumber("");
    }
  };

  const handleClick = (e) => {
    if (phoneNumber.match(regEx)) {
      sessionStorage.setItem("phoneNumber", phoneNumber);
      alert(`Чат с пользователем ${phoneNumber} начат!`);
      setContacts((prev) => [
        { name: "Новый контакт", id: new Date(), phone: phoneNumber },
        ...prev,
      ]);
    } else {
      alert("Номер должен быть в формате  +7 XXX XXX XXXX");
    }
    setPhoneNumber("");
  };
  return (
    <div className={container}>
      <div>
        <SideBarHeader />
      </div>
      <div className={searchBar}>
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleClick} />
        <input
          placeholder="Введите номер телефона для создания чата"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Scroll height="570px">
        <div className={contacts_wrapper}>
          {contacts.map((user) => (
            <div className={users_wrapper} key={user.id}>
              <img src={Avatar} alt="avatar" />
              <div>
                <p className={username}>{user.name}</p>
                <p>{user.phone}</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <p className={time}>21:45</p>
              </div>
            </div>
          ))}
        </div>
      </Scroll>
    </div>
  );
};
