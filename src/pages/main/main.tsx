import { AuthContext } from "@SC/contexts/authContext";
import Typography from "@SC/ui/typography/typography";
import { useContext } from "react";

export default function Main() {
    const { currentUser } = useContext(AuthContext);

    return (
        <Typography>Bienvenue !</Typography>
    )
}