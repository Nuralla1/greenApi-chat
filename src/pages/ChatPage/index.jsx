import React, { useState } from "react";
import { ChatHeader, ChatFooter, ChatBody } from "../../components";
import styles from "./ChatPage.module.css";

export const ChatPage = () => {
  const { container, chat_wrapper } = styles;
  const [outMsgs, setOutMsgs] = useState([]);
  return (
    <div className={container}>
      <ChatHeader />
      <div className={chat_wrapper}>
        <ChatBody outMsgs={outMsgs} />
      </div>
      <ChatFooter setOutMsgs={setOutMsgs} />
    </div>
  );
};
