import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef("abc");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_2jhodaf', 'template_1edxtp9', form.current, {
        publicKey: 'HUIQYtE81JtZLp3A4',
      })
      // .then(
      //   () => {
      //     console.log('SUCCESS!');
      //   },
      //   (error) => {
      //     console.log('FAILED...', error.text);
      //   },
      // );
  };
  const [state, handleSubmit] = useForm("xrgvvdlo");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.<br />
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={(e) => {
          handleSubmit(e);
          sendEmail(e);
        }} ref={form} className="">
          <div className="flex">
            <label htmlFor="user_email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="user_email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="user_email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} value="Send" className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
