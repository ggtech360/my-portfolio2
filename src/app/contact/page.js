"use client";
import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import emailjs from "@emailjs/browser";

export default function page() {
  const form = useRef();
  const [Display, setDisplay] = useState("hidden");
  const [msg, setMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zrvzhzd",
        "template_xzce05h",
        form.current,
        "dJl3UeQpGETUp3OJF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsg("Message sent successfully...!!!");
          setDisplay("block");
          setTimeout(() => {
            setDisplay("hidden");
          }, 4000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setMsg("Message not sent....!!!!");
          setDisplay("block");
          setTimeout(() => {
            setDisplay("hidden");
          }, 4000);
        }
      );
  };
  return (
    <div className="h-[100vh] overflow-hidden">
      <Navbar />
      <Wrapper>
        <div className=" h-full">
          <div className="my-24">
            <form
              ref={form}
              className="flex text-main gap-5 mx-5 lg:mx-32 flex-col"
              onSubmit={sendEmail}
            >
              <h2 className="text-3xl text-center text-primary lg:text-4xl font-medium">
                Contact Me
              </h2>
              <div className="flex flex-col">
                <label className="text-xl font-medium">Name</label>
                <input
                  className="border-b-2 outline-none py-3 px-3"
                  placeholder="Enter Your Name"
                  type="text"
                  name="sender_name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-medium">Email</label>
                <input
                  className="border-b-2 outline-none py-3 px-3"
                  placeholder="Enter Email"
                  type="email"
                  name="sender_email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-medium">Message</label>
                <textarea
                  className="border-b-2 py-3 px-3 h-44 resize-none outline-none"
                  placeholder="Your Message"
                  name="message"
                />
              </div>
              <input
                type="submit"
                className="px-6 rounded-md cursor-pointer py-2 self-center text-white bg-primary"
                value="Send"
              />
              <p
                className={` ${Display} text-center font-medium bg-green-700 p-3 rounded-xl text-white`}
              >
                {msg}
              </p>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
