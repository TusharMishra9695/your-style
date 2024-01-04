import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { postAPI } from "../utils/apiCalls";

export default function SignupModal(props) {
  const [profile, setProfile] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function handleSignup(formdata) {
    console.log(URL.createObjectURL(formdata.target.files[0]), ";form");
    setProfile(URL.createObjectURL(formdata.target.files[0]));

    // postAPI("http://localhost:5000/signup", formdata);
  }

  return (
    <>
      {props.isOpen ? (
        <div className="overlay">
          <input
            type="file"
            id="profile"
            accept="image/*"
            onChange={handleSignup}
          />
          <form
            onSubmit={handleSubmit((data) => handleSignup(data))}
            className="login_modal"
          >
            <div className="cut">
              <ImCross onClick={() => props.isClose(false)} />
            </div>
            <div className="profile">
              {profile && <img src={profile} alt="profile pic" className="" />}
            </div>
            <div>
              <input
                type="text"
                id="username"
                {...register("username", { required: true })}
                placeholder="Username"
              />
            </div>
            <div>
              <input
                type="text"
                id="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <input
                type="number"
                id="number"
                placeholder="Contact Number"
                {...register("contact", { required: true })}
              />
            </div>
            <button type="submit" className="login_submit">
              SignUp
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
