import React, { useEffect, useState } from "react";
import styles from "./ChatBody.module.css";
import { useAPIService } from "../../hooks";
import { Scroll } from "../Scroll";

export const ChatBody = ({ outMsgs }) => {
  const [inMsgs, setInMsgs] = useState([]);

  const [flag, setFlag] = useState(false);

  const { getMessage, deleteMessage } = useAPIService();
  const phoneNumber = sessionStorage.getItem("phoneNumber");

  useEffect(() => {
    if (phoneNumber) {
      const connectChat = async () => {
        const getResponse = await getMessage();
        if (getResponse.data) {
          getResponse.data.body.timestamp =
            getResponse.data?.body?.timestamp * 1000;
          setInMsgs((prev) => [...prev, getResponse.data]);
          await deleteMessage(getResponse.data.receiptId);
        } else {
          setFlag((prev) => !prev);
        }
      };
      const interval = setInterval(async () => await connectChat(), 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  const allMessages = [...inMsgs, ...outMsgs];

  const sortedMessages = allMessages.sort(
    (a, b) => a?.body?.timestamp - b?.body?.timestamp
  );
  return (
    <div className={styles.chatContainer}>
      <Scroll height="560px" className={styles.messageContainer}>
        {sortedMessages.map((msg, index) => (
          <div
            key={msg.receiptId + index}
            className={
              msg?.body?.senderData?.senderName === "Вы"
                ? styles.outgoingMessage
                : styles.incomingMessage
            }
          >
            <p className={styles.senderName}>
              {msg?.body?.senderData?.senderName}
            </p>
            <span className={styles.timestamp}>
              {new Date(msg?.body?.timestamp).toLocaleDateString("en-GB")}
            </span>
            <p className={styles.message}>
              {msg?.body?.messageData?.textMessageData?.textMessage}
            </p>
          </div>
        ))}
        {/* {inMsgs?.map((msg, index) => (
          <div key={msg.receiptId + index} className={styles.incomingMessage}>
            <p className={styles.senderName}>
              {msg?.body?.senderData?.senderName}
            </p>
            <span className={styles.timestamp}>
              {new Date(msg?.body?.timestamp * 1000).toLocaleDateString(
                "en-GB"
              )}
            </span>
            <p className={styles.message}>
              {msg?.body?.messageData?.textMessageData?.textMessage}
            </p>
          </div>
        ))}
        {outMsgs?.map((msg, index) => (
          <div key={index} className={styles.outgoingMessage}>
            <p className={styles.sender}>{msg?.sender}</p>
            <span className={styles.timestamp}>
              {msg.date.toLocaleDateString("en-GB")}
            </span>
            <p className={styles.message}>{msg?.message}</p>
          </div>
        ))}  */}
      </Scroll>
    </div>
    // <div>
    //   <Scroll height="560px">
    //     {inMsgs?.map((msg, index) => (
    //       <div key={msg.receiptId + index}>
    //         <p>{msg?.body?.senderData?.senderName}</p>
    //         <span>
    //           {new Date(msg?.body?.timestamp * 1000).toLocaleDateString(
    //             "en-GB"
    //           )}
    //         </span>
    //         <p>{msg?.body?.messageData?.textMessageData?.textMessage}</p>
    //       </div>
    //     ))}
    //     {outMsgs?.map((msg, index) => (
    //       <div key={index}>
    //         <p>{msg?.sender}</p>
    //         <span>{msg.date.toLocaleDateString("en-GB")}</span>
    //         <p>{msg?.message}</p>
    //       </div>
    //     ))}
    //   </Scroll>
    // </div>
  );
};
