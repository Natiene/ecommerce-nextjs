"use client";
import Link from "next/link";
import React, { useState } from "react";

// type Props = {
//   name: string;
//   email: string;
//   password: string;
// };

type Props = {};

const SignUpForm = (props: Props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 bg-gray-200 rounded-lg shadow-xl flex flex-col ">
        <h1 className="text-xl font-medium mb-4">Sign Up</h1>
        <label htmlFor="" className="mb-2">
          Name
        </label>
        <input
          type="text"
          className="p-2 border-gray-800 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-950 text-black"
          id="name"
          value={user.name}
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="" className="mb-2">
          Email
        </label>
        <input
          type="text"
          className="p-2 border-gray-800 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-950 text-black"
          id="name"
          value={user.email}
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="" className="mb-2">
          Password
        </label>
        <input
          type="password"
          className="p-2 border-gray-800 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-950 text-black"
          id="name"
          value={user.password}
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="p-2 border rounded-lg bg-purple-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-950">
          Register Now
        </button>
        <Link
          href="/signin"
          className="text-sm shadow-lg text-center mt-5 text-neutral-400"
        >
          Already have an Account?
        </Link>
        <Link href="/" className="text-center mt-2">
          Home
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
