import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SeriesPage from "../pages/SeriesPage";

export default function Rotes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/series/:id" element={<SeriesPage/>}/>
        </Routes>
    )
}