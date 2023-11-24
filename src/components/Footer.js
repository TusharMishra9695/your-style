import React from "react";
import { footerContent, footerList } from "../utils/content";
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
          const { heading, list } = items;
          return (
            <div key={index} className="footer_listing">
              <h2> {heading}</h2>
              <ul>
                {list.map((item, id) => {
                  return <li key={id}>{item.name}</li>;
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

          <button>{footerContent.subs}</button>
        </div>
      </div>
    </footer>
  );
}
