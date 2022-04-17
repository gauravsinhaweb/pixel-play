import React from "react";
import {
  useDataContext,
  useFeatureContext,
} from "../../context/useContext-index";
import { addVideosInPlaylist, postPlaylist } from "../../utils/util-index";

export const Modal = (props) => {
  const { videoID } = props;
  const {
    setIsOpen,
    setPlaylist,
    playlist,
    playlistInputValue,
    setPlaylistInputValue,
    setVideoInPlaylist,
  } = useFeatureContext();

  const { dataState, setLoading } = useDataContext();
  const videosData = dataState.videos;

  const closeModalHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setIsOpen(false);
    }
  };
  const addPlaylistHandler = () => {
    postPlaylist(
      "post",
      "/api/user/playlists",
      playlistInputValue,
      setPlaylist,
      setLoading
    );
    setPlaylistInputValue("");
  };

  const checkedHandler = (playlistID) => {
    const currentVideo = videosData.find((video) => video.id === videoID);
    addVideosInPlaylist(
      "post",
      `/api/user/playlists/${playlistID}`,
      currentVideo,
      setLoading
    );
  };

  return (
    <>
      <div>
        <div
          onClick={(e) => closeModalHandler(e)}
          className="fixed backdrop inset-0 z-10 flex items-center justify-center backdrop-background"
        >
          <div className="absolute p-8 bg-gray-700">
            <h1 className="text-2xl px-12 pb-4 capitalize kodchasan">
              your playlist
            </h1>
            <ul className="py-4 text-xl">
              {playlist &&
                playlist.map(({ title, _id }) => (
                  <li
                    key={_id}
                    className="flex py-2 items-center text-xl capitalize gap-4"
                  >
                    <input
                      onChange={() => checkedHandler(_id)}
                      type="checkbox"
                      id={_id}
                      className=" h-4 w-4"
                      placeholder="name"
                    />
                    <label htmlFor={_id}>{title}</label>
                  </li>
                ))}
            </ul>
            {playlist.length === 0 && (
              <div className="text-center py-8 font-bold work-sans text-xl text-gray-400 ">
                Create a playlist
              </div>
            )}
            <div className="flex items-center justify-center my-4 text-black text-lg">
              <input
                type="text"
                value={playlistInputValue}
                onChange={(e) => setPlaylistInputValue(e.target.value)}
                placeholder="Enter playlist"
                className="border-0 outline-0 rounded px-4 py-1"
              />
            </div>
            <button
              disabled={playlistInputValue.length === 0}
              onClick={addPlaylistHandler}
              className="rounded border-2 border-gray-900 bg-gray-800 p-2 px-4 w-full"
            >
              create playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
