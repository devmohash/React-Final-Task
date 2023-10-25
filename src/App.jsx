import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import SiteNav from "./Components/SiteNav/SiteNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./Components/TvShows/TvShows";
import Blogs from "./Components/Blogs/Blogs";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SiteNav />

        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/tv-shows" element={<TvShows />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route
            path="/moviedetails/:media_type/:id/:title"
            element={<MovieDetails />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
