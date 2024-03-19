export default function ServicesSectionCard() {
  const contents = [
    {
      id: 1,
      title: "Business Consultancy",
      description:
        "We go beyond the basics. We are here to help improve quality management system and customer satisfaction",
      image: "./business-consultancy.jpg",
    },
    {
      id: 2,
      title: "Tax Registration",
      description:
        "Prokaizen is here to provide assistance in your business registered for tax.",
      image: "./tax-registration.jpg",
    },
    {
      id: 3,
      title: "Government Compliances",
      description:
        "We will help you get started with your business by assisting you in getting the requirements, details and the proper registration with the appropriate government agencies.",
      image: "./government-compliances.jpg",
    },
  ];

  return (
    <div>
      <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {contents.map((content) => (
          <div
            className="card bg-neutral text-neutral-content"
            key={content.id}
          >
            <figure>
              <img
                src={content.image}
                alt={content.title}
                className="object-cover aspect-[4/3]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{content.title}</h2>
              <p>{content.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
