import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import BookAppointment from './components/BookAppointment/BookAppointment';
import DesignSystem from './components/DesignSystem/DesignSystem';
import FinalFormSubmission from './components/FinalFormSubmission/FinalFormSubmission';
import LandingPage from './components/LandingPage/LandingPage';
import SuccessPage from './components/SuccessPage/SuccessPage';
import TreatmentSelection from './components/TreatmentSelection/TreatmentSelection';
import "./index.css";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "treatment-selection",
      element: <TreatmentSelection />,
    },
    {
      path: "book-appointment/:treatment",
      element: <BookAppointment />,
    },
    {
      path: "final-form-submission",
      element: <FinalFormSubmission />,
    },
    {
      path: "success-page",
      element: <SuccessPage />,
    },
    {
      path: "design-system",
      element: <DesignSystem />,
    },
  ]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
