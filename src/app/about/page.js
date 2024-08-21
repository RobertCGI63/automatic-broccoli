"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../components/Header";

export default function About() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [confirmationMessage, setConfirmMessage] = useState("");

  const onSubmit = (contactData) => {
    fetch(`/sent/`, { method: "POST", body: JSON.stringify(contactData) })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something is wrong with the API server.");
        }
      })
      .then((data) => setConfirmMessage(data.message));
  };

  return (
    <>
      <Header title="Profile" />
      <section>
        <img src="https://placehold.co/400" />
        <p>
          <label>Name: </label>
          <span>Robert Davis</span>
        </p>
        <p>
          <label>Education: </label>
          <span>Per Scholas Alumni</span>
        </p>
        <p>Career At CGI: 3 Months</p>
        <label>Interest and Hobbies</label>
        <p>
          Writing. I've authored a few short stories here and there but I like
          writing fantasy in general
        </p>
      </section>

      <section>
        <h2>Contact Me</h2>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label>Name: </label>
          <input
            defaultValue="name"
            {...register("name", {
              required: {
                value: true,
                message: <span>This field is required</span>,
              },
              minLength: {
                value: 3,
                message: <span>Name must be at least 3 characters</span>,
              },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          <label>Email: </label>
          <input
            defaultValue="email"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: <span>You need an email</span>,
              },
            })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && errors.email.message}
          <br />
          <label>Message</label> <br />
          <textarea {...register("message")}></textarea>
          <br />
          <input type="submit" />
          <input
            type="button"
            value={"Reset"}
            onClick={() => reset({ name: "name", email: "email", message: "", messageSent: setConfirmMessage("")})}
          />
          <p {...register("messageSent")}>{confirmationMessage}</p>
        </form>
      </section>
    </>
  );
}
