import {lazy} from "react"
import {PUBLIC_ROUTES} from "./path"
export const publicRoutes=[
    {
        path:PUBLIC_ROUTES.SIGNIN,
        Component: lazy(()=>import("../pages/user/signin"))
    },
    // {
    //     path:PUBLIC_ROUTES.SIGNUP,
    //     Component: lazy(()=>import("../pages/user/regi"))
    // },
    {
        path:PUBLIC_ROUTES.RESET,
        Component: lazy(()=>import("../pages/user/forget"))
    },
    {
        path:PUBLIC_ROUTES.VERIFY,
        Component: lazy(()=>import("../pages/user/otp"))
    },
]