import React from "react";
import BackgroundImg from "../../assets/img/background-img.png";
import logo from "../../assets/img/logo-img.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <section className="main">
        <div className="main-image">
          <img src={BackgroundImg} alt="" />
        </div>
        <div className="text">
          <p>
            Good food is <br />
            The Foundation of <br />
            <span id="happiness">GENUINE HAPPINESS</span>
          </p>
        </div>
        <div className="logo">
        <img
          src={logo}
          onClick={() => dispatch(push("/"))}
          alt=""
          />
          </div>
      </section>
    </>
  );
};

export default Header;
