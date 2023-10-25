import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";
import heroImg from "../Assets/movie-9pvmdtvz4cb0xl37.jpg";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [spinner, setSpinner] = useState(false);

  const handleSearch = (e) => {
    const searchText = e.target.value.trim().toLowerCase();
    setSearchItem(searchText);
  };
  const handleSelect = (e) => {
    setSelectedFilter(e.target.value);
  };

  const getData = () => {
    setSpinner(true);
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
      )
      .then((res) => {
        setSpinner(false);
        setData(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const filterItems = () => {
    if (searchItem) {
      const filtered = data.filter((item) => {
        return (
          item.title?.toLowerCase().includes(searchItem) ||
          item.name?.toLowerCase().includes(searchItem)
        );
      });
      setFilteredItems(filtered);
    } else {
      if (selectedFilter === "all") {
        setFilteredItems(data);
      } else {
        const filtered = data.filter((item) => {
          return item.media_type === selectedFilter;
        });
        setFilteredItems(filtered);
      }
    }
  };

  useEffect(() => {
    filterItems();
  }, [searchItem, selectedFilter, data]);

  return (
    <section className="home  ">
      <figure className="w-100 ">
        <img className="w-100 shadow " src={heroImg} alt="" />
      </figure>
      <div className="container">
        <div className="form bg-secondary my-5 p-4 row justify-content-between rounded shadow">
          <div className="col-lg-5 mb-md-0 mb-4">
            <div className="input-group ">
              <span
                className="btn bg-light"
                id="basic-addon1"
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search for movies tvshows documentary & more..."
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="col-lg-3 ">
            <select onChange={handleSelect} className="form-select  col-lg-3">
              <option value="all">All</option>
              <option value="movie">Movies</option>
              <option value="tv">TvShows</option>
            </select>
          </div>
        </div>
        <MovieCard
          allData={data}
          filteredData={filteredItems}
          spinner={spinner}
        />
      </div>
    </section>
  );
};

export default Home;
