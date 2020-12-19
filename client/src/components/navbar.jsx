import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between flex-wrap bg-gray-50 p-6">
        <div className="flex items-center flex-shrink-0 text-indigo-500 mr-6">
          <h1 className="font-light text-7xl">Star Gallery</h1>
          <p className="text-sm pt-10 text-purple-500">
            made with pixabay api...
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
