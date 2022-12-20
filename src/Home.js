import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Movie from "./components/Movie/Movie.js";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    let isLogin = sessionStorage.getItem("isLogin");
    // console.log("line8", isLogin);
    if (isLogin) {
      // console.log(isLogin);
      // navigate("/")
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Movie />
      
    </div>
  );
};

export default Home;
