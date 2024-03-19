export default function AboutSection() {
  return (
    <section className="bg-base-200 py-8 lg:py-16">
      <div className="container max-w-screen-xl">
        <div className="hero">
          <div className="grid gap-4 lg:gap-8 lg:grid-flow-col place-items-center">
            <img
              src={"./public/business.jpg"}
              className="rounded-lg shadow-2xl order-first lg:order-last"
              alt="business"
            />
            <div className="flex-col-reverse">
              <h2 className="text-4xl font-bold">About Us</h2>
              <p className="my-4">
                At [Your Company Name], we believe that every entrepreneur
                deserves the opportunity to succeed. That's why we're committed
                to providing the highest quality consultancy services to
                businesses of all sizes and industries. With a team of
                experienced professionals and a passion for helping others
                succeed, we're dedicated to being your trusted partner in
                business success.
              </p>
              <button className="btn btn-secondary">More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
