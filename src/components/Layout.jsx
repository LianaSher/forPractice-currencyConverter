import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/converterPage">Converter</NavLink>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
