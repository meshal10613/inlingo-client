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
import AboutUs from "../Pages/Static/AboutUs";
import Blogs from "../Pages/Static/Blogs";
import Subscription from "./Subscription";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                loader: () => fetch("https://assignment-11-server-omega-vert.vercel.app/tutors"),
                hydrateFallbackElement: <Loading/>,
                element: <Home/>
            },
            {
                path: "/findTutors",
                loader: () => fetch("https://assignment-11-server-omega-vert.vercel.app/tutors"),
                hydrateFallbackElement: <Loading/>,
                element: <FindTutors/>
            },
            {
                path: "/tutor/:id",
                loader: ({params}) => fetch(`https://assignment-11-server-omega-vert.vercel.app/tutors/${params.id}`, {
                    credentials: 'include'
                }),
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
                loader: ({params}) => fetch(`https://assignment-11-server-omega-vert.vercel.app/tutors/${params.id}`, {
                    credentials: 'include'
                }),
                hydrateFallbackElement: <Loading/>,
                element: <PrivetRoute><UpdateTutorial/></PrivetRoute>
            },
            {
                path: "/aboutUs",
                element: <AboutUs/>
            },
            {
                path: "/blogs",
                element: <Blogs/>
            },
            {
                path: "/subscription",
                element: <Subscription/>
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