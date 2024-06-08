import React, { useState } from "react";
import Calendar from "../../components/Calendar";
import CurriculumCategoryList from "../../components/CurriculumCategoryList";

export default function Curriculum() {
  return (
    <main>
      <Calendar /> <CurriculumCategoryList />
    </main>
  );
}
