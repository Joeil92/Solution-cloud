import { AuthContext } from "@SC/contexts/authContext";
import ArticleForm from "@SC/form/articleForm/articleForm";
import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";
import { useContext } from "react";

export default function NewArticle() {
    const { role } = useContext(AuthContext);

    return (
        <Container className="mx-96">
            <Typography tag="h1">Ajouter un article</Typography>
            {role === "seller"
                ? <ArticleForm />
                : <Typography className="text-red-500">Vous n'avez pas le rôle de vendeur.</Typography>}
        </Container>
    )
}