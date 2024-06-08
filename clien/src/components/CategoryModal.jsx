import React from "react";

export default function CategoryModal({ show, onClose, data }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{data.curriculumCategoryTitle}</h2>
          <button onClick={onClose} className="text-red-600">
            X
          </button>
        </div>
        <p className="text-gray-700 dark:text-white mb-2">
          {data.curriculumCategoryAbout}
        </p>
      </div>
    </div>
  );
}
