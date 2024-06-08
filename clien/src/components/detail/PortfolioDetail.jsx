import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PORTFOLIO_ITEMS_QUERY } from "../../graphQL/queries";

export default function PortfolioDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PORTFOLIO_ITEMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching portfolio details:", error);
    return <p>Error: {error.message}</p>;
  }

  const portfolioItem = data.portfolioItems.find((item) => item.id === id);

  if (!portfolioItem) return <p>Portfolio item not found</p>;

  const {
    portfolioTitle,
    portfolioDescription,
    portfolioCreator,
    portfolioImage,
    portfolioWebsite,
    curriculumCategory,
  } = portfolioItem;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">{portfolioTitle}</h1>
      <div className="bg-white dark:bg-gray-800  p-6 rounded-lg shadow-md">
        {portfolioImage && (
          <img
            src={portfolioImage.url}
            alt={portfolioTitle}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
        <p className="text-gray-700 dark:text-white mt-2">
          {portfolioDescription}
        </p>
        <p className="text-gray-500 dark:text-white mt-2">
          By {portfolioCreator ? portfolioCreator : "Unknown"}
        </p>
        {portfolioWebsite && (
          <a
            href={portfolioWebsite}
            className="text-blue-500 hover:underline mt-4 block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        )}
        <div className="mt-4 flex">
          <span
            className="text-white px-2 py-1 mr-2 rounded"
            style={{
              backgroundColor: curriculumCategory.curriculumCategoryColor.hex,
            }}
          >
            {curriculumCategory.curriculumCategoryTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
