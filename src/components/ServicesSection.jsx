import React from "react";
import ServicesSectionCard from "./ServicesSectionCard";

export default function ServicesSection() {
  return (
    <section className="py-12">
      <div className="container max-w-screen-xl">
        <h2 className="text-4xl mb-2">Our Services</h2>

        <ServicesSectionCard />
      </div>
    </section>
  );
}
