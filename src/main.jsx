import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./style/global.css";
import ThemeProvider from "@mui/system/ThemeProvider";
// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import theme from "./style/theme.js";
import Spinner from "./components/Spinner";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <Suspense fallback={<Spinner />}>
            <App />
          </Suspense>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
