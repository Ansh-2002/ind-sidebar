// src/components/Sidebar.tsx
"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import DownloadAppCard from "@/components/DownloadAppCard";
// import a from "next/a";

interface SidebarProps {
  menuItems: {
    title: string;
    url: string; // Add the 'url' property
    subItems: Record<string, string | Record<string, string>>;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSubItemsToggle = (index: number) => {
    // Set index for top-level items
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleSubSubItemsToggle = (subItemKey: string) => {
    // Set key for nested items
    setOpenSubIndex(subItemKey === openSubIndex ? null : subItemKey);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const renderSubItems = (
    subItems: Record<string, string | Record<string, string>>
  ) => (
    <ul className="bg-gray-100  ">
      {Object.keys(subItems).map((subItemKey, subIndex) => {
        const subItem = subItems[subItemKey];
        const hasNestedItems =
          typeof subItem === "object" && !Array.isArray(subItem);

        return (
          <li key={subIndex} className="relative">
            {hasNestedItems ? (
              <>
                <button
                  className="flex items-center w-full py-4 text-gray-600 border-b"
                  onClick={() => handleSubSubItemsToggle(subItemKey)}
                >
                  <span className="flex-1 text-left px-4">{subItemKey}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openSubIndex === subItemKey ? "rotate-180" : ""
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
                      className="flex items-center w-full py- text-gray-600 border-b"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openSubIndex === subItemKey ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <ul className="bg-white ">
                    {renderSubItems(subItem as Record<string, string>)}
                  </ul>
                </div>
              </>
            ) : (
              <a
                href={subItem as string}
                className="block px-4 py-2 text-gray-600 font-light bg-white "
              >
                {subItemKey}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="relative">
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <button
        className="font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        type="button"
        onClick={toggleSidebar}
        aria-expanded={isOpen}
        aria-controls="sidebar"
      >
        {isOpen ? "Close Navigation" : "Show Navigation"}
      </button>

      <div
        id="sidebar"
        className={`fixed top-16 right-0 z-40 w-64 md:w-72 lg:w-80 h-screen py-4 overflow-y-auto transition-transform transform mt-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-white`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-label"
      >
        <div className="flex justify-center">
          <button className="bg-green-600 py-2.5 px-9 my-1 hover:text-white hover:bg-[#5CB571] bg-brand-green-dark text-white border-1 rounded-full border-transparent transition-all duration-100 shadow-one">
            Open Demat Account
          </button>
        </div>

        <nav>
          <ul className="font-medium">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  className="flex items-center w-full py-4 text-gray-600 group text-left border-b"
                  onClick={() => handleSubItemsToggle(index)}
                >
                  {item.title === "Pricing" ? ( // temp fix change later
                    <a href={item.url}>
                      <div className="w-[1000px]">
                        <span className="flex-1 px-4"> Pricing</span>
                      </div>
                    </a>
                  ) : (
                    <>
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
                    </>
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {renderSubItems(item.subItems)}
                </div>
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
