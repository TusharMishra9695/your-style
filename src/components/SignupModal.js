import React from "react";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";

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
          <div className="cut">
            <ImCross />
          </div>
          <div className="profile">
            <input
              type="file"
              id="profile"
              accept="image/*"
              {...register("profile")}
            />
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
      ) : null}
    </>
  );
}
