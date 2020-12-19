import React from "react";

const NewsLetter = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // fetch("http://localhost:5000/api/")
  };
  return (
    <div className="text-center max-w-sm m-auto bg-purple-50 rounded overflow-hidden m-16 py-8">
      <span className="text-3xl text-black-500 font-semibold">
        Want to be updated when new awesome pics come out?
      </span>
      <span className="text-3xl text-purple-500 font-semibold">
        {" "}
        Sign up for our newsLetter.
      </span>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <input
          type="text"
          placeholder="Enter email"
          className=" w-full text-gray-700 my-4 mx-2 rounded "
        />
        <button
          className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded shadow-lg"
          type="submit"
        >
          Notify me
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
