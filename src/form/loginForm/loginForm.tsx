import Input from "@SC/components/form/input";
import Submit from "@SC/components/form/submit";
import Container from "@SC/ui/container/container";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

interface Inputs {
    email: string
    password: string
}

interface Props {
    // handleAlert: React.Dispatch<React.SetStateAction<AlertState | undefined>>
}

export default function LoginForm({ }: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: Inputs) => {
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8000/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const json = await response.json();
           
            if(!response.ok) {
                throw json.message;
            }

            // AuthProvider.signin(json.token);

            navigate(`/`);
        } catch (error) {
            // handleAlert({ type: 'danger', message: error as string })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="email"
                label="Email"
                placeholder="Email"
                control={control}
                rules={{ required: true }}
                errors={errors.email}
            />
            <Input
                name="password"
                type="password"
                label="Mot de passe"
                placeholder="Mot de passe"
                control={control}
                rules={{ required: true }}
                errors={errors.password}
            />
            <Container className="text-center">
                <Submit
                    value="Se connecter" 
                    disabled={isLoading}
                    loading={isLoading}
                />
            </Container>
        </form>
    )
}
