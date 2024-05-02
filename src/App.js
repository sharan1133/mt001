import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import Login from "./components/login/Login";
import Subscription from "./components/subscriptions/Subscription";
import Advertisement from "./components/advertisers/Advertisement";
import Home from "./components/home/Home";
import Landing from "./components/Landing/Landing";
import ProfilePage from "./components/profile/ProfilePage";
import Register from "./components/register/Register";
import About from "./components/about/About";



const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
        
        
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')) ;

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Landing />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/subscription",
                element: <Subscription />
            }, 
            {
                path: "/advertisement",
                element: <Advertisement />
            },
            {
                path: "/home",
                element: <Home />
            },
	        {
        	path: "/profile", // Add a new route for the ProfilePage
                element: <ProfilePage />,
            },
	        {
	        path: "/register",
		    element: <Register />
	        },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />)
