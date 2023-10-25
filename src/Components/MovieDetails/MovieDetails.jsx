import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [singleItem, setSingleItem] = useState({});

  const param = useParams();

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/${param.media_type}/${param.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
      )
      .then((res) => {
        setSingleItem(res.data);
        console.log(singleItem);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section
      className="moviedetails py-5 position-relative "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${singleItem.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="moviedetails_card col-lg-10 col-12 d-flex align-items-center position-absolute">
          <figure className="col-lg-4 me-4 col-12">
            <img
              src={`https://image.tmdb.org/t/p/w500/${singleItem.poster_path}`}
              alt={`${singleItem.title} poster`}
              className="w-100 h-100"
            />
          </figure>
          <div className="moviedetails_card_body col-lg-8 col-12">
            <h5 className="mb-3 text-dark">
              {singleItem.release_date?.slice(0, 4)}
            </h5>
            <h2 className="mb-3 text-dark">{singleItem.title}</h2>
            <p className="mb-5 text-dark">{singleItem.overview}</p>
            <div className="d-flex mb-5 align-items-center">
              <a
                href={singleItem.homepage}
                className="pe-4 fs-6 py-2 border-end border-secondary border-2"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="secondary"
                    className="bi bi-play-circle me-2 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                  </svg>
                </span>
                <span className="text-dark">Watch The Trailer</span>
              </a>
              <h5 className="ps-4 me-3 fs-6 text-dark mb-0">
                {singleItem.runtime}mins.
              </h5>
              {singleItem?.genres?.map((element, index) => (
                <h5 className="fs-6 me-1 text-dark mb-0" key={index}>
                  {element.name}.
                </h5>
              ))}
              <h5 className=" ms-2 fs-6 text-dark mb-0">
                {singleItem.release_date}
              </h5>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h5 className="py-2 pe-4 border-end border-secondary border-2 fs-4 fw-bold text-dark">
                  {(Math.round(singleItem.vote_average * 10) / 10).toFixed(1)}
                  <span className="fs-6 text-dark">IMDB</span>
                </h5>

                <h5 className="ms-4 d-flex flex-column fs-5 text-dark">
                  <span className="text-dark fs-6">Status</span>
                  {singleItem.status}
                </h5>
              </div>

              <div>
                <button className="btn btn-dark shadow me-2">+</button>
                <button className="btn btn-light shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
