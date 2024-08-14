import React from "react";
import { Route, Routes } from "react-router-dom";
import PageDashboard from "../views/private/PageDashboard";
import PageLogin from "../views/public/PageLogin";

export default function RouteList() {
    return (
        <Routes>
            <Route path="/" element={<PageLogin />} />

            <Route path="/dashboard" element={<PageDashboard />} />
        </Routes>
    );
}
