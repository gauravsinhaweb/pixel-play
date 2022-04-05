import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/index-component";
import {
  Explore,
  Hero,
  History,
  LikedVideos,
  Page404,
  Playlist,
  WatchLater,
} from "../pages/pages-index";

function RoutePage() {
  return (
    <>
      <Router>
        {" "}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/liked" element={<LikedVideos />} />
          <Route exact path="/watchlater" element={<WatchLater />} />
          <Route exact path="/playlist" element={<Playlist />} />
          <Route exact path="/page404" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default RoutePage;
