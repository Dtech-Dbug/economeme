import axios from "axios";

const HOST = "http://localhost:8000/api";

export const createUser = async (values) => {
  return await axios.post(`${HOST}/create-user`, values);
};

export const currentUser = async (authtoken) => {
  return await axios.post(
    `${HOST}/user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
