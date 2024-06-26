"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Link from "next/link";
import { CiFaceSmile, CiLogin, CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";

type Props = {};

const NavBar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div>
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="text-2xl">
            <a href="/">Eco</a>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
              <li>
                <a href="/" className="py-3 inline-block w-full">
                  Shop
                </a>
              </li>
              <li>
                <a href="filters" className="py-3 inline-block w-full">
                  Filters
                </a>
              </li>
              <li>
                <a href="myproducts" className="py-3 inline-block w-full">
                  My Products
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <div className="relative cursor-pointer">
            <Link href="/signin">
              <div className="p-2 bg-gray-200 rounded-full">
                <CgProfile />
              </div>
            </Link>
          </div>
          <Link href="/cart">
            <div className="p-2 bg-gray-200 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span
            onClick={() => setShowNav(!showNav)}
            className="p-[9px] bg-gray-200 rounded-full md:hidden"
          >
            <BsChevronCompactUp
              className={`transition ease-in duration-150 ${
                showNav ? "rotate-180" : "0"
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <a href="/shop" className="py-3 inline-block w-full ">
              Shop
            </a>
          </li>
          <li>
            <a href="/filters" className="py-3 inline-block w-full ">
              Filters
            </a>
          </li>
          <li>
            <a href="/myProducts" className="py-3 inline-block w-full ">
              My Products
            </a>
          </li>
        </ul>
        <div className="flex items-center bg-gray-500 p-2 rounded-lg my-4 py-3">
          <input
            type="text"
            className="outline-none bg-transparent w-full ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
            placeholder="Search"
            autoComplete="false"
          />
          <BiSearch size={20} className="opacity-50" />

        </div>
      </div>
    </div>
  );
};

export default NavBar;
