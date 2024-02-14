import Input from "@SC/components/form/input";
import Submit from "@SC/components/form/submit";
import { signInUser } from "@SC/services/firebase/firebase";
import Alert from "@SC/ui/alert/alert";
import AlertObject from "@SC/ui/alert/alert.interface";
import Container from "@SC/ui/container/container";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

interface Inputs {
    email: string
    password: string
}

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [alert, setAlert] = useState<AlertObject>();
    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            email: "test@mon-organisation.fr",
            password: "test1234"
        }
    });

    const onSubmit = async (data: Inputs) => {
        setIsLoading(true);

        await signInUser(data.email, data.password)
            .then((userCredential) => {
                if(userCredential) {
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/');
                }
            })
            .catch((error) => {
                let msg;

                if (error.code == "auth/invalid-credential") {
                    msg = "Email ou mot de passe incorrect"
                } else {
                    msg = "Une erreur est survenue, merci de réessayer ultérieurement"
                }

                setAlert({ type: 'danger', message: msg });
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            {alert &&
                <Alert
                    type={alert.type}
                    message={alert.message}
                    handleState={setAlert} />}
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
        </>
    )
}
