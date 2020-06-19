import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg" alt=""
      ></img>
      <Link to="./Form">
        <button className="shop-btn" onClick={() => history.push("/Form")}>
          Order Now!
        </button>
      </Link>
    </div>
  );
}
