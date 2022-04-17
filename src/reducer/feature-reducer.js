export const featureReducer = (featureState, action) => {
  switch (action.type) {
    case "LIKED_VIDEOS":
      return { ...featureState, likedVideo: action.payload };
    case "WATCH_LATER":
      return { ...featureState, watchLater: action.payload };
    case "HISTORY":
      return { ...featureState, history: action.payload };
    case "PLAYLIST_VIDEOS":
      return { ...featureState, videosInPlaylist: action.payload };
    default:
      return featureState;
  }
};
