import axios from "axios";

const HOST = "http://localhost:8000/api";
export const fileUpload = async (value, authtoken) => {
  return await axios.post(`${HOST}/fileupload`, value, {
    headers: {
      authtoken,
    },
  });
};
