import { createBrowserRouter } from "react-router-dom";
// import Home from "./components/home";
import AboutUs from "./components/about";
import Example from "./components/Example";
import ParentComp from "./components/project/project";
import Users from "./components/users";
import Practice from "./components/test/testpractice";
import Book from "./components/test/testst";

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
  {
    path: "users",
    element: <Users />,
  },

  { path: "test", element: <Practice /> },

  { path: "bookroute", element: <Book /> },
]);
