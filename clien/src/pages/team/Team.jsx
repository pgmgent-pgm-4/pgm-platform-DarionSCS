import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import FilterButtons from "../../components/FilterButtons";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

import { GET_TEAM_QUERY } from "../../graphQL/queries";

function Team() {
  const { loading, error, data } = useQuery(GET_TEAM_QUERY);
  const [selectedCategory, setSelectedCategory] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching team items:", error);
    return <p>Error: {error.message}</p>;
  }

  const categories = [
    ...new Set(data.teamItems.flatMap((item) => item.teamSubject)), //converts to array using spread and get unique categories using Set
  ];

  const filteredTeamItems = selectedCategory
    ? data.teamItems.filter((item) =>
        item.teamSubject.some((subject) => subject.id === selectedCategory)
      )
    : data.teamItems;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Team</h1>
      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeamItems.map(
          ({ id, teamName, teamAbout, teamImg, teamSubject }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <Link to={`${ROUTES.team.path}/${id}`}>
                {teamImg && (
                  <img
                    src={teamImg.url}
                    alt={teamName}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <h3 className="text-xl font-bold mt-4">{teamName}</h3>
              </Link>
              <div className="mt-4 flex">
                {teamSubject.map((subject) => (
                  <span
                    key={subject.id}
                    className="text-white px-2 py-1 mr-2 rounded"
                    style={{
                      backgroundColor: subject.curriculumCategoryColor.hex,
                    }}
                  >
                    {subject.curriculumCategoryTitle}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Team;
