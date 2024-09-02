// // src/components/Sidebar.tsx
"use client";

// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import AccordionItem from "@/components/AccordionItem";

// interface AccordionItem {
//   title: string;
//   subItems?: string[];
// }

// interface SidebarProps {
//   items: AccordionItem[];
// }

// const Sidebar: React.FC<SidebarProps> = ({ items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden p-4 text-white bg-gray-800 fixed top-4 left-4 z-50"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform transition-transform duration-300 ease-in-out z-40
//         ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//       >
//         <div className="p-6">
//           <h2 className="text-2xl font-bold">Sidebar</h2>
//           <nav className="mt-8">
//             {items.map((item, idx) => (
//               <AccordionItem key={idx} item={item} />
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Overlay for mobile view */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;import React, { useState } from 'react';
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import DownloadAppCard from "@/components/DownloadAppCard";

interface SidebarProps {
  menuItems: {
    title: string;
    subItems: string[];
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSubItemsToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <button
        className=" font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none "
        type="button"
        onClick={toggleSidebar}
        aria-expanded={isOpen}
        aria-controls="sidebar"
      >
        {isOpen ? "Close Navigation" : "Show Navigation"}
      </button>

      <div
        id="sidebar"
        className={`fixed top-16 right-0 z-40 w-64 md:w-72 h-screen py-4 overflow-y-auto transition-transform transform mt-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-white`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-label"
      >
        <div className="flex justify-center">
          <button className="bg-[#33AD43] py-2.5 px-9 my-1 hover:text-white hover:bg-[#5CB571]  bg-brand-green-dark text-white border-1 rounded-full border-transparent transition-all duration-100 shadow-one">
            Open Demat Account
          </button>
        </div>

        <nav>
          <ul className=" font-medium ">
            {menuItems.map((item, index) => (
              <li key={index} className="relative ">
                <button
                  className="flex items-center w-full py-4 text-gray-700 group text-left border-b"
                  onClick={() => handleSubItemsToggle(index)}
                >
                  <span className="flex-1 px-4">{item.title}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L10 11.414 6.293 8.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <ul className="mt-2 space-y-1 pl-5">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          className="block p-2 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <DownloadAppCard />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
