import ListArticles from "@SC/components/listArticles/listArticles";
import Loader from "@SC/components/loader/loader";
import Searchbar from "@SC/components/searchbar/searchbar";
import Sidebar from "@SC/components/sidebar/sidebar";
import { getDatabaseByFilters } from "@SC/services/firebase/firebase";
import { Article } from "@SC/types/article.interface";
import Container from "@SC/ui/container/container";
import FlexContainer from "@SC/ui/flexContainer/flexContainer";
import { orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Shop() {
    const [searchParams] = useSearchParams();
    const [searchbarInput, setSearchbarInput] = useState("");
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const getArticles = async () =>{
            const data = await getDatabaseByFilters('articles', orderBy('created_at', 'desc'));
            
            setArticles(data);
        }

        getArticles();
    }, [searchParams]);

    const articlesFiltered = articles.filter(e => {
        if(!e.name.toLocaleLowerCase().includes(searchbarInput.toLocaleLowerCase())) {
            return false
        };

        if(searchParams.get('c') && e.category.id !== searchParams.get('c')) {
            return false
        };

        return true;
    });

    return (
        <>
            <Sidebar />
            <Container style={{ marginLeft: "calc(200px + 10px)", marginRight: "10px" }}>
                <FlexContainer items="center" justify="between">
                    <Searchbar placeholder="Chercher" handleChange={setSearchbarInput} />
                </FlexContainer>
                {articles.length === 0
                ? <Loader />
                : <ListArticles articles={articlesFiltered} />}
            </Container>
        </>
    )
}