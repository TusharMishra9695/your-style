import React from "react";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { postAPI } from "../utils/apiCalls";

export default function LoginModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function handleLogin(formdata) {
    postAPI(`${process.env.REACT_APP_URL}/login`, formdata).then((res) => {
      console.log(res, "loginres");
    });
    props.isClose(false);
  }

  return (
    <>
      {props.isOpen ? (
        <div className="overlay">
          <form
            onSubmit={handleSubmit((data) => handleLogin(data))}
            className="login_modal"
          >
            <div className="cut">
              <ImCross onClick={() => props.isClose(false)} />
            </div>
            <div>
              <input
                type="number"
                id="contact"
                placeholder="Mobile Number"
                {...register("contact", { required: true })}
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
