import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { CreatePoint } from "../pages/CreatePoint";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<CreatePoint />} />
        </Routes>
    )
}