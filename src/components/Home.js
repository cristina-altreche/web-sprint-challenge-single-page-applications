import React from "react";
import { useHistory, Link } from "react-router-dom";
import SmartOrder from './SmartOrder'

export default function Home() {
  const history = useHistory();

  return (
    <div className="home-wrapper">
      <SmartOrder/>
      <img className="home-image" src="https://wallpaperaccess.com/full/866645.jpg" alt=""  width="100%" height="100%" ></img>
      <Link to="./Form">
        {/* <button className="shop-btn" onClick={() => history.push("/Form")}>
          Order Now!
        </button> */}
      </Link>
    </div>
  );
}
