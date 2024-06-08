import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_CURRICULUM_CATEGORY_QUERY,
  GET_CURRICULUM_QUERY,
} from "../graphQL/queries";
import Modal from "./CalendarModal";

export default function Calendar() {
  const {
    loading: loadingCurriculum,
    error: errorCurriculum,
    data: dataCurriculum,
  } = useQuery(GET_CURRICULUM_QUERY); // properties of useQuery
  const {
    loading: loadingCategories,
    error: errorCategories,
    data: dataCategories,
  } = useQuery(GET_CURRICULUM_CATEGORY_QUERY); // properties of useQuery (categories)

  const [selectedCategory, setSelectedCategory] = useState("backend");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  if (loadingCurriculum || loadingCategories) return <p>Loading...</p>;
  if (errorCurriculum || errorCategories) return <p>Error :(</p>;

  // turn array of categories into object
  const categories = dataCategories.curriculumCategories.reduce(
    (acc, category) => {
      acc[category.id] = category; // key is category id, value is category object
      return acc;
    },
    {} // initial value of acc is empty object
  );

  // group curriculum items by periods
  const periods = dataCurriculum.curriculumItems.reduce((acc, item) => {
    const period = item.curriculumPeriod;
    if (!acc[period]) acc[period] = [];
    acc[period].push(item);
    return acc;
  }, {});

  const handleClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const renderItem = (item) => {
    // Filter on selected category
    if (
      (selectedCategory === "backend" && item.curriculumIsBackEnd === false) ||
      (selectedCategory === "frontend" && item.curriculumIsFrontEnd === false)
    ) {
      return null;
    }

    // Get the category for the current item
    const category = categories[item.curriculumCategory?.id];
    if (!category) {
      console.error(`Category not found, name: ${item.curriculumTitle}`);
      return null;
    }
    return (
      <div
        key={item.id}
        className="p-4 m-2 text-white cursor-pointer"
        style={{ backgroundColor: category.curriculumCategoryColor.hex }}
        onClick={() => handleClick(item)}
      >
        <div className="font-bold">{item.curriculumTitle}</div>
        <div>{item.curriculumPoints} sp</div>
        <div>{item.curriculumHours} u/w</div>
      </div>
    );
  };

  const renderPeriod = (periodNumber) => {
    const periodItems = periods[periodNumber] || [];

    // Group items by category
    const itemsByCategory = periodItems.reduce((acc, item) => {
      const categoryId = item.curriculumCategory.id;
      if (!acc[categoryId]) acc[categoryId] = [];
      acc[categoryId].push(item);
      return acc;
    }, {});

    return (
      <div className="border border-gray-300 mb-4">
        <div className="text-center bg-purple-400 p-2">{`Periode ${periodNumber}`}</div>
        {Object.keys(itemsByCategory).map((categoryId) => (
          <div key={categoryId} className="mb-4">
            {itemsByCategory[categoryId].map(renderItem)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            selectedCategory === "backend"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedCategory("backend")}
        >
          Cloud Application Development
        </button>
        <button
          className={`px-4 py-2 ${
            selectedCategory === "frontend"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedCategory("frontend")}
        >
          Interactive Front-End Development
        </button>
      </div>
      <div className="text-center bg-purple-600 text-white p-4 text-2xl">
        <div className="text-4xl">2024-2026</div>
      </div>
      <div className="grid grid-cols-4 text-center bg-purple-500 text-white max-lg:hidden">
        <div className="col-span-2 md:col-span-2 p-2">Semester 1</div>
        <div className="col-span-2 md:col-span-2 p-2">Semester 2</div>
      </div>
      <div className="grid grid-cols-8 max-sm:grid-cols-1 max-lg:grid-cols-4 gap-1 dark:bg-gray-800">
        {Object.keys(periods).map((periodNumber) => renderPeriod(periodNumber))}
        {/* render all dynamically */}
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        data={selectedItem}
      />
    </div>
  );
}
