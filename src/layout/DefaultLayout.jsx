import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return(
        <>
        <NavBar />
        <Outlet />
        </>
    )
}

export default DefaultLayout