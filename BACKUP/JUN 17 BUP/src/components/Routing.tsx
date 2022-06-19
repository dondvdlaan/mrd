import { Stacks } from "./Stacks"
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";





export const Routing = () =>{

    return(
        <Routes>
            <Route path = "/home" element={<Home />} />
            <Route path = "/stacks" element={<Stacks />} />

            <Route path = "/" element={<Navigate to="/home" />} />


        </Routes>
    )
}