import React from "react";

export default function GetStartedSection() {
  return (
    <section className="py-12 bg-primary text-primary-content">
      <div className="container max-w-screen-xl">
        <div className="flex flex-col items-center justify-center max-w-xl text-center mx-auto">
          <h2 className="text-4xl font-bold">Get Started Today</h2>
          <p className="my-4">
            Ready to take the next step in your entrepreneurial journey? Contact
            us now to schedule a consultation with one of our experienced
            advisors. Together, we'll create a customized plan to help you
            achieve your business goals.
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </section>
  );
}
