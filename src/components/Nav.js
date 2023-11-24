import React,{useState} from "react";
import { Link } from "react-router-dom";
import { navContent } from "../utils/content";
import { RiUser3Fill } from "react-icons/ri";

export default function Nav() {
  const [showlog,setshowlog] = useState(false)
  return (
    <div className="child1_p2">
      <img src="/imgfiles/logo1-free-img.png" alt="" className="brand_logo" />
      <ul className="CHILD1_P2_ul">
        <li>
          <Link className="CHILD1_P2_D1_A cursor">{navContent.everything}</Link>
        </li>
        <li>
          <Link className="CHILD1_P2_D1_A cursor">{navContent.women}</Link>
        </li>
        <li>
          <Link className="CHILD1_P2_D1_A cursor">{navContent.men}</Link>
        </li>
        <li>
          <Link className="CHILD1_P2_D1_A cursor">
            {navContent.accessories}
          </Link>
        </li>
      </ul>
      <ul className="CHILD1_P2_ul2">
        <li>
          <Link className="CHILD2_P2_D1_A cursor">{navContent.about}</Link>
        </li>
        <li>
          <Link className="CHILD2_P2_D1_A cursor">{navContent.contact}</Link>
        </li>
        <li>
          <Link className="CHILD2_P2_D1_A cursor">{navContent.price}</Link>
        </li>
        <li>
            <RiUser3Fill  className="user_icon"/>
        </li>
      </ul>
    </div>
  );
}
