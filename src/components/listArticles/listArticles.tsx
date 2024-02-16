import { Article } from "@SC/types/article.interface";
import Card from "@SC/ui/card/card";
import Container from "@SC/ui/container/container";
import FlexContainer from "@SC/ui/flexContainer/flexContainer";
import Typography from "@SC/ui/typography/typography";

interface Props {
    articles: Article[]
}

export default function ListArticles({ articles }: Props) {
    return (
        <Container>
            {articles.length === 0
            ? <Typography>Aucun article disponible</Typography>
            : articles.map((article) => (
                <Card key={article.id} className="w-full p-3 my-3">
                    <FlexContainer items="center" justify="between">
                        <Typography tag="h3">{article.name}</Typography>
                        <Container>
                            <Typography>ajouté le {article.created_at.toDate().toLocaleDateString('fr')}</Typography>
                            {/* <Typography></Typography> */}
                        </Container>
                    </FlexContainer>
                    <Typography>{article.description}</Typography>
                </Card>
            ))}
        </Container>
    )
}