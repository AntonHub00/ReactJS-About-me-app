import React from "react";
import imageNotFound from "../images/imageNotFound.png";

const Card = ({ imgURL, title, content }) => (
  <div className="rounded-sm bg-white overflow-hidden w-80 shadow-md">
    <div
      style={{
        backgroundImage: `url(${imgURL || imageNotFound})`,
      }}
      className="h-40 max-w-sm bg-cover bg-center"
    />
    <div className="mx-6 my-4 ">
      <div className="font-bold text-xl text-gray-600">
        {title || "No title"}
      </div>
      <p className="mt-2 text-gray-500">{content || "No content"}</p>
    </div>
  </div>
);
export default Card;
