import React from "react";
import { useForm } from "react-hook-form";

export default function SignupModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {props.isOpen ? (
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="login_modal"
        >
          <div className="profile">
            <input type="file" name="profilePhoto" id="profile" />
          </div>
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
          <div>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input
              type="number"
              name="mobile_number"
              id="number"
              placeholder="Mobile Number"
            />
          </div>

          <div className="login_submit">
            <span>SignUp</span>
          </div>
        </form>
      ) : null}
    </>
  );
}
