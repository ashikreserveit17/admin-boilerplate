import  BaseRoutes from "./routes"
// import Signin from "./pages/user/signin"
import { ConfigProvider } from "antd";
import theme from "./style/theme" 
function App() {
  return (
    <>
    <ConfigProvider  theme={{
            token: {
              colorPrimary: theme.palette.primary.main,
              borderRadius: 4,
              fontFamily: theme.typography.fontFamily,
              colorBgContainer:"white",
              heightFull: "100vh"
            },
          }}>
       <BaseRoutes/>
    </ConfigProvider>
    </>
  )
}

export default App
