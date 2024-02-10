import {lazy} from "react"
import {PRIVATE_ROUTES} from "./path"
export const privateRoutes=[
    {
        path:PRIVATE_ROUTES.DASHBOARD,
        Component: lazy(()=>import("../pages/dashboard"))
    },
    // // {
    // //     path:PRIVATE_ROUTES.SIGNUP,
    // //     Component: lazy(()=>import("../pages/user/regi"))
    // // },
    {
        path:PRIVATE_ROUTES.NOT_FOUND,
        Component: lazy(()=>import("../pages/404"))
    },
    // {
    //     path:PRIVATE_ROUTES.VERIFY,
    //     Component: lazy(()=>import("../pages/user/otp"))
    // },
]