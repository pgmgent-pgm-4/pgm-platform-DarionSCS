import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_PORTFOLIO_ITEMS_QUERY } from "../../graphQL/queries";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  const { loading, error, data } = useQuery(GET_PORTFOLIO_ITEMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching portfolio items:", error);
    return <p>Error : {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-gray-800">
      {[...data.portfolioItems]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={item.portfolioImage.url}
              alt={item.portfolioTitle}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">{item.portfolioTitle}</h3>
            <p className="mt-2">{item.portfolioSubject}</p>
            <Link
              to={`/portfolio/${item.id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Details
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PortfolioPreview;
