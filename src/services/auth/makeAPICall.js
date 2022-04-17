import axios from "axios";
import { toast } from "react-toastify";

export const makeAPICall = async (
  request,
  url,
  video,
  dispatch,
  type,
  setLoading
) => {
  const encodedToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = encodedToken;
  try {
    const response = await axios({
      method: request,
      url: url,
      data: { video },
    });
    if (response.status === 201) {
      if (type === "LIKED_VIDEOS") {
        dispatch({ type: type, payload: response.data.likes });
        toast.success("You liked this video!");
      } else if (type === "WATCH_LATER") {
        dispatch({ type: type, payload: response.data.watchlater });
        toast.success("video added to Watch Later!");
      } else if (type === "HISTORY") {
        dispatch({ type: type, payload: response.data.history });
      }
    }
    setLoading(true);
  } catch (error) {
    toast.warn(
      "you have already performed this action or you need to login first!"
    );
  }
};
