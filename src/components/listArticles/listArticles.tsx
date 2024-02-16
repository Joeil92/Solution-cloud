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
                <Card key={article.id} className="w-full my-3">
                    <Container className="grid grid-cols-6">
                        <img src={article.imageUrl} className="px-3" alt="" />
                        <Container className="col-span-5">
                            <FlexContainer items="center" justify="between">
                                <Typography tag="h3">
                                    {article.name} <Typography tag="span">stock : {article.quantity}</Typography>
                                </Typography>
                                <Container>
                                    <Typography>ajouté le {article.created_at.toDate().toLocaleDateString('fr')}</Typography>
                                </Container>
                            </FlexContainer>
                            <Typography>{article.description}</Typography>
                        </Container>
                    </Container>
                </Card>
            ))}
        </Container>
    )
}