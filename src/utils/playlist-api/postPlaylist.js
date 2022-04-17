import axios from "axios";
import { toast } from "react-toastify";

export const postPlaylist = async (
  request,
  url,
  playlistInputValue,
  setPlaylist,
  setLoading
) => {
  const encodedToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = encodedToken;
  try {
    const response = await axios({
      method: request,
      url: url,
      data: { playlist: { title: playlistInputValue } },
    });
    setPlaylist(response.data.playlists);
    setLoading(true);
  } catch (error) {
    toast.warn(
      "you have already performed this action or you need to login first!"
    );
  }
};
