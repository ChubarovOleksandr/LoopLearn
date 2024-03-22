import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import './scss/App.scss';
import Index from "./components/Index";
import CreateSection from "./components/CreateSection";
import Quitz from "./components/Quitz";
import ChangeSection from "./components/ChangeSection";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {

   return (
      <>
         <Routes >
            <Route path='sign-up' element={<SignUp />} />
            <Route path='log-in' element={<LogIn />} />
            <Route element={<Layout />}>
               <Route index element={<Index />} />
               <Route path="create" element={<CreateSection />} />
               <Route path="change" element={<ChangeSection />} />
               <Route path="quitz" element={<Quitz />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
