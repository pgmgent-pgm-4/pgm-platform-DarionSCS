import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_TEAM_QUERY } from "../../graphQL/queries";

export default function TeamDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TEAM_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching team details:", error);
    return <p>Error: {error.message}</p>;
  }

  const teamMember = data.teamItems.find((item) => item.id === id);

  if (!teamMember) return <p>Team member not found</p>;

  const { teamName, teamAbout, teamImg, teamSubject } = teamMember;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">{teamName}</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {teamImg && (
          <img
            src={teamImg.url}
            alt={teamName}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
        <p className="text-gray-700 dark:text-white mt-2">{teamAbout}</p>
        <div className="mt-4 flex">
          {teamSubject.map((subject) => (
            <span
              key={subject.id}
              className="text-white px-2 py-1 mr-2 rounded"
              style={{ backgroundColor: subject.curriculumCategoryColor.hex }}
            >
              {subject.curriculumCategoryTitle}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
