import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "../../components/Navbar.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        console.log(userCredential.user);
      }
      navigate("/profile");
      toast.success("Succesfully");
    } catch (error) {
      toast.success("Message Error 404");
    }
  };

  return (
    <>
      <div className="signForm mt-5 mb-5">
        <header>
          <p className="pageHeader text-white">Welcome Back!</p>
        </header>
        <main>
          <form className="d-flex flex-column gap-2" onSubmit={onSubmit}>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="emailInput Input"
              value={email}
              onChange={onChange}
              // {...register('example')}
            />
            <input
              id="password"
              type="password"
              placeholder="password"
              className="passwordInput Input"
              value={password}
              onChange={onChange}
              // {...register('exampleRequired',{required: true})}
            />
            {/* {errors.exampleRequired && <p>This field is required</p>} */}
          </form>
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="getStarted_btn align-items-center sign p-2 mt-2"
              onClick={onSubmit}
            >
              Sign In
            </button>
          </div>
          <div className="text-white mt-2 d-flex">
            Dont have an account ?
            <Link className="registerLink ms-1" to="/sign-up">
              Sign Up Instead
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default SignIn;
