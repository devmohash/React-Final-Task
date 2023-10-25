import { Link } from "react-router-dom";
import "./MovieCard.css";
import Spinner from "react-bootstrap/Spinner";

const MovieCard = (props) => {
  const { allData, filteredData, spinner } = props;

  if (spinner) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
    );
  }

  return (
    <div className="row">
      {filteredData.map((element, index) => {
        return (
          <div key={index} className="col-lg-3 col-12  ">
            <div className="d-flex flex-column align-items-center moviecard mb-5 shadow  ">
              <figure className="w-100 position-relative">
                <div className="viewdetails position-absolute top-50 start-50 translate-middle ">
                  <Link
                    to={`/moviedetails/${element.media_type}/${element.id}/${
                      element.title || element.name
                    }`}
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
  );
};

export default MovieCard;
