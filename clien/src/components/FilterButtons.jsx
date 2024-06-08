import React from "react";

export default function FilterButtons({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center mb-6 space-x-2 space-y-2">
      <button
        className={`px-4 py-2 ${
          selectedCategory === ""
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black"
        }`}
        onClick={() => setSelectedCategory("")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 ${
            selectedCategory === category.id
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedCategory(category.id)}
          style={{
            backgroundColor:
              selectedCategory === category.id
                ? category.curriculumCategoryColor.hex
                : undefined,
          }}
        >
          {category.curriculumCategoryTitle}
        </button>
      ))}
    </div>
  );
}
