import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddTutorials from "../Pages/AddTutorials";
import FindTutors from "../Pages/FindTutors";
import TutorDetails from "../Pages/TutorDetails";
import Loading from "../Pages/Loading";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/findTutors",
                loader: () => fetch("http://localhost:3000/tutors"),
                hydrateFallbackElement: <Loading/>,
                element: <FindTutors/>
            },
            {
                path: "/tutor/:id",
                loader: ({params}) => fetch(`http://localhost:3000/tutors/${params.id}`),
                hydrateFallbackElement: <Loading/>,
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