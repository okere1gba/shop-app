import { useState, useContext } from "react";
import { Link, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormInput from "../forms/form.component";
import {
  signInWithGooglepopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utills/firebase/firebase.utills";

import { UserContext } from "../context/context.user";

import Button from "../button/button.componet";
import "./justsiginin.form.scss";
import { ReactComponent as Googlelogo } from "../../asset/google-color.svg";

const defaultFormFields = {
  email: "",
  password: "",
};
const Loginform = () => {
  const navigator = useNavigate();

  const [loading, setloading] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const {authenticate,setAuthenticate} = useContext(UserContext);

  // useContext implementation to help manage our states in the sign up form

  //const { setCurrentUser } = useContext(UserContext);
  // Handles and keeps track of the changes as the user is type inside the text formField

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // submit funtionality
  const resetForms = () => {
    setFormFields(defaultFormFields);
  };

  const getResponse = async () => {
    const response = await signInAuthUserWithEmailAndPassword(email, password);
    resetForms();
    return response;
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    // make sure that the password and the confirm password are thesame
    setloading(true);

    getResponse()
      .then((response) => {
        console.log("111");
        if (response) {
          navigator("/home");
        }
      })

      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            alert("incorrect password for email");
            break;
          case "auth/user-not-found":
            alert("there is no user associated with this email");
            break;
          default:
            console.log(error);
        }
      })
      .finally(() => setloading(false));
    /*  if (error.code === "auth/wrong-password") {
        alert("incorrect password for email");
      } else if (error.code === "auth/user-not-found") {
        alert("there is no user associated with this email");
      }
      console.log(error);
    }*/
  };
  const signInWithGoogle = async () => {
    await signInWithGooglepopup();
  };
  const changeToSigninPage = () => {
    console.log(123);
    navigator("/login");
  };
  return (
    <div className="singin-container">
      <div className="intro">
        <h2> Login</h2>
        <span>User Signin Page</span>
      </div>

      <form onSubmit={HandleSubmit}>
        <Button type="button" buttonType="logo" onClick={signInWithGoogle}>
          <Googlelogo className="googlelogo" />
          Google Sign in
        </Button>

        <div className="breakline">
          <div className="or">
            <span className="text">OR</span>
          </div>

          <div className="onediv">
            <hr />
          </div>
          <div className="twodiv">
            <hr />
          </div>
          <span className="text2">Sign in with your email and password</span>
        </div>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password "
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="button-section1">
          <Button type="submit">
            {loading ? (
              <CircularProgress
                size={25}
                sx={{
                  margin: "1rem 0",
                }}
              />
            ) : (
              "Sigin in"
            )}
          </Button>
        </div>

        <Link onClick={changeToSigninPage}>
          Don't have an account? Please SignUp
        </Link>
      </form>
    </div>
  );
};
export default Loginform;
