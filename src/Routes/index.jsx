import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App.routes";
import { AuthRoutes } from "./Auth.routes";
import { AuthContext } from "../hooks/Auth";
import { useContext } from "react";
export function Routes(){
    const {User}=useContext(AuthContext)
    return(
        <BrowserRouter>
        {User? <AppRoutes/>: <AuthRoutes/>}
        </BrowserRouter>
    )
}