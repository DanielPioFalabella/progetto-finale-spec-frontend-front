import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DefaultLayout from "./layout/DefaultLayout"
import TravelDetails from "./pages/TravelDetails"
import Wishlist from "./pages/WishList"
import { WishlistProvider } from "./context/WishlistContext"

const App = () => {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/travels/:id" element={<TravelDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WishlistProvider>

  )
}

export default App