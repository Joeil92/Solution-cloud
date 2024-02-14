import Navbar from "@SC/components/navbar/navbar";
import { AuthProvider } from "@SC/contexts/authContext";
import { User } from "firebase/auth";
import { Outlet } from "react-router-dom";

export interface OutletContextProps {
    user: User | undefined
}

export default function Root() {
    return (
        <>
            <AuthProvider>
                <Navbar />
                <Outlet />
            </AuthProvider>
        </>
    )
}