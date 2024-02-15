import Searchbar from "@SC/components/searchbar/searchbar";
import Sidebar from "@SC/components/sidebar/sidebar";
import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Shop() {
    const [searchParams] = useSearchParams();
    const [searchbarInput, setSearchbarInput] = useState("");

    useEffect(() => {
        console.log("coucou");
    }, [searchParams]);

    return (
        <>
            <Sidebar />
            <Container style={{ marginLeft: "calc(200px + 10px)", marginRight: "10px" }}>
                <Container className="flex">
                    <Searchbar placeholder="Chercher" handleChange={setSearchbarInput} />
                </Container>
                <Typography>Shop</Typography>
            </Container>
        </>
    )
}