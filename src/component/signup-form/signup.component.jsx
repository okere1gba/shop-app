import { useState } from "react";
import FormInput from "../forms/form.component";
import "./signup.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utills/firebase/firebase.utills";
import { Link } from "react-router-dom";
import Button from "../button/button.componet";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // Handles and keeps track of the changes as the user is type inside the text formField

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // submit funtionality
  const HandleSubmit = async (event) => {
    event.preventDefault();
    // make sure that the password and the confirm password are thesame
    if (password !== confirmPassword) {
      alert("password do no match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetForms();
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
  const resetForms = () => {
    setFormFields(defaultFormFields);
  };

  return (
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

      <form onSubmit={HandleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Comfirm Password"
          type="password "
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <div className="link-button ">
          <Button buttonType="google">Sign Up</Button>
          <Link to="/auth">
            <span className="signup-link"> Sign in with exiting account </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
