import React from "react";

export default function HeroSection() {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./public/building.jpg)",
      }}
    >
      <div className="container max-w-screen-xl">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Lorem, ipsum dolor.</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
              sunt accusantium perferendis, quam modi autem quos doloribus
              provident nisi?
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
