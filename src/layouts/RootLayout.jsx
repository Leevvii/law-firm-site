import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <main className="container max-w-screen-xl">
        <Outlet />
      </main>
    </>
  );
}
