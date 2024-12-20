import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

// FILE TO IMPORT ALL ROUTES TO App.tsx

export function AppRoutes() {
  return (
    <>
      {/* ROUTE TO /LOGIN USING A COMPONENT */}
      {/* <Route path="/login" element={<Navbar />}></Route> */}
      {/* FOR HAVE MORE THAN 1 COMPONENT USE FRAGMENT <> <Navbar/> <Footer/> </> */}

      {/* ROUTE FOR HOME-PAGE USING AN PAGE ./pages/Home.tsx */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}
