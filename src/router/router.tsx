import Login from "@SC/pages/login/login";
import Root from "@SC/pages/root/root";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/"
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;