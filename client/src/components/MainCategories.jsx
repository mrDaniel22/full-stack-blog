import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function MainCategories() {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/**LINKS */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-800 hover:text-white rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-800 hover:text-white  rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=database"
          className="hover:bg-blue-800 hover:text-white rounded-full px-4 py-2"
        >
          Database
        </Link>
        <Link
          to="/posts?cat=search-engines"
          className="hover:bg-blue-800 hover:text-white rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-800 hover:text-white rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <spa className="text-xl font-medium">|</spa>
      {/**SEARCH */}
      <Search />
      {/* <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        search
      </div> */}
    </div>
  );
}

export default MainCategories;
