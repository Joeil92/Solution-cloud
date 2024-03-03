import Entity from "@SC/components/form/entity";
import File from "@SC/components/form/file";
import Input from "@SC/components/form/input";
import Submit from "@SC/components/form/submit";
import Textarea from "@SC/components/form/textarea";
import { AuthContext } from "@SC/contexts/authContext";
import { addDatabase, updateDatabase, uploadFile } from "@SC/services/firebase/firebase";
import Container from "@SC/ui/container/container";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

export interface Inputs {
    id?: string
    name: string
    description: string
    category: string | null
    quantity: number
    imageUrl: string
    user_uid: string
    created_at?: Date
}

interface Props {
    values?: Inputs
}

export default function ArticleForm({ values }: Props) {
    const { currentUser } = useContext(AuthContext);
    const [image, setImage] = useState<File>();
    const navigate = useNavigate();
    const { handleSubmit, control, reset, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            name: "",
            description: "",
            category: '',
            quantity: 0,
            user_uid: currentUser?.uid,
            created_at: new Date()
        },
        values
    });

    const onSubmit = async (data: Inputs) => {
        let url;

        if(image) {
            url = await uploadFile(image);
            data.imageUrl = url;
        }
        
        if(!values) {
            const res = await addDatabase("articles", data);
        } else {
            const res = await updateDatabase("articles", data);
        }

        reset();
        navigate('/shop');
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setImage(e.target.files[0]);
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
            <File
                name=""
                placeholder="Télécharger une image"
                label="Image"
                onChange={handleFileChange}
                control={control}
                errors={undefined}
            />
            <Textarea
                name="description"
                placeholder="Description"
                label="Description"
                control={control}
                errors={errors.description}
            />
            <Submit value={!values ? "Créer l'article" : "Modifier l'article" } />
        </form>
    )
}