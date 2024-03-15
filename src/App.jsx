import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import './scss/App.scss';
import Main from "./components/Main";

function App() {

   return (
      <>
         <Routes >
            <Route path="/" element={<Layout />}>
               <Route index element={<Main />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
