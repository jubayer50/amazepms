"use client";

import { Button } from "@heroui/react";
import { useState } from "react";
import MyNavLink from "./MyNavLink";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <MyNavLink href={"/"}>Home</MyNavLink>
      <MyNavLink href={"/solution"}>Solutions</MyNavLink>
      <MyNavLink href={"/features"}>Features</MyNavLink>
      <MyNavLink href={"/contact"}>Contact</MyNavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#e6eeff80] border-b border-[#0055FF]  backdrop-blur-lg">
      <header className="max-w-330 mx-auto flex py-3 items-center justify-between px-3">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="logo"
                width={100}
                height={100}
                className="object-cover"
              ></Image>
            </Link>
          </div>
        </div>

        <ul className="hidden items-center gap-4 md:flex">{links}</ul>

        <Button size="sm" className={"bg-[#00194c] rounded-md"}>
          Book Now
        </Button>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
