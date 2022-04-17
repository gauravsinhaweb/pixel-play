import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlaylistCard } from "../../components/index-component";
import {
  useDataContext,
  useFeatureContext,
} from "../../context/useContext-index";
import { getPlaylistFromBackend } from "../../utils/util-index";

export const Playlist = () => {
  const { playlist, setVideoInPlaylist, setPlaylist } = useFeatureContext();
  const { setLoading } = useDataContext();
  const navigate = useNavigate();
  useEffect(() => {
    getPlaylistFromBackend(
      "get",
      `/api/user/playlists`,
      setPlaylist,
      setLoading
    );
  }, []);
  const playlistCardHandler = (playlistID, videos) => {
    setVideoInPlaylist(videos);
    navigate(`/playlist/${playlistID}`);
  };
  return (
    <>
      <h1 className="text-3xl capitalize text-center my-8 font-semibold">
        your playlist
      </h1>
      <div className="flex justify-center py-8 flex-wrap gap-4">
        <div className=" w-1/6 min-w-fit ">
          <div className="w-full  flex flex-row flex-wrap items-center justify-center gap-8 cursor-pointer">
            {playlist &&
              playlist.map(({ title, _id, videos }) => (
                <div
                  onClick={() => playlistCardHandler(_id, videos)}
                  key={_id}
                  className="rounded-lg w-1/5 overflow-hidden"
                >
                  <PlaylistCard text={title} videos={videos} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
