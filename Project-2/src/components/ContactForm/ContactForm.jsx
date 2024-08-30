import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  // If we want to update UI on change of any xyz property
  // then we have to declare it using useState() and
  // update that property using setXyz(xyz);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // Update property using setName to reflect changes on UI
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setQuery(event.target[2].value);
  };

  return (
    <section className={`${styles.container} container`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button
            query="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button query="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          query="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={`${styles.form_control}`}>
            <label htmlFor="name">Name</label>
            <input type="query" name="name" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="email">Email</label>
            <input type="query" name="email" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="query">Query</label>
            <textarea name="query" rows={8} />
          </div>
          <div className={`${styles.submit_button}`}>
            <Button query="SUBMIT BUTTON" />
          </div>
          <div>
            {name && name + "!"}
            {email && "your email is " + email}
            {query && "and query is: " + query}
          </div>
        </form>
      </div>
      <div>
        <img src="/images/contact-image.svg" alt="contact_image" />
      </div>
    </section>
  );
};

export default ContactForm;
