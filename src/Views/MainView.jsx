import React from "react";
import Section, { baseColors } from "../components/Section";
import data from "../api/mock.json";

const MainView = () => {
  const chooseRandomColor = () => {
    const colorsArray = Object.keys(baseColors);
    return colorsArray[Math.floor(Math.random() * colorsArray.length)];
  };

  return (
    <>
      <div className="py-6 flex flex-wrap gap-4">
        {data.data.map((section) => (
          <Section
            key={section.sectionId}
            title={section.sectionTitle}
            content={section.sectionContent}
            id={section.sectionId}
            color={chooseRandomColor()}
          />
        ))}
      </div>
    </>
  );
};

export default MainView;
