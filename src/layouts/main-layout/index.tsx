import React from "react";
import { Header } from "components/Header";
import { Outlet, useLocation } from "react-router";
import { Footer } from "components/Footer";

export const Layout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      {!isAuthPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};
