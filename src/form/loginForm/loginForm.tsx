import Input from "@SC/components/form/input";
import Submit from "@SC/components/form/submit";
import Container from "@SC/ui/container/container";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            email: "test@mon-organisation.fr",
            password: "test1234"
        }
    });

    const onSubmit = async (data: Inputs) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
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
