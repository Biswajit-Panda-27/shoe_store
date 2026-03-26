import React from "react";
import { FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { GiShop } from "react-icons/gi";
import { SiTrustedshops } from "react-icons/si";
import { MdHomeWork } from "react-icons/md";
import { MdNewLabel } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";

const NavLinks = [
  { id: 1, name: "Home", link: "/", icon: <MdHomeWork /> },
  { id: 2, name: "Products", link: "/showProducts", icon: <GiShop /> },
  { id: 3, name: "Profile", link: "/userprofile", icon: <IoLogIn /> },
  { id: 4, name: "Cart", link: "/addToCart", icon: <FaOpencart /> },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between py-4 px-4">
          <div className="font-bold text-3xl">
            {/* for logo image who redirects home page */}
            <Link to={"/"}>
              <SiTrustedshops />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 ">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="flex items-center hover:underline"
              >
                {/* Render the icon if it exists */}
                {link.icon && <span className="mr-1 ">{link.icon}</span>}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
