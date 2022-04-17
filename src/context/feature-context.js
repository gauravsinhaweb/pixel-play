import React, { createContext, useContext, useReducer, useState } from "react";
import { featureReducer } from "../reducer/index";

const FeatureContext = createContext();

const FeatureProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playlistInputValue, setPlaylistInputValue] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [videoInPlaylist, setVideoInPlaylist] = useState([]);

  const [featureState, featureDispatch] = useReducer(featureReducer, {
    likedVideo: [],
    watchLater: [],
    history: [],
    videosInPlaylist: [],
  });

  const value = {
    featureState,
    featureDispatch,
    setIsOpen,
    isOpen,
    setPlaylist,
    playlist,

    playlistInputValue,
    setPlaylistInputValue,
    videoInPlaylist,
    setVideoInPlaylist,
  };
  return (
    <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>
  );
};

const useFeatureContext = () => useContext(FeatureContext);

export { FeatureProvider, useFeatureContext };
