import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import BlogOne from "./Components/BlogOne/BlogOne";
import BlogTwo from "./Components/BlogTwo/BlogTwo";
import BlogThree from "./Components/BlogThree/BlogThree";
import BlogFour from "./Components/BlogFour/BlogFour";
import BlogFive from "./Components/BlogFive/BlogFive";
import BlogSix from "./Components/BlogSix/BlogSix";
import BlogSeven from "./Components/BlogSeven/BlogSeven";
import BlogEight from "./Components/BlogEight/BlogEight";
import BlogNine from "./Components/BlogNine/BlogNine";
import BlogTen from "./Components/BlogTen/BlogTen";
import BlogEleven from "./Components/BlogEleven/BlogEleven";
import BlogTwenteen from "./Components/BlogTwenteen/BlogTwenteen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/commercial-issues",
      element: <BlogOne />,
    },
    {
      path: "/astronomical-property",
      element: <BlogTwo />,
    },
    {
      path: "/astronomical-property",
      element: <BlogTwo />,
    },
    {
      path: "/division-of-estates",
      element: <BlogThree />,
    },
    {
      path: "/real-estate-lawsuits",
      element: <BlogFour />,
    },
    {
      path: "/commercial-ontracts",
      element: <BlogFive />,
    },
    {
      path: "/information-issues",
      element: <BlogSix />,
    },
    {
      path: "/devorce",
      element: <BlogSeven />,
    },
    {
      path: "/establishing-companies",
      element: <BlogEight />,
    },
    {
      path: "/criminal-cases",
      element: <BlogNine />,
    },
    {
      path: "/labor-relations",
      element: <BlogTen />,
    },
    {
      path: "/debt-collection",
      element: <BlogEleven />,
    },
    {
      path: "/preparing-legal-memorandums",
      element: <BlogTwenteen />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
