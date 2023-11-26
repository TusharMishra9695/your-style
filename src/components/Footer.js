import React from "react";
import { footerContent, footerList } from "../utils/content";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <h3>{footerContent.sale}</h3>
      </div>
      <hr />
      <div className="footer mid_part">
        <div className="brand_title">
          <img
            src="/imgfiles/logo@2x-free-img.png"
            alt=""
            className="brand_logo_02"
          />
          <h4>{footerContent.look}</h4>
        </div>
        {footerList.map((items, index) => {
          const { heading, link, list } = items;
          return (
            <div key={index} className="footer_listing">
              <h2> {heading}</h2>
              <ul>
                {list.map((item, id) => {
                  return (
                    <Link to={link}>
                      <li key={id} className="cursor">
                        {item.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="subs">
          <h2>{footerContent.subs}</h2>
          <div className="inside_subs">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your email address..."
            />
          </div>

          <button className="cursor">{footerContent.subs}</button>
        </div>
      </div>
    </footer>
  );
}
