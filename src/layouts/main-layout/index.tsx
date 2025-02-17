import React from "react";
import { Header } from "components/Header";
import { Outlet } from "react-router";
import { Footer } from "components/Footer";

export const Layout: React.FC = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
