import React from "react";
import ServicesSectionCard from "./ServicesSectionCard";

export default function ServicesSection() {
  return (
    <section className="py-12">
      <div className="container max-w-screen-xl">
        <h2 className="text-4xl mb-2">Services</h2>
        <p className="mb-4 md:mb-6 lg:mb-8 text-lg">
          Here in Prokaizen, we are pleased to introduce to you the number of
          services we provide for your needs.
        </p>
        <ServicesSectionCard />
      </div>
    </section>
  );
}
