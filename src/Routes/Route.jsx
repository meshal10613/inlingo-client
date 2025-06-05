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
import MyTutorials from "../Pages/MyTutorials";
import UpdateTutorial from "../Pages/UpdateTutorial";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                loader: () => fetch("http://localhost:3000/tutors"),
                hydrateFallbackElement: <Loading/>,
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
                element: <MyTutorials/>,
            },
            {
                path: "/myBookedTutors"
            },
            {
                path: "/updateTutorial/:id",
                loader: ({params}) => fetch(`http://localhost:3000/tutors/${params.id}`),
                hydrateFallbackElement: <Loading/>,
                element: <UpdateTutorial/>
            }
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