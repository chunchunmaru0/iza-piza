import React from "react";
import { createEmail } from "../actions/createEmail";

async function Form() {
  async function handleAction(formData: FormData) {
    "use server";

    const email = formData.get("email");

    createEmail({ email });
  }
  return (
    <div className="container justify-self-center">
      <form
        className="flex flex-col text-center lg:w-full lg:mb-0 justify-self-center"
        action={handleAction}
      >
        <input
          className="rounded-lg text-black !text-opacity-100
          border w-96 self-center 
           px-5 py-4 
           transition-colors hover:border-gray-300
            hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 center"
          placeholder="Enter Your Email"
          type="email"
          name="email"
          style={{ color: "firebrick" }}
          required
        ></input>

        <button className="rounded-lg border w-48 border-transparent self-center px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-amber-400 mx-5 my-5">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Form;
