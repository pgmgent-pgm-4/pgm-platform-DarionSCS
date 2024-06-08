import React from "react";
import Jumbotron from "../components/home/Jumbotron";
import BlogCard from "../components/home/BlogCard";
import PortfolioPreview from "../components/home/PortfolioPreview";
import ServicesOverview from "../components/home/ServicesOverview";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Jumbotron />
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Featured Portfolio</h2>
        <PortfolioPreview />
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
        <BlogCard />
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <ServicesOverview />
      </section>
    </div>
  );
}
