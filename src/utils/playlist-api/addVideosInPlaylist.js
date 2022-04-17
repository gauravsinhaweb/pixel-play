import axios from "axios";
import { toast } from "react-toastify";

export const addVideosInPlaylist = async (request, url, video, setLoading) => {
  const encodedToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = encodedToken;
  try {
    const response = await axios({
      method: request,
      url: url,
      data: { video },
    });
    setLoading(true);
  } catch (error) {
    toast.warn(
      "you have already performed this action or you need to login first!"
    );
  }
};
