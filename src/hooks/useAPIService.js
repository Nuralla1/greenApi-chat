import axios from "axios";

const baseURL = "https://api.green-api.com";

const instance = axios.create({
  baseURL,
});

export const useAPIService = () => {
  const idInstance = sessionStorage.getItem("idInstance");
  const apiToken = sessionStorage.getItem("apiToken");
  const phoneNumber = sessionStorage.getItem("phoneNumber");

  const sendMessage = async (message) => {
    const body = {
      chatId: `${phoneNumber}@c.us`,
      message,
    };
    try {
      const res = await instance.post(
        `/waInstance${idInstance}/SendMessage/${apiToken}`,
        body
      );
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  const getMessage = async () => {
    try {
      const res = await instance.get(
        `/waInstance${idInstance}/receiveNotification/${apiToken}`
      );
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMessage = async (id) => {
    try {
      const res = await instance.delete(
        `/waInstance${idInstance}/deleteNotification/${apiToken}/${id}`
      );
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  return { sendMessage, getMessage, deleteMessage };
};
