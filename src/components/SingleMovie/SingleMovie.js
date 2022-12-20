import { useEffect, React,useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies, getAllMovies, getMovieDetails,movieDescription} from "../../features/movies/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import "./SingleMovie.css";

const SingleMovie = () => {

  const moviesDetails = useSelector(getMovieDetails)
  const dispatch = useDispatch();

  const [desc, setDesc] = useState("");

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log("useEffect is working");
    dispatch(movieDescription());
    console.log("is details are fetching?");
    console.log(moviesDetails);
  }, [dispatch]);






  // console.log(`${id}${image}${title}`)

  const newId = `/title/${id}/`;
  console.log(newId);
  const allMovies = useSelector(getAllMovies);
  const movieDetails = useSelector(getMovieDetails);
  console.log(allMovies);
  let filteredData;
  console.log(movieDetails)
  if(movieDetails){
    console.log(movieDetails)
  }
  if (allMovies.length > 1) {
    filteredData = allMovies.filter((ele) => ele.id === newId);
    dispatch(movieDescription(newId));

    console.log(filteredData);
    console.log(allMovies);
  }
  
  
  return (
    <>
        {filteredData.length > 0 ? (
      <div className="mainDiv">
        <img src={filteredData[0].image.url} alt="MovieImage" style={{ width: "15%" }} />
          <div className="imageSide">
            <h1>{filteredData[0].title}</h1>
            <h4>Genre</h4>
            <h4>Duration</h4>
            <button>Watch Now</button>
            <button>Watch Later</button>
          </div>
      </div>
        ) : (
          <h1>Loading...</h1>
        )}
      <div className="Description">
        <p>{desc}</p>
      </div>
    </>
  );
};

export default SingleMovie;
