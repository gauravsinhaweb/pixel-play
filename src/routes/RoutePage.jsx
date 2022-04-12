import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { Navbar } from "../components/index-component";
import {
  Explore,
  Hero,
  History,
  LikedVideos,
  Page404,
  Playlist,
  VideoDetail,
  WatchLater,
} from "../pages/pages-index";
import axios from "axios";
import { useDataContext } from "../context/useContext-index";
import { ScrollToTop } from "../services/ScrollToTop";

const VIDEOS_API = "/api/videos";

function RoutePage() {
  const { dataState, dataDispatch } = useDataContext();
  const [loading, setLoading] = useState(false);
  let { categoryName, videoID, all } = useParams;

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
        <Navbar />
        {loading ? (
          <Routes>
            {" "}
            <Route exact path="/" element={<Hero />} />
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
              path={`/video/:${videoID}`}
              element={<VideoDetail />}
            />
            <Route exact path="/page404" element={<Page404 />} />
          </Routes>
        ) : (
          <p>loading...</p>
        )}
      </Router>
    </>
  );
}

export default RoutePage;
