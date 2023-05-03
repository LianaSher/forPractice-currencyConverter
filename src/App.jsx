import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/Layout";

const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const ConverterPage = lazy(() =>
  import("./components/pages/ConverterPage/ConverterPage")
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/converterPage" element={<ConverterPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
