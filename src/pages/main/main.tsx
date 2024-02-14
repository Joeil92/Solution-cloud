import Typography from "@SC/ui/typography/typography";
import { useOutletContext } from "react-router-dom";
import { OutletContextProps } from "../root/root";

export default function Main() {
    const { user } = useOutletContext<OutletContextProps>();

    return (
        <Typography>{user?.uid}</Typography>
    )
}