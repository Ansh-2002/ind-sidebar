import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";

const Navbar = ({
  toggleSidebar,
  isOpen,
}: {
  toggleSidebar: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      <nav className="bg-white fixed w-full z-50 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-x-4">
            <Link
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                width={50}
                height={40}
                src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=150/https://indcdn.indmoney.com/public/ind-marketing/indmoney-weblogo.png"
                alt="IndMoney Logo"
              />
            </Link>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-200 rounded-3xl bg-gray-50 "
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div
              data-collapse-toggle="navbar-sticky"
              className="inline-flex items-center p-2 gap-4 justify-center text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
                 <button className="px-2.5 py-1 my-2 text-green-600 bg-brand-white border border-green-600 rounded-full  transition-all duration-100 shadow-one">
                Log In
              </button>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="aspect-square w-6"
              >
                <path
                  d="M20 11a8 8 0 00-16 0"
                  stroke="#757779"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 18v.5a2 2 0 01-2 2h-3.5M2 15.438v-1.876a2 2 0 011.515-1.94l1.74-.436a.601.601 0 01.745.582v5.463a.6.6 0 01-.746.583l-1.74-.435A2 2 0 012 15.439v-.001zm20 0v-1.876a2 2 0 00-1.515-1.94l-1.74-.436a.601.601 0 00-.745.582v5.463a.601.601 0 00.745.583l1.74-.435A2 2 0 0022 15.439v-.001z"
                  stroke="#757779"
                  strokeWidth="1.5"
                />
                <path
                  d="M13.5 22h-3a1.5 1.5 0 110-3h3a1.5 1.5 0 110 3z"
                  stroke="#757779"
                  strokeWidth="1.5"
                />
              </svg>
             
              <IoIosSearch className="size-7" />
            </div>
            <button
              type="button"
              className="px-4 py-2 text-center  "
              onClick={toggleSidebar}
            >
              {isOpen ? (
                <div className="text-2xl text-gray-600 text-brand-grey-base text-right">
                  ✕
                </div>
              ) : (
                <div className="w-5 cursor-pointer" role="button" title="menu">
                  <svg
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7h18M1 1h18M7 13h12"
                      stroke="#47494C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          </div>
          {/* <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
