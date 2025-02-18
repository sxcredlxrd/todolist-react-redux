import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "../../app/layouts/index.jsx";
import Main from "../../pages/Main/index.jsx";

export const ReactRouterProvider = () => {

    const router = createBrowserRouter([
        {
            element: <Layout/>,
            path: "/",
            children: [
                {
                    path: "",
                    element: <Main/>,
                }
            ]
        }
    ])

    return <RouterProvider router={router}/>;
}