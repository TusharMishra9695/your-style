import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navContent } from "../utils/content";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { RiUser3Fill } from "react-icons/ri";
import "../css/Login.css";

export default function Nav() {
  const [showlog, setshowlog] = useState(false);
  const [openModal, setopenModal] = useState({
    login: false,
    signup: false,
  });
  const handleClose = (e) => {
    setopenModal({ ...openModal, login: e, signup: e });
  };
  return (
    <div
      className={
        (window.location.pathname === "/home") |
        (window.location.pathname === "/") |
        (window.location.pathname === "/contact")
          ? "child1_p2 child1_p2_bg_rgb"
          : "child1_p2"
      }
    >
      <Link to="/home">
        {(window.location.pathname === "/home") |
        (window.location.pathname === "/") ? (
          <img
            src="/imgfiles/logo1-free-img.png"
            alt="brand logo"
            className="brand_logo"
          />
        ) : (
          <img
            src="/imgfiles/logo@2x-free-img.png"
            alt="brand logo"
            className="brand_logo"
          />
        )}
      </Link>

      <ul className="CHILD1_P2_ul">
        <li>
          <Link
            className={
              window.location.pathname === "/everything"
                ? "CHILD1_P2_D1_A nav_color_blue cursor"
                : (window.location.pathname === "/home") |
                  (window.location.pathname === "/")
                ? "CHILD1_P2_D1_A nav_color_white cursor"
                : "CHILD1_P2_D1_A nav_color_black cursor"
            }
            to="/everything"
          >
            {navContent.everything}
          </Link>
        </li>
        <li>
          <Link
            className={
              window.location.pathname === "/women"
                ? "CHILD1_P2_D1_A nav_color_blue cursor"
                : (window.location.pathname === "/home") |
                  (window.location.pathname === "/")
                ? "CHILD1_P2_D1_A nav_color_white cursor"
                : "CHILD1_P2_D1_A nav_color_black cursor"
            }
            to="/women"
          >
            {navContent.women}
          </Link>
        </li>
        <li>
          <Link
            className={
              window.location.pathname === "/men"
                ? "CHILD1_P2_D1_A nav_color_blue cursor"
                : (window.location.pathname === "/home") |
                  (window.location.pathname === "/")
                ? "CHILD1_P2_D1_A nav_color_white cursor"
                : "CHILD1_P2_D1_A nav_color_black cursor"
            }
            to="/men"
          >
            {navContent.men}
          </Link>
        </li>
        <li>
          <Link
            className={
              window.location.pathname === "/accessories"
                ? "CHILD1_P2_D1_A nav_color_blue cursor"
                : (window.location.pathname === "/home") |
                  (window.location.pathname === "/")
                ? "CHILD1_P2_D1_A nav_color_white cursor"
                : "CHILD1_P2_D1_A nav_color_black cursor"
            }
            to="/accessories"
          >
            {navContent.accessories}
          </Link>
        </li>
      </ul>
      <ul className="CHILD1_P2_ul2">
        <li>
          <Link
            className={
              window.location.pathname === "/contact"
                ? "CHILD2_P2_D1_A nav_color_blue cursor"
                : (window.location.pathname === "/home") |
                  (window.location.pathname === "/")
                ? "CHILD2_P2_D1_A nav_color_white cursor"
                : "CHILD2_P2_D1_A nav_color_black cursor"
            }
            to="/contact"
          >
            {navContent.contact}
          </Link>
        </li>
        <li>
          <Link
            className={
              window.location.pathname === "/price"
                ? "CHILD2_P2_D1_A nav_color_blue cursor"
                : (window.location.pathname === "/home") |
                  (window.location.pathname === "/")
                ? "CHILD2_P2_D1_A nav_color_white cursor"
                : "CHILD2_P2_D1_A nav_color_black cursor"
            }
          >
            {navContent.price}
          </Link>
        </li>
        <li className="show_login">
          <RiUser3Fill
            className={
              (window.location.pathname === "/home") |
              (window.location.pathname === "/") |
              (window.location.pathname === "/contact")
                ? "user_icon user_icon_white"
                : "user_icon"
            }
            onClick={() => setshowlog(true)}
          />
          <div className="home_p2_hover">
            <div
              onClick={() =>
                setopenModal({ ...openModal, login: true, signup: false })
              }
            >
              <span>Login</span>
            </div>
            <div
              onClick={() =>
                setopenModal({ ...openModal, login: false, signup: true })
              }
            >
              <span>SignUp</span>
            </div>
          </div>
        </li>
      </ul>
      <LoginModal isOpen={openModal.login} isClose={handleClose} />
      <SignupModal isOpen={openModal.signup} isClose={handleClose} />
      {/* {showlog ? <Login /> : null} */}
    </div>
  );
}
