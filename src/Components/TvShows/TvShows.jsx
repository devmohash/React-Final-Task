import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TvShows = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
      )
      .then((res) =>
        setData(res.data.results.filter((item) => item.media_type === "tv"))
      );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {data.map((element, index) => {
            return (
              <div key={index} className="col-lg-3 col-12  ">
                <div className="d-flex flex-column align-items-center moviecard mb-5 shadow  ">
                  <figure className="w-100 position-relative">
                    <div className="viewdetails position-absolute top-50 start-50 translate-middle ">
                      <Link
                        to={`/moviedetails/${element.media_type}/${
                          element.id
                        }/${element.title || element.name}`}
                        className="btn btn-danger rounded fw-bold"
                      >
                        View Details
                      </Link>
                    </div>
                    <div className="rating position-absolute d-flex justify-content-center align-items-center fw-bold top-0 end-0 ">
                      {(Math.round(element.vote_average * 10) / 10).toFixed(1)}
                    </div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                      alt={`${element.title} poster`}
                      className="w-100"
                    />
                  </figure>
                  <h3 className="fs-6 text-center">
                    {element.title || element.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TvShows;
