import React from "react";

export default function ChooseSectionCard() {
  const chooseContent = [
    {
      id: 1,
      title: "Experience",
      description:
        "With years of experience in the industry, our team has the knowledge and expertise to help you succeed.",
    },
    {
      id: 2,
      title: "Personalized Service",
      description:
        "We take the time to understand your specific needs and goals, ensuring that our services are tailored to your unique requirements.",
    },
    {
      id: 3,
      title: "Reliability",
      description:
        "You can trust us to deliver results on time and within budget, so you can focus on running your business with confidence.",
    },
  ];

  return (
    <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {chooseContent.map((content) => (
        <div className="card bg-neutral text-neutral-content" key={content.id}>
          <div className="card-body">
            <h2 className="card-title">{content.title}</h2>
            <p>{content.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
