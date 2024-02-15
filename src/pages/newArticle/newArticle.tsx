import ArticleForm from "@SC/form/articleForm/articleForm";
import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";

export default function NewArticle() {
    return (
        <Container className="mx-96">
            <Typography tag="h1">Ajouter un article</Typography>
            <ArticleForm />
        </Container>
    )
}