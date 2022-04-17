import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../components/index-component";
import { useDataContext } from "../context/useContext-index";
import {
  Explore,
  Hero,
  History,
  LikedVideos,
  Login,
  Page404,
  Playlist,
  SignUp,
  VideoDetail,
  VideosInPlaylist,
  WatchLater,
} from "../pages/pages-index";
import { ScrollToTop } from "../services/ScrollToTop";

const VIDEOS_API = "/api/videos";

function RoutePage() {
  const { loading, setLoading, dataState, dataDispatch } = useDataContext();
  const [searchValue, setSearchValue] = useState();
  let { categoryName, videoID } = useParams;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const videos = await axios(VIDEOS_API);
      const categories = await axios("/api/categories");
      dataDispatch({ type: "SET_VIDEOS", payload: videos.data.videos });
      dataDispatch({
        type: "SET_CATEGORIES",
        payload: categories.data.categories,
      });

      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar setSearchValue={setSearchValue} />
        {loading ? (
          <Routes>
            <Route
              exact
              path="/"
              element={<Hero searchValue={searchValue} />}
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route
              exact
              path={`/explore/?category/:${categoryName}`}
              element={<Explore />}
            />
            <Route exact path={`/explore`} element={<Explore />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/liked" element={<LikedVideos />} />
            <Route exact path="/watchlater" element={<WatchLater />} />
            <Route exact path="/playlist" element={<Playlist />} />
            <Route
              exact
              path={"/playlist/:playlistID"}
              element={<VideosInPlaylist />}
            />

            <Route
              exact
              path={`/video/:${videoID}`}
              element={<VideoDetail />}
            />
            <Route exact path="/page404" element={<Page404 />} />
          </Routes>
        ) : (
          <div className="flex items-center h-screen capitalize justify-center text-3xl font-semibold">
            <div id="spinnerBody" className="bg-gray-900">
              <div className="sk-cube-grid ">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
              </div>
            </div>
          </div>
        )}
        <ToastContainer
          toastStyle={{ color: "#fafafa", backgroundColor: "#e11d48" }}
        />
      </Router>
    </>
  );
}

export default RoutePage;
