import { useEffect } from "react"
import styles from "./alert.module.css";
import Container from "../container/container";
import AlertInterface from "./alert.interface";

interface Props {
    type: "primary" | "success" | "danger" | "warning"
    message: string
    handleState?: React.Dispatch<React.SetStateAction<AlertInterface | undefined>>
}

export default function Alert({ type, message, handleState }: Props) {

    const handleType = () => {
        if(type === "danger") {
            return "my-3 font-medium bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        } else {
            return "my-3 font-medium bg-blue-200 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
        }
    }

    useEffect(() => {
        if (handleState) {
            const timeout = setTimeout(() => {
                handleState(undefined)
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [handleState]);

    return (
        <Container className={handleState ? styles.alert : ""}>
            <Container className={handleType()}>
                <p>{message}</p>
            </Container>
        </Container>
    )
}