import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

function AdminLayout() {
  return (
    <div className="flex flex-col">
      {/* 🔹 Admin Navbar (persistent across all admin routes) */}
      <AdminNavbar />

      {/* 🔹 Page Content */}
      <main className="flex-grow">
        <Outlet /> {/* This is where nested routes render */}
      </main>


    </div>
  );
}

export default AdminLayout;
