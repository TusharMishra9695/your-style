import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../css/profile.css";

export default function Profile() {
  return (
    <div>
      <Nav />
      <div className="common_inside">
        <div className="profile_sec">
          <div className="left_sec">
            <ul>
              <li>Profile Info</li>
              <li>My orders</li>
              <li>My wishlist</li>
              <li>Notifications</li>
              <li>My reviews and ratings</li>
            </ul>
          </div>
          <div className="rgt_sec">
            <div className="names spaces">
              <input
                disabled
                type="text"
                id="outlined-disabled"
                label="Firstname"
                placeholder="Tushar"
                className="common_input"
              />
              <input
                disabled
                type="text"
                id="outlined-disabled"
                label="Lastname"
                className="common_input"
                placeholder="Mishra"
              />
            </div>
            <div className="gender spaces">
              <h1>Gender</h1>
              <div className="spaces">
                <div>
                  <input type="radio" name="gender" id="male" />
                  <label className="gender_name">Male</label>
                </div>
                <div>
                  <input type="radio" name="gender" id="female" disabled />
                  <label className="gender_name">Female</label>
                </div>
              </div>
            </div>
            <div className="pad_spaces ">
              <h1>Email</h1>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="test123@gmail.com"
                className="common_input"
                disabled
              />
            </div>
            <div className="pad_spaces ">
              <h1>Mobile Number</h1>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="+919147366789"
                className="common_input"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
