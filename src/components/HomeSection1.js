import React from "react";
import { Link } from "react-router-dom";

export default function HomeSection1(props) {
  const { para, description, title, link } = props.item;
  return (
    <>
      <div className="inside_img">
        <img
          src="https://your-style.vercel.app/imgfiles/women-fashion-free-img.jpg"
          alt="loadng..."
          className="section_img"
        />
        <div className="pack_content">
          <p className="sec01_para">{title}</p>
          <h3 className="sec01_content">{description}</h3>
          <Link to="/everything">
            <span className="sec01_btn cursor">shop now</span>
          </Link>
        </div>
      </div>
    </>
  );
}
