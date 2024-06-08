import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import FilterButtons from "../../components/FilterButtons";
import { GET_PORTFOLIO_ITEMS_QUERY } from "../../graphQL/queries";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

function Portfolio() {
  const { loading, error, data } = useQuery(GET_PORTFOLIO_ITEMS_QUERY);
  const [selectedCategory, setSelectedCategory] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching portfolio items:", error);
    return <p>Error: {error.message}</p>;
  }

  const categories = Array.from(
    new Set(data.portfolioItems.flatMap((item) => item.curriculumCategory)) //get unique categories using Set
  );

  const filteredItems = selectedCategory
    ? data.portfolioItems.filter(
        //filter the items based on selected category
        (item) => item.curriculumCategory.id === selectedCategory
      )
    : data.portfolioItems;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Portfolio</h1>
      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(
          ({
            id,
            portfolioTitle,
            portfolioDescription,
            portfolioCreator,
            portfolioImage,
            portfolioWebsite,
            curriculumCategory,
          }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <Link to={`${ROUTES.portfolio.path}/${id}`}>
                {portfolioImage && (
                  <img
                    src={portfolioImage.url}
                    alt={portfolioTitle}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <h3 className="text-xl font-bold mt-4">{portfolioTitle}</h3>

                <p className="text-gray-500 dark:text-white mt-2">
                  By {portfolioCreator ? portfolioCreator : "Unknown"}
                </p>
              </Link>

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
                  className="text-white dark:text-white px-2 py-1 mr-2 rounded"
                  style={{
                    backgroundColor:
                      curriculumCategory.curriculumCategoryColor.hex,
                  }}
                >
                  {curriculumCategory.curriculumCategoryTitle}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Portfolio;
