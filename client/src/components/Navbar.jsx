import React, { useState } from "react";
import { Image } from "@imagekit/react";
import IkImage from "./IkImage";
import { Link } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="full-h-16 md:h-20 flex items-center justify-between">
      {/*LOGO*/}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <IkImage
          endPoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          src="https://ik.imagekit.io/Cs201108011/logo.png?tr=w-1920,c-at_max"
          className="w-8 h-6"
          w={32}
          h={32}
        />
        <span>LamaLog</span>
      </Link>
      {/*MOBILE VIEW*/}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "m"}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login{" "}
            </button>
          </Link>
        </div>
      </div>
      {/*DESKTOP VIEW*/}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link href="/">Home</Link>
        <Link href="/">Trending</Link>
        <Link href="/">Most Popular</Link>
        <Link href="/">About</Link>

        <Show when="signed-out">
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </div>
  );
}

export default Navbar;
