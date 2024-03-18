import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import './scss/App.scss';
import Index from "./components/Index";
import CreateSection from "./components/CreateSection";
import Quitz from "./components/Quitz";

function App() {

   return (
      <>
         <Routes >
            <Route path="/" element={<Layout />}>
               <Route index element={<Index />} />
               <Route path="create" element={<CreateSection />} />
               <Route path="quitz" element={<Quitz />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
