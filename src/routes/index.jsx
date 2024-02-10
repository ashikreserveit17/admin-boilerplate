import { Suspense, lazy } from "react"
import {Route,Routes} from "react-router-dom"
import {publicRoutes} from "./publicRoute"
import {privateRoutes} from "./privateRoute"
import Spinner from "../components/Spinner"
import Sidebar from "../layouts/app/sidebar"
// eslint-disable-next-line react-refresh/only-export-components
const WebsiteLayout = lazy(()=>import("../layouts/website"))
export default function index() {
  return (
    <Suspense fallback={<Spinner/>}>
        <Routes>
            <Route path="*" element={<WebsiteLayout/>}>
                {
                    publicRoutes.map(({path,Component})=>{
                        return (
                            <Route
                            key={path}
                            path={path}
                            element={
                                <Suspense fallback={<Spinner/>}>
                                    <Component/>
                                </Suspense>
                            }
                            />
                        )
                    })
                }
            </Route>
            <Route path="app/*" element={<Sidebar/>}>
                {
                    privateRoutes.map(({path,Component})=>{
                        return (
                            <Route
                            key={path}
                            path={path}
                            element={
                                <Suspense fallback={<Spinner/>}>
                                    <Component/>
                                </Suspense>
                            }
                            />
                        )
                    })
                }
            </Route>
        </Routes>

    </Suspense>
  )
}
