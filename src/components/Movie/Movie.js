import "./Movie.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, React } from "react";
import { fetchMovies, getAllMovies } from "../../features/movies/moviesSlice";
import { Link } from "react-router-dom";

const Movie = () => {
  //   const allMovies = data;
  //   console.log(allMovies);

  const dispatch = useDispatch();
  const allMovies = useSelector(getAllMovies);

  if (allMovies.length > 1) {
    // console.log(allMovies);
  }
  

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const renderMovies =
    allMovies.length > 1 && allMovies ? (
      allMovies.map((ele, i) => {
        let id = ele.id.slice(7);
        id = id.slice(0, id.length - 1);
        // let imageUrl = ele.image.url
        // console.log(typeof(imageUrl))
        // console.log("__________")
        // console.log(ele.image?.url)

        console.log(id);
        return (
          <div className="card" key={id}>
            <div className="cards">
              <img src={ele.image.url} alt="MovieImage" style={{ width: "50%" }} />
            </div>
            <div className="card-body">
              <h2>{ele.title}</h2>
              <Link to={`/single/${id}`}>
                <button className="linkbtn">Play Movie</button>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <h1>Loading</h1>
    );

  return (
    <>
      <div className="main">{renderMovies}</div>
    </>
  );
};

export default Movie;
