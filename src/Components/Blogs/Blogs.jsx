import blogImg from "../Assets/dexe47y-93532dcd-45cd-4381-8758-b6c5535c3a4e.jpg";

const Blogs = () => {
  return (
    <section className="blog position-relative">
      <figure className="w-100">
        <img className="w-100" src={blogImg} alt="blogbanner" />
      </figure>

      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <h2 className="fs-1 text-light mb-4">Movies Today</h2>
        <h3 className="fs-5 text-light">
          Please Have A <span className="fs-1">Seat </span>
        </h3>
        <h5 className="fs-5 text-light">
          More Than 10,000 Movies and TVs Shows
        </h5>
      </div>
    </section>
  );
};

export default Blogs;
