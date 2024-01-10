import React from "react";
import { footerContent, footerList } from "../utils/content";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Footer() {
  const navFooterData = useSelector((state) => state.apiSlice.navFooterData);
  if (navFooterData) {
    console.log("true");
  } else {
    console.log("false");
  }
  return (
    <footer>
      <div className="footer">
        <h3>{footerContent.sale}</h3>
      </div>
      <hr />
      <div className="footer mid_part">
        <div className="footer_listing">
          <h2> Categories</h2>
          <ul>
            {navFooterData &&
              navFooterData[0].nav.pages_name.map((item, index) => {
                const { page_category } = item;
                return (
                  <Link to={`${page_category}`} key={index}>
                    <li className="cursor">{page_category}</li>
                  </Link>
                );
              })}
          </ul>
        </div>

        {navFooterData &&
          navFooterData[0].footer.left_sec.map((item, index) => {
            const { heading, sub_heading } = item;
            return (
              <div key={index} className="footer_listing">
                <h2> {heading}</h2>
                <ul>
                  {sub_heading.map((item, id) => {
                    const { link, name } = item;
                    return (
                      <Link to={link} key={id}>
                        <li className="cursor">{name}</li>
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
