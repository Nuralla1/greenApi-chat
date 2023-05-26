import React, { useState } from "react";
import styles from "./ChatFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { useAPIService } from "../../hooks";

export const ChatFooter = ({ setOutMsgs }) => {
  const { sendMessage } = useAPIService();
  const [msg, setMsg] = useState("");

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const response = await sendMessage(msg);
      console.log(response);
      setOutMsgs((prev) => [
        ...prev,
        {
          receiptId: Math.random(),
          body: {
            senderData: {
              senderName: "Вы",
            },
            timestamp: Date.now(),
            messageData: {
              textMessageData: {
                textMessage: msg,
              },
            },
          },
        },
      ]);
      setMsg("");
    }
  };

  const handleClick = async () => {
    const response = await sendMessage(msg);
    console.log(response);
    setOutMsgs((prev) => [
      ...prev,
      {
        receiptId: Math.random(),
        body: {
          senderData: {
            senderName: "Вы",
          },
          timestamp: Date.now(),
          messageData: {
            textMessageData: {
              textMessage: msg,
            },
          },
        },
      },
    ]);
    {
      msg?.body?.messageData?.textMessageData?.textMessage;
    }
    setMsg("");
  };

  const { container, wrapper, right_wrapper, icon_wrapper, input } = styles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={icon_wrapper}>
          <FontAwesomeIcon icon={faSmile} />
        </div>
        <div>
          <input
            className={input}
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
      <div className={right_wrapper}>
        <div className={icon_wrapper} onClick={handleClick}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
        <div className={icon_wrapper}>
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
      </div>
    </div>
  );
};
