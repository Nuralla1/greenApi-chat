import React from "react";
import styles from "./SideBarHeader.module.css";
import Avatar from "../../assets/photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faGear } from "@fortawesome/free-solid-svg-icons";

export const SideBarHeader = () => {
  const { container, wrapper, icon_wrapper, right_wrapper } = styles;

  return (
    <div className={container}>
      <div className={wrapper}>
        <img src={Avatar} alt="avatar" />
      </div>
      <div className={right_wrapper}>
        <div className={icon_wrapper}>
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className={icon_wrapper}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  );
};
