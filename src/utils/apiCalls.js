import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function getAPI(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    toast.error(err.message, { autoClose: 1000 });
  }
}
export async function postAPI(url, formdata) {
  try {
    const response = await axios.post(url, formdata);
    console.log(response, "kjskj");
    toast.success(response.data.message, { autoClose: 1000 });
    return response.data.message;
  } catch (err) {
    console.log("entered in err");
    toast.error(err.response && err.response, {
      autoClose: 1000,
    });
  }
}
