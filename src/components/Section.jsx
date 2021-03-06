import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Needed because Tailwind CSS engine searches for whole classnames (cannot use
// string templates to dinamically create classnames).
export const baseColors = {
  red: {
    sectionBackground: "bg-red-200",
    buttonBackground: "bg-red-500",
  },
  green: {
    sectionBackground: "bg-green-200",
    buttonBackground: "bg-green-500",
  },
  yellow: {
    sectionBackground: "bg-yellow-200",
    buttonBackground: "bg-yellow-500",
  },
  indigo: {
    sectionBackground: "bg-indigo-200",
    buttonBackground: "bg-indigo-500",
  },
  purple: {
    sectionBackground: "bg-purple-200",
    buttonBackground: "bg-purple-500",
  },
  pink: {
    sectionBackground: "bg-pink-200",
    buttonBackground: "bg-pink-500",
  },
  blue: {
    sectionBackground: "bg-blue-200",
    buttonBackground: "bg-blue-500",
  },
};

const Section = ({ title, content, id, color }) => {
  const [selectedColor, setSelectedColor] = useState("blue");

  useEffect(() => {
    if (color in baseColors) setSelectedColor(color);
  }, [color]);

  return (
    <div
      className={`${baseColors[selectedColor].sectionBackground} p-4 md:rounded-sm w-80 flex-auto relative pb-14`}
    >
      <div className="text-2xl font-bold text-gray-700">
        {title || "No title"}
      </div>
      <p className="my-4">{content || "No content"}</p>
      <Link to={`/section-details/${id}`}>
        <button
          type="button"
          className={`${baseColors[selectedColor].buttonBackground} text-white rounded-sm px-4 py-2 font-semibold absolute bottom-4`}
        >
          More
        </button>
      </Link>
    </div>
  );
};

export default Section;
