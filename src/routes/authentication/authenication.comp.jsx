import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
import { Link, CircularProgress } from "@mui/material";
import Loginform from "../../component/sign-in form/login.form";
import SignUp from "../../component/signup-form/signup.component";

import FormInput from "../../component/forms/form.component";
import {
  signInWithGooglepopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utills/firebase/firebase.utills";

import { SignContext } from "../../component/context/signin.context";

import Button from "../../component/button/button.componet";
import "./auth.comp.sass";
import { ReactComponent as Googlelogo } from "../../asset/google-color.svg";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../component/context/cart.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const defaultFormFieldsSingup = {
  displayName: "",
  email2: "",
  password2: "",
  confirmPassword: "",
};

const LoginPage = () => {
  const { authenticate, setAuthenticate, toggleSinginPage } =
    useContext(CartContext);
  // const [signOptions, setSignoptions] = useState(true);

  // const change = () => setSignoptions(!signOptions);

  const navigator = useNavigate();

  const [loading, setloading] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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
          navigator("/home/dashboard");
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

  //!!! FOR the signup page

  const [formFieldsSingup, setFormFieldsSingup] = useState(
    defaultFormFieldsSingup
  );
  const { displayName, email2, password2, confirmPassword } = formFieldsSingup;
  const handleChangesignup = (event) => {
    const { name, value } = event.target;

    setFormFieldsSingup({ ...formFieldsSingup, [name]: value });
  };

  const resetFormsSignup = () => {
    setFormFieldsSingup(defaultFormFieldsSingup);
  };

  const HandleSubmitSignup = async (event) => {
    event.preventDefault();
    // make sure that the password and the confirm password are thesame
    if (password2 !== confirmPassword) {
      alert("password do no match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email2,
        password2
      );
      resetFormsSignup();
      toggleSinginPage();
      alert("You have been signed in. THANK YOU");

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email allready in use");
      } else {
        console.log("error occured", error);
      }
    }
  };

  return (
    <>
      {authenticate ? (
        <div className="signing-up">
          <div className="signup-container">
            <h2> User SignUp </h2>
            <span>Please fill the form below with your Details</span>

            <div className="breakline">
              <div className="or"></div>

              <div className="onediv">
                <hr />
              </div>
              <div className="twodiv">
                <hr />
              </div>
            </div>

            <form onSubmit={HandleSubmitSignup}>
              <FormInput
                label="Display Name"
                type="text"
                required
                onChange={handleChangesignup}
                name="displayName"
                value={displayName}
              />

              <FormInput
                label="Email"
                type="email"
                required
                onChange={handleChangesignup}
                name="email2"
                value={email2}
              />

              <FormInput
                label="Password"
                type="password"
                required
                onChange={handleChangesignup}
                name="password2"
                value={password2}
              />

              <FormInput
                label="Comfirm Password"
                type="password "
                required
                onChange={handleChangesignup}
                name="confirmPassword"
                value={confirmPassword}
              />
              <div className="link-button ">
                <Button buttonType="google">Sign Up</Button>
                <Link onClick={toggleSinginPage}>
                  <span className="signup-link">
                    Sign in with exiting account{" "}
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // <div>
        //   <SigningIn />
        // </div>

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
              <span className="text2">
                Sign in with your email and password
              </span>
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
            <Link onClick={toggleSinginPage}>
              Don't have an account? Please SignUp
            </Link>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;
