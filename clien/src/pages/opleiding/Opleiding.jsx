import React from "react";

export default function Opleiding() {
  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-slate-800">
      <header className="bg-blue-800 dark:bg-blue-950 text-white p-6 rounded shadow-md">
        <h1 className="text-4xl font-bold">Graduaat Programmeren</h1>
        <p className="mt-2 text-lg">
          Start je carrière in softwareontwikkeling
        </p>
      </header>
      <section className="my-8 p-6 bg-white dark:bg-black rounded shadow-md">
        <h2 className="text-3xl font-semibold">Over de opleiding</h2>
        <p className="mt-4 text-gray-700 dark:text-white">
          Het graduaat Programmeren is een praktijkgerichte opleiding waarin je
          leert programmeren en software ontwikkelen. Je werkt aan verschillende
          projecten en leert samenwerken in teamverband. De opleiding richt zich
          op de meest gevraagde technologieën en methodieken in de industrie.
        </p>
        <img
          className="mt-4 rounded shadow-md w-full h-[36rem] object-cover"
          src="https://ahscdn.be/sites/default/files/styles/hero_image_metadata_xl_2x/public/2023-01/cmd_pgm_noradileo.jpg.webp?token=1717857017&itok=hAzHf7IL"
          alt="Over de opleiding"
        />
      </section>
      <section className="my-8 p-6 bg-white dark:bg-black rounded shadow-md">
        <h2 className="text-3xl font-semibold">Waarom deze opleiding?</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-white space-y-2">
          <li>Hands-on ervaring met actuele technologieën.</li>
          <li>Begeleiding door ervaren professionals.</li>
          <li>Goede kansen op de arbeidsmarkt.</li>
          <li>Projectmatig werken in teamverband.</li>
          <li>Uitgebreide netwerk- en stageopportuniteiten.</li>
        </ul>
      </section>
      <section className="my-8 p-6 bg-white dark:bg-black rounded shadow-md">
        <h2 className="text-3xl font-semibold">Wat ga je leren?</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-white space-y-2">
          <li>
            Programmeren in verschillende talen zoals JavaScript, Python, en
            Java.
          </li>
          <li>Ontwerpen en ontwikkelen van web- en mobiele applicaties.</li>
          <li>Werken met databases en versiebeheersystemen.</li>
          <li>
            Analyseren van gebruikersbehoeften en vertalen naar technische
            oplossingen.
          </li>
          <li>
            Begrijpen en toepassen van softwareontwikkelingsmethodieken zoals
            Agile en Scrum.
          </li>
        </ul>
      </section>
      <section className="my-8 p-6 bg-white dark:bg-black rounded shadow-md">
        <h2 className="text-3xl font-semibold">Inschrijven</h2>
        <p className="mt-4 text-gray-700 dark:text-white">
          Wil je je inschrijven voor de opleiding? Bezoek dan onze{" "}
          <a
            href="https://www.arteveldehogeschool.be/nl/opleidingen/graduaat/programmeren"
            className="text-blue-700 underline dark:text-blue-300"
            target="_blank"
          >
            inschrijvingspagina
          </a>{" "}
          voor meer informatie over de inschrijvingsprocedure en deadlines.
        </p>
      </section>
    </div>
  );
}
