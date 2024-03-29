import { AuthContext } from "@SC/contexts/authContext";
import ArticleForm, { Inputs } from "@SC/form/articleForm/articleForm";
import { getDatabaseByFilters, removeDatabase } from "@SC/services/firebase/firebase";
import { Article } from "@SC/types/article.interface";
import Button from "@SC/ui/button/button";
import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";
import { where } from "firebase/firestore";
import { useCallback, useContext, useEffect, useState } from "react";

export default function MyArticles() {
    const { currentUser } = useContext(AuthContext);
    const [articles, setArticles] = useState<Article[]>();
    const [values, setValues] = useState<Inputs>();

    const onDelete = async (id: string) => {
        await removeDatabase("articles", id);
        getArticles();
    }

    const onUpdate = (data: Article) => {
        setValues({
            id: data.id,
            name: data.name,
            description: data.description || "",
            quantity: parseInt(data.quantity),
            user_uid: currentUser?.uid as string,
            category: data.category.id,
            imageUrl: data.imageUrl
        });
    };

    const getArticles = useCallback(async () => {
        if (!currentUser) return;

        const data = await getDatabaseByFilters("articles", where('user_uid', '==', currentUser.uid));
        setArticles(data);
    }, [currentUser]);

    useEffect(() => {
        getArticles();
    }, [currentUser]);

    if (!currentUser) return <Typography>Loading...</Typography>

    return (
        <Container className="mx-96">
            <Typography tag="h1">Mes articles en vente</Typography>
            {values 
                ? <ArticleForm values={values} /> 
                : articles?.map((article) => (
                    <Container key={article.id} className="my-6">
                        <Typography className="font-medium">{article.name}</Typography>
                        <Typography tag="span">{article.description}</Typography>
                        <Container className="flex">
                            <Container className="w-1/3 m-auto">
                                <Button type="danger" onClick={() => onDelete(article.id)}>Supprimer l'article</Button>
                            </Container>
                            <Container className="w-1/3 m-auto">
                                <Button type="primary" onClick={() => onUpdate(article)}>Modifier l'article</Button>
                            </Container>
                        </Container>
                    </Container>
                ))}
        </Container>
    )
}