import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ListPatients from "./components/ListPatients";
import ViewPatient from "./components/ViewPatient";

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/patients" />} />
          <Route path="/patients/:id" element={<ViewPatient />} />
          <Route path="/patients" element={<ListPatients />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
