import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
import LocationCards from "../Components/LocationCards/LocationCards";
import styles from "./Contact.module.css";

const Contact = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <main>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Lets talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences thats relatable to your
              users, drop us a line.
            </p>
          </div>
          <div className={styles.formInputs}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone" />
            <textarea
              className={styles.textArea}
              placeholder="Your Message"
              cols="30"
              rows="3"
            ></textarea>
            <Button type="submit" className={styles.submitBtn}>
              SUBMIT
            </Button>
          </div>
        </form>

        <LocationCards />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
