import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddTutorials from "../Pages/AddTutorials";
import FindTutors from "../Pages/FindTutors";
import TutorDetails from "../Pages/TutorDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/findTutors",
                loader: () => fetch("http://localhost:3000/tutors"),
                hydrateFallbackElement: <p>Loader</p>,
                element: <FindTutors/>
            },
            {
                path: "/tutor/:id",
                loader: ({params}) => fetch(`http://localhost:3000/tutors/${params.id}`),
                hydrateFallbackElement: <p>Loader</p>,
                element: <TutorDetails/>,
            },
            {
                path: "/addTutorials",
                element: <AddTutorials/>
            },
            {
                path: "/myTutorials",
                
            },
            {
                path: "/myBookedTutors"
            },
        ]
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    },
]);