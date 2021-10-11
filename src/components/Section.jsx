import React from "react";

const Section = ({ title, content, link }) => (
  <div className="bg-red-200 p-4 md:rounded-sm">
    <div className="text-2xl font-bold text-gray-700">
      {title || "No title"}
    </div>
    <p className="my-4">{content || "No content"}</p>
    <a
      href={link || "#"}
      className="bg-red-500 text-white rounded-sm px-4 py-2 font-semibold"
    >
      More
    </a>
  </div>
);

export default Section;
