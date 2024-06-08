import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import './scss/App.scss';
import Index from "./components/dashboard/Dashboard";
import CreateSection from "./components/createSection/CreateSection";
import QuitzPage from "./components/quitz/QuitzPage";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";

function App() {

   return (
      <>
         <Routes >
            <Route path='sign-up' element={<SignUp />} />
            <Route path='log-in' element={<LogIn />} />
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
