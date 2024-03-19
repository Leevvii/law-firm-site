export default function ServicesSectionCard() {
  const contents = [
    {
      id: 1,
      title: "Business Incorporation",
      description:
        "Start your journey on the right foot with our comprehensive company formation services. We'll handle all the paperwork and legal requirements, so you can focus on building your business.",
      image: "./business-consultancy.jpg",
    },
    {
      id: 2,
      title: "Legal Compliance",
      description:
        "Stay on the right side of the law with our legal compliance services. Our team will ensure that your business is fully compliant with all relevant regulations, minimizing the risk of costly fines or legal issues.",
      image: "./tax-registration.jpg",
    },
    {
      id: 3,
      title: "Business Planning",
      description:
        "A solid business plan is the foundation of every successful venture. Let us help you develop a strategic roadmap for your business, tailored to your unique goals and objectives.",
      image: "./government-compliances.jpg",
    },

    // {
    //   id: 4,
    //   title: "Financial Management",
    //   description:
    //     "Take control of your finances with our expert financial management services. From budgeting and forecasting to cash flow management, we'll help you optimize your financial performance and drive growth.",
    //   image: "./government-compliances.jpg",
    // },
  ];

  return (
    <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {contents.map((content) => (
        <div className="card bg-neutral text-neutral-content" key={content.id}>
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
  );
}
