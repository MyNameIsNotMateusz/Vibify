import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppLayout } from "./AppLayout"

export const App = () => {

 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<AppLayout />}>
   
    </Route>
   </Routes>
  </BrowserRouter>
 )

}