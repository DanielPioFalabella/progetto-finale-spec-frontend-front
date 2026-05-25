import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DefaultLayout from "./layout/DefaultLayout"
import TravelDetails from "./pages/TravelDetails"
import Wishlist from "./pages/WishList"

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/travels/:id" element={<TravelDetails />}/>
          <Route path="/wishlist" element={<Wishlist />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App