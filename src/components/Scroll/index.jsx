import React, { FC, ReactNode } from "react";
import styles from "../Scroll/Scroll.module.css";

const Scroll = ({
  children,
  height = "10%",
  minheight = "10px",
  className,
}) => {
  const { overscroll } = styles;
  return (
    <div
      className={`${overscroll} ${className}`}
      style={{ maxHeight: height, minHeight: minheight }}
    >
      {children}
    </div>
  );
};

export { Scroll };
