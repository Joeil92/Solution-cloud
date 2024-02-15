import Entity from "@SC/components/form/entity";
import Input from "@SC/components/form/input";
import Submit from "@SC/components/form/submit";
import Textarea from "@SC/components/form/textarea";
import { addDatabase } from "@SC/services/firebase/firebase";
import Container from "@SC/ui/container/container";
import { useForm } from "react-hook-form"

interface Inputs {
    name: string
    description: string
    category: string | null
    quantity: number
}

export default function ArticleForm() {
    const { handleSubmit, control, reset, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            name: "",
            description: "",
            category: null,
            quantity: 0
        }
    });

    const onSubmit = async (data: Inputs) => {
        const res = await addDatabase("articles", data);
        console.log(res);

        if(res) reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="name"
                placeholder="Nom"
                label="Nom"
                control={control}
                errors={errors.name}
                rules={{ required: true }}
            />
            <Container className="grid grid-cols-2 gap-3">
                <Entity
                    name="category"
                    label="Catégorie"
                    placeholder="Catégorie"
                    endpoint="categories"
                    optionValue="name"
                    control={control}
                    errors={errors.category}
                />
                <Input
                    name="quantity"
                    type="number"
                    placeholder="Quantité de l'article disponible"
                    label="Stock"
                    control={control}
                    errors={errors.quantity}
                />
            </Container>
            <Textarea
                name="description"
                placeholder="Description"
                label="Description"
                control={control}
                errors={errors.description}
            />
            <Submit value="Créer l'aticle" />
        </form>
    )
}