import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import data from "../api/mock.json";

const SectionDetails = () => {
  const { id } = useParams();
  const [sectionItems, setSectionItems] = useState([]);

  const getSectionItemsById = () =>
    data.data.find((section) => section.sectionId === Number(id)).sectionItems;

  useEffect(() => {
    setSectionItems(getSectionItemsById());
  }, []);

  return (
    <div className="p-6 flex flex-wrap gap-4 justify-center items-center min-h-screen">
      {sectionItems.map(
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
