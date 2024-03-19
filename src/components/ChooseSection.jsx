import React from "react";
import ChooseSectionCard from "./ChooseSectionCard";

export default function ChooseSection() {
  return (
    <section className="py-12">
      <div className="container max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
        <ChooseSectionCard />
      </div>
    </section>
  );
}
