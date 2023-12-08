import React from "react";
import { Link } from "react-router-dom";

export default function HomeSection1(props) {
  const { para, content, btn, image, link } = props.item;
  return (
    <>
      <div className="inside_img">
        <img src={image} alt="loadng..." className="section_img" />
        <div className="pack_content">
          <p className="sec01_para">{para}</p>
          <h3 className="sec01_content">{content}</h3>
          <Link to={link}>
            <span className="sec01_btn cursor">{btn}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
