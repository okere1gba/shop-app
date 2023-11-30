import "./contacts_page.css";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import FormInput from "../../component/forms/form.component";

const Contact_page = () => {
  const contactInformatin = [];

  return (
    <div className="contact">
      <div className="first_inner">
        <h4> Contact us</h4>

        <h1>Get in Tourch With Us</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          minus ut necessitatibus delectus culpa enim dolorem aliquam,
          voluptate, eaque iste mollitia sunt quis fugiat vero unde, quaerat
          nemo fuga voluptas.
        </p>

        <div className="span">
          <ClearAllIcon className="image_height" />

          <div className="description">
            <h2>Our Location</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="span">
          <ClearAllIcon className="image_height" />

          <div className="description">
            <h2>Phone Number</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="span">
          <ClearAllIcon className="image_height" />

          <div className="description">
            <h2>Email Address</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="second_inner">
        {/* <form>
          <div className="message_form ">
            <FormInput label="Your name" type="text" required name="name" />
            <FormInput label="Email" type="email" required name="email" />

            <FormInput
              label="Phone number"
              type="number"
              required
              name="number"
            />

            <FormInput label="Message" type="text " name="message" />
          </div>
        </form> */}
      </div>
    </div>
  );
};
export default Contact_page;
