import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SERVICES_QUERY } from "../../graphQL/queries";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const { loading, error, data } = useQuery(GET_SERVICES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching services:", error);
    return <p>Error : {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 dark:bg-gray-800">
      {[...data.serviceItems]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        .map((service) => (
          <div
            key={service.serviceTitle}
            className="border p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold">{service.serviceTitle}</h3>
            <p className="mt-2">{service.serviceMiniDescription}</p>
            <Link
              to={`${ROUTES.services.path}/${service.id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              Learn More
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ServicesOverview;
