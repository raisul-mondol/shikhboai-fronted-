import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";

import Home from "../Pages/Home";
import Login from "../Pages/Login";

import CourseDetails from "../Components/Mcourses/CourseDetails";
import PaymentProces from "../Components/Payment/PaymentProces";

import ScrollToTop from "../Components/ScrollToTop";

import Admin from "../Pages/Admin";
import Mcourses from "../Components/Mcourses/Mcourses";

function AppRoutes() {
  return (
    <div>
      <ScrollToTop />

      <Routes>

        {/* Main Website */}
        <Route element={<MainLayouts />}>

          {/* Single Page Home */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Mcourses/>} />

          {/* Login Page */}
         

          {/* Course Details */}
          <Route
            path="/courses/:id"
            element={<CourseDetails />}
          />

          {/* Payment */}
         

        </Route>

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<Admin />}
        />

      </Routes>
    </div>
  );
}

export default AppRoutes;