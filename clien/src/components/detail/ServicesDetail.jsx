import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_SERVICES_QUERY } from "../../graphQL/queries"; // Adjust the path as necessary

export default function ServiceDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SERVICES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching service details:", error);
    return <p>Error: {error.message}</p>;
  }

  const serviceItem = data.serviceItems.find((item) => item.id === id);

  if (!serviceItem) return <p>Service item not found</p>;

  const { serviceTitle, serviceLongDescription } = serviceItem;

  return (
    <div className="container mx-auto p-4 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6">{serviceTitle}</h1>
      <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <p className="text-gray-700 dark:text-white mt-2">
          {serviceLongDescription}
        </p>
      </div>
    </div>
  );
}
