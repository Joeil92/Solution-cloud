import Input from "@SC/components/form/input"
import Submit from "@SC/components/form/submit"
import Container from "@SC/ui/container/container"
import { useForm } from "react-hook-form"

interface Inputs {
    email: string
    password: string
    plainPassword: string
    firstname: string
    lastname: string
}

export default function RegisterForm() {
    const { handleSubmit, control, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            email: "test@mon-organisation.fr",
            password: "test",
            plainPassword: "test",
            firstname: "John",
            lastname: "Doe"
        }
    });

    const onSubmit = (data: Inputs) => {
        if (data.password !== data.plainPassword) return;

        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="email"
                label="Email"
                placeholder="Email"
                control={control}
                errors={errors.email}
                rules={{ required: true }}
            />
            <Container className="grid grid-cols-2 gap-3">
                <Input
                    name="firstname"
                    label="Prénom"
                    placeholder="Prénom"
                    control={control}
                    errors={errors.firstname}
                    rules={{ required: true }}
                />
                <Input
                    name="lastname"
                    label="Nom"
                    placeholder="Nom"
                    control={control}
                    errors={errors.lastname}
                    rules={{ required: true }}
                />
            </Container>            
            <Input
                name="password"
                label="Mot de passe"
                placeholder="Mot de passe"
                type="password"
                control={control}
                errors={errors.password}
                rules={{ required: true }}
            />
            <Input
                name="plainPassword"
                label="Confirmer le mot de passe"
                placeholder="Mot de passe"
                type="password"
                control={control}
                errors={errors.plainPassword}
                rules={{ required: true }}
            />
            <Submit
                value="Créer mon compte"
            />
        </form>
    )
}