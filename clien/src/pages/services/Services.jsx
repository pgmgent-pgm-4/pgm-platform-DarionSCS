import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_SERVICES_QUERY } from "../../graphQL/queries";

export default function Services() {
  const { loading, error, data } = useQuery(GET_SERVICES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching services:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.serviceItems.map(
          ({ id, serviceTitle, serviceMiniDescription }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mt-4">{serviceTitle}</h3>
              <p className="text-gray-700 dark:text-white mt-2">
                {serviceMiniDescription}
              </p>
              <Link
                to={`/services/${id}`}
                className="text-blue-500 hover:underline mt-4 block"
              >
                Read more
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
