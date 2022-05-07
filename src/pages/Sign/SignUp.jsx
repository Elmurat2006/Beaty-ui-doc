import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import "../../components/Navbar.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, name, password } = formData;

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      
      navigate("/profile");
      toast.success("Succesfully");
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <div className="signForm mt-5 mb-5">
      <header>
        <p className="pageHeader text-white">Sign Up</p>
      </header>
      <form className="d-flex flex-column gap-2" onSubmit={onSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="nameInput Input"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          id="email"
          placeholder="Email@gmail.com"
          className="emailInput Input"
          value={email}
          onChange={onChange}
        />
        <input
          id="password"
          placeholder="Password"
          value={password}
          type="password"
          className="passwordInput Input"
          onChange={onChange}
        />
      </form>
      {/* Google Auth */}
      <button className="getStarted_btn sign p-2 mt-2" onClick={onSubmit}>
        Sign Up
      </button>
      <div className="text-white mt-2">
        Already have an account ?
        <Link className="registerLink ms-1" to="/sign-in">
          Log In Instead
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
