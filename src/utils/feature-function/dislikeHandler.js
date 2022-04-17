import axios from "axios";
import { toast } from "react-toastify";

export const dislikeHandler = async (e, id, dispatch, likedVideos) => {
  e.preventDefault();
  try {
    const res = await axios.delete(`/api/user/likes/${id}`);
    if (res.status === 200) {
      dispatch({
        type: "LIKED_VIDEOS",
        payload: likedVideos.filter((video) => video.id !== id),
      });
      toast("you disliked this video");
    } else {
      toast("you already disliked this video");
    }
  } catch (error) {
    toast("you already disliked this video");
    console.log(error);
  }
};
