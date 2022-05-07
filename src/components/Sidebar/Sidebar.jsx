import React from "react";
import { ImSpinner, ImSearch } from "react-icons/im";
import { GoLink } from "react-icons/go";
import { HiSelector } from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside
      className="w-96 h-100 sidebar-none"
      aria-label="Sidebar"
      style={{ height: "100vh", background: "#071a2e", marginLeft: "-80px" }}
    >
      <div className="overflow-y-auto py-4 mb-32 px-3">
        <ul className="space-y-2 fixed mb-16 ml-16">
          <li>
            <a
              href="#login"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700 hover:text-white"
            >
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span className="ml-3">Login</span>
            </a>
          </li>
          <li>
            <a
              href="#button"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 hover:text-white"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Button</span>
            </a>
          </li>
          <li>
            <a
              href="#spinner"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 hover:text-white"
            >
              <ImSpinner className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Spinner</span>
            </a>
          </li>
          <li>
            <a
              href="#search"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 hover:text-white"
            >
              <ImSearch className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
            </a>
          </li>
          <li>
            <a
              href="#skeleton"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 hover:text-white"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Skeleton</span>
            </a>
          </li>
          <li>
            <a
              href="#select"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 hover:text-white"
            >
              <HiSelector className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Select</span>
            </a>
          </li>
          <li>
            <a
              href="#textInput"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 hover:text-white"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Text Input</span>
            </a>
          </li>
          <li className="mb-16">
            <a
              href="#link"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 hover:text-white"
            >
              <GoLink className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3  whitespace-nowrap">Link</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
