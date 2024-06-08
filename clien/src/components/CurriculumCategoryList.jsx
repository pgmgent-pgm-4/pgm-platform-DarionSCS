import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CURRICULUM_CATEGORY_QUERY } from "../graphQL/queries";
import CategoryModal from "./CategoryModal";

export default function CurriculumCategoryList() {
  const { loading, error, data } = useQuery(GET_CURRICULUM_CATEGORY_QUERY);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleClick = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  return (
    <div>
      <ul>
        {data.curriculumCategories.map(
          ({
            curriculumCategoryTitle,
            id,
            curriculumCategoryColor,
            curriculumCategoryAbout,
          }) => (
            <li
              key={id}
              className="font-semibold text-lg m-2 rounded-lg p-2 cursor-pointer hover:bg-gray-100"
              style={{ color: curriculumCategoryColor.hex }}
              onClick={() =>
                handleClick({
                  curriculumCategoryTitle,
                  curriculumCategoryAbout,
                })
              }
            >
              {curriculumCategoryTitle}
            </li>
          )
        )}
      </ul>
      <CategoryModal
        show={showModal}
        onClose={() => setShowModal(false)}
        data={selectedCategory}
      />
    </div>
  );
}
