import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navContent } from "../utils/content";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { RiUser3Fill } from "react-icons/ri";
import "../css/Login.css";
import "../css/Nav.css";
import CartModal from "./CartModal";
import { FaShoppingCart } from "react-icons/fa";
import { fetchHomeData } from "../store/slice/apiSlice";

export default function Nav(props) {
  const [showlog, setshowlog] = useState(false);
  const [subCategory, setsubCategory] = useState({
    id: null,
  });
  const quantity = useSelector((state) => state.cartSlice.value.length);
  const navFooterData = useSelector((state) => state.apiSlice.navFooterData);
  const dispatch = useDispatch();
  const [openModal, setopenModal] = useState({
    login: false,
    signup: false,
    cart: false,
  });
  useEffect(() => {
    if (!navFooterData) {
      console.log("enteres");
      dispatch(fetchHomeData());
    }
  }, []);
  const handleClose = (e) => {
    setopenModal({ ...openModal, login: e, signup: e, cart: e });
  };
  return (
    <div className={"child1_p2 child1_p2_bg_rgb"}>
      <Link to="/home">
        <img
          src={
            (navFooterData && navFooterData[0].nav.brand_logo) ||
            "/imgfiles/logo1-free-img.png"
          }
          alt="brand logo"
          className="brand_logo"
        />
      </Link>

      <ul className="CHILD1_P2_ul">
        {navFooterData &&
          navFooterData[0].nav.pages_name.map((items, index) => {
            const { category_logo, page_category, sub_categories } = items;
            return (
              <li key={index}>
                <Link
                  className={"CHILD1_P2_D1_A nav_color_white cursor"}
                  to={`/${page_category}`}
                  onMouseOver={() =>
                    setsubCategory({
                      ...subCategory,
                      id: index,
                    })
                  }
                  onMouseOut={() =>
                    setsubCategory({
                      ...subCategory,
                      id: null,
                    })
                  }
                >
                  {page_category}
                  <div
                    className={
                      subCategory.id == index
                        ? "nav_sub__category_dis"
                        : "nav_sub__category"
                    }
                  >
                    <div>
                      {sub_categories.map((sub_items, index) => {
                        const { name } = sub_items;

                        return (
                          <Link key={index} to={`/${page_category}/${name}`}>
                            <h4> {name}</h4>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
      <ul className="CHILD1_P2_ul2">
        <li>
          <Link className={"CHILD2_P2_D1_A nav_color_white cursor"} to="/">
            {/* Become a Seller */}
          </Link>
        </li>
        <li
          className="show_cart"
          onClick={() => setopenModal({ ...openModal, cart: true })}
        >
          <Link className={"CHILD2_P2_D1_A nav_color_white cursor"}>
            {navContent.price} <FaShoppingCart />{" "}
            {quantity == 0 ? null : quantity}
          </Link>
        </li>
        <li className="show_login">
          <RiUser3Fill
            className={"user_icon user_icon_white"}
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
      <CartModal isOpen={openModal.cart} isClose={handleClose} />
      {/* {showlog ? <Login /> : null} */}
    </div>
  );
}
