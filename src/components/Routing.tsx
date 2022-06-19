import { Stacks } from "./Stacks"
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Technologies } from "./Technologies";
import { Test } from "./Test";





export const Routing = () =>{

    return(
        <Routes>
            <Route path = "/home" element={<Home />} />
            <Route path = "/home/#technologies" element={<Technologies />} />
            <Route path = "/stacks" element={<Stacks />} />

            <Route path = "/test" element={<Test />} />


            <Route path = "/" element={<Navigate to="/home" />} />


        </Routes>
    )
}