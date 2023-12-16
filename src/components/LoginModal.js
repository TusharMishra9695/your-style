import React from "react";

export default function LoginModal(props) {
  return (
    <>
      {props.isOpen ? (
        <div className="login_modal">
          <div>
            <input
              type="text"
              name="user"
              id="username"
              value={""}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              id="password"
              value={""}
              placeholder="Password"
            />
          </div>
          <div className="login_submit">
            <span>Login</span>
          </div>
          {/* <div>
            <span>Forgot Password ?</span>
          </div> */}
        </div>
      ) : null}
    </>
  );
}
