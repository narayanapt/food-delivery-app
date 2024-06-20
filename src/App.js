import React, { Suspense } from "react";
import { lazy} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Grocery } from "./components/Grocery";



const Grocery = lazy(()=>import("./components/Grocery"));


const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <Outlet/>
            <Footer />
        </div>
    );
};


const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout />,
            errorElement: <Error />,
            children:[
                {
                    path:"/",
                    element:<Body />,
                },
                {
                    path:"/about",
                    element: <About />,
                },
                {
                    path:"/contact",
                    element: <Contact />,
                },
                {
                    path:"/grocery",
                    element: (<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>)
                },
                {
                    path:"/restaurants/:resId",
                    element: <RestaurantMenu />
                }
            ]
        }
    ]
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);