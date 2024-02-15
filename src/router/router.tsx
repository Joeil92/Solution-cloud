import Login from "@SC/pages/login/login";
import Root from "@SC/pages/root/root";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Register from "@SC/pages/register/register";
import Main from "@SC/pages/main/main";
import Shop from "@SC/pages/shop/shop";
import NewArticle from "@SC/pages/newArticle/newArticle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "newArticle",
                element: <NewArticle />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
]);

export default router;