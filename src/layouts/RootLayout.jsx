import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="container max-w-5xl mx-auto px-4">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
