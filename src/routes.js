import { createBrowserRouter } from "react-router-dom";
// import Home from "./components/home";
import AboutUs from "./components/about";
import Example from "./components/Example";
import ParentComp from "./components/project/project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ParentComp />,
  },
  {
    path: "aboutus", //URL
    element: <AboutUs />,
  },
  {
    path: "example",
    element: <Example />,
  },
]);
