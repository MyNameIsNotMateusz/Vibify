import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppLayout } from "./AppLayout"
import { Discover } from "../components/Discover";

export const App = () => {

 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="discover" element={<Discover />} />
    </Route>
   </Routes>
  </BrowserRouter>
 )

}