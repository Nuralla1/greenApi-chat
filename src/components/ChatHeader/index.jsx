import React from "react";
import styles from "./ChatHeader.module.css";
import Avatar from "../../assets/photo.png";
import { users } from "../../data/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

export const ChatHeader = () => {
  const {
    container,
    wrapper,
    icon_wrapper,
    right_wrapper,
    username,
    secondary_text,
  } = styles;

  return (
    <div className={container}>
      <div className={wrapper}>
        <img src={Avatar} alt="avatar" />
        <div>
          <p className={username}>{users[0].name}</p>
          <p className={secondary_text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className={right_wrapper}>
        <div className={icon_wrapper}>
          <FontAwesomeIcon icon={faPaperclip} />
        </div>
        <div className={icon_wrapper}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  );
};
