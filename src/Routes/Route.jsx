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
import MyBookedTutors from "../Pages/MyBookedTutors";
import PrivetRoute from "./PrivetRoute";

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
                element: <PrivetRoute><TutorDetails/></PrivetRoute>,
            },
            {
                path: "/addTutorials",
                element: <PrivetRoute><AddTutorials/></PrivetRoute>
            },
            {
                path: "/myTutorials",
                element: <PrivetRoute><MyTutorials/></PrivetRoute>,
            },
            {
                path: "/myBookedTutors",
                element: <PrivetRoute><MyBookedTutors/></PrivetRoute>
            },
            {
                path: "/updateTutorial/:id",
                loader: ({params}) => fetch(`http://localhost:3000/tutors/${params.id}`),
                hydrateFallbackElement: <Loading/>,
                element: <PrivetRoute><UpdateTutorial/></PrivetRoute>
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