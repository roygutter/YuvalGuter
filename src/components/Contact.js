import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Contact.module.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xgz4xtr",
        "template_m9jt8tm",
        form.current,
        "yebpOfRZcy-zC_ucW"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={classes.cardStyle}>
      <form className={classes.cardStyle} ref={form} onSubmit={sendEmail}>
        <div className={classes.midDiv}>
          <label className={classes.labelStyle}>שמך המלא</label>
          <input type="text" name="user_name" />
        </div>
        <div className={classes.midDiv}>
          <label className={classes.labelStyle}>כתובת מייל</label>
          <input type="email" name="user_email" />
        </div>
        <div className={classes.midDiv}>
          <label className={classes.labelStyle}>מספר טלפון</label>
          <input type="PhoneNumber" name="phone_number" />
        </div>
        <div className={classes.midDiv}>
          <label className={classes.labelStyle}>תוכן הפנייה</label>
          <input name="message" />
        </div>
        <div className={classes.midDiv}>
          <input type="submit" value="שלח הודעה " />
        </div>
      </form>
    </div>
  );
}

export default Contact;
