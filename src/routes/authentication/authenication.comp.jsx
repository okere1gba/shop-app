import SigningIn from "../../component/sign-in form/singin.form";
import SignUp from "../../component/signup-form/signup.component";

const SignInPage = () => {
  return (
    <>
      <div>
        <SigningIn />
      </div>
      <div className=" signing-up">
        <SignUp />
      </div>
    </>
  );
};

export default SignInPage;
