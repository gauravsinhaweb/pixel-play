import axios from "axios";
import { toast } from "react-toastify";

export const getPlaylistFromBackend = async (
  request,
  url,
  setPlaylist,
  setLoading
) => {
  const encodedToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = encodedToken;
  try {
    const response = await axios({
      method: request,
      url: url,
    });
    setPlaylist(response.data.playlists);
    setLoading(true);
  } catch (error) {
    toast.warn(
      "you have already performed this action or you need to login first!"
    );
  }
};
