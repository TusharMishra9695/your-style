import React,{useState} from "react";
import { Link } from "react-router-dom";
import { navContent } from "../utils/content";
import { RiUser3Fill } from "react-icons/ri";
import Login from "./Login";
import "../css/Login.css"

export default function Nav() {
  const [showlog,setshowlog] = useState(false)
  return (
    <div className="child1_p2">
      <Link to="/home" >
      <img src="/imgfiles/logo1-free-img.png" alt="brand logo" className="brand_logo" /></Link>
      
      <ul className="CHILD1_P2_ul">
        <li>
          <Link className="CHILD1_P2_D1_A cursor" to="/everything">{navContent.everything}</Link>
        </li>
        <li>
          <Link className="CHILD1_P2_D1_A cursor" to="/women">{navContent.women}</Link>
        </li>
        <li>
          <Link className="CHILD1_P2_D1_A cursor" to="/men">{navContent.men}</Link>
        </li>
        <li>
          <Link className="CHILD1_P2_D1_A cursor" to="/accessories">
            {navContent.accessories}
          </Link>
        </li>
      </ul>
      <ul className="CHILD1_P2_ul2">
        <li>
          <Link className="CHILD2_P2_D1_A cursor" to="/contact">{navContent.contact}</Link>
        </li>
        <li>
          <Link className="CHILD2_P2_D1_A cursor">{navContent.price}</Link>
        </li>
        <li>
            <RiUser3Fill  className="user_icon" onClick={() => setshowlog(true)}/>
        </li>
      </ul>
      {showlog ? <Login /> : null}

    </div>
  );
}
