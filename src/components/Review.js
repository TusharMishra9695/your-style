import React from "react";

export default function Review() {
  return (
    <div>
      <p>There are no reviews yet.</p>
      <div>
        <h1>Be the First to review</h1>
      </div>
      <div>
        <h2>
          Your email address will not be published. Required fields are marked *
        </h2>
      </div>
      <div>
        <span>Your rating *</span>
      </div>
      <div>
        <span> Your review *</span>
        <textarea
          name="textarea"
          rows="5"
          cols="30"
          placeholder="Comment text."
        ></textarea>
      </div>
      <div>
        <div>
          <label>Name *</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label>Email *</label>
          <input type="text" name="email" id="email" />
        </div>
      </div>
      <div>
        <button type="submit">SUBMIT</button>
      </div>
      <div>
        <img src="" alt="userimg.." />
        <div>
          <p>Your review is awaiting approval</p>
          <h5>****</h5>
          <h6>rate</h6>
        </div>
      </div>
    </div>
  );
}
