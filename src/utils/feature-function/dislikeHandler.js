import axios from "axios";

export const dislikeHandler = async (e, id, dispatch, likedVideos) => {
  e.preventDefault();
  try {
    const res = await axios.delete(`/api/user/likes/${id}`);
    if (res.status === 200) {
      console.log(res);
      dispatch({
        type: "LIKED_VIDEOS",
        payload: likedVideos.filter((video) => video.id !== id),
      });
    }
  } catch (error) {
    console.log(error);
  }
};
