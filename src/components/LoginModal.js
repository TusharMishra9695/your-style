import React from "react";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";

export default function LoginModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {props.isOpen ? (
        <div className="overlay">
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="login_modal"
          >
            <div className="cut">
              <ImCross />
            </div>
            <div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                {...register("username", { required: true })}
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

            <button type="submit" className="login_submit">
              Login
            </button>

            {/* <div>
            <span>Forgot Password ?</span>
          </div> */}
          </form>
        </div>
      ) : null}
    </>
  );
}
