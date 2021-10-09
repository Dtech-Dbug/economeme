import axios from "axios";

const HOST = "http://localhost:8000/api";

export const fileUpload = async (values, authtoken) => {
  return await axios.post(`${HOST}/fileupload`, values, {
    headers: {
      authtoken,
    },
  });
};
