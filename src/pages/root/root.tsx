import Navbar from "@SC/components/navbar/navbar";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export interface OutletContextProps {
    user: User | undefined
}

export default function Root() {
    const auth = getAuth();
    const [user, getUser] = useState<User>();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getUser(user);
            } else {
                console.log("user is logged out")
            }
        });

    }, []);

    return (
        <>
            <Navbar />
            <Outlet context={{ user: user }} />
        </>
    )
}