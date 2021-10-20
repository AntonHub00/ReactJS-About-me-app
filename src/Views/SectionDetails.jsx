import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import data from "../api/mock.json";

const SectionDetails = () => {
  const { id } = useParams();
  const [sectionItems, setSectionItems] = useState([]);

  const getSectionItemsById = () => {
    try {
      return data.data.find((section) => section.sectionId === Number(id))
        .sectionItems;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    setSectionItems(getSectionItemsById());
  }, []);

  return (
    <div className="p-6 flex flex-wrap gap-4 justify-center items-center min-h-screen">
      {!sectionItems.length
        ? "No section found"
        : sectionItems.map(
            ({
              sectionItemId,
              sectionItemTitle,
              sectionItemContent,
              sectionItemImage,
            }) => (
              <Card
                key={sectionItemId}
                title={sectionItemTitle}
                content={sectionItemContent}
                imgURL={sectionItemImage}
              />
            )
          )}
    </div>
  );
};

export default SectionDetails;
