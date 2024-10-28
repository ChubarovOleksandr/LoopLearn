import React from 'react';
import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Index from "./components/dashboard/Dashboard";
import CreateSection from "./components/createSection/CreateSection";
import QuitzPage from "./components/quitz/QuitzPage";

const App: React.FC = () => {

   return (
      <>
         <Routes >
            <Route element={<Layout />}>
               <Route index element={<Index />} />
               <Route path="create" element={<CreateSection />} />
               <Route path="quitz" element={<QuitzPage />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
