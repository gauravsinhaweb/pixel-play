import axios from "axios";

export const useAxios = async (request, url, video, dispatch, type) => {
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
      } else if (type === "WATCH_LATER") {
        dispatch({ type: type, payload: response.data.watchlater });
      } else if (type === "HISTORY") {
        dispatch({ type: type, payload: response.data.history });
      }
    }
    // saving the encodedToken in the localStorage
  } catch (error) {
    console.log(error);
  }
};
