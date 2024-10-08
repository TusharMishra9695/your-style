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
