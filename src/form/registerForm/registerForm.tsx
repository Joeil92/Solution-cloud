import Input from "@SC/components/form/input"
import Submit from "@SC/components/form/submit"
import Container from "@SC/ui/container/container"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AlertObject from "@SC/ui/alert/alert.interface";
import Alert from "@SC/ui/alert/alert";
import { createUser } from "@SC/services/firebase/firebase";

interface Inputs {
    email: string
    password: string
    plainPassword: string
    firstname: string
    lastname: string
}

export default function RegisterForm() {
    const navigate = useNavigate();
    const [alert, setAlert] = useState<AlertObject>();
    const { handleSubmit, control, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            email: "test@mon-organisation.fr",
            password: "test1234",
            plainPassword: "test1234",
            firstname: "John",
            lastname: "Doe"
        }
    });

    const onSubmit = async (data: Inputs) => {
        if (data.password !== data.plainPassword) return;

        createUser(data.email, data.password)
            .then((userCredential) => {
                if(userCredential) {
                    const user = userCredential.user;
                    console.log(user);
                    
                    navigate('/');
                }
            })
            .catch((error) => {
                let msg;
                if(error.code == 'auth/email-already-in-use') {
                    msg = "Un compte avec cet email existe déjà"
                } else {
                    msg = "Une erreur est survenue merci de réessayer ultérieurement"
                }

                setAlert({ type: 'danger', message: msg })
            });
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
                    rules={{ required: true, minLength: 6 }}
                />
                <Input
                    name="plainPassword"
                    label="Confirmer le mot de passe"
                    placeholder="Mot de passe"
                    type="password"
                    control={control}
                    errors={errors.plainPassword}
                    rules={{ required: true, minLength: 6 }}
                />
                <Submit
                    value="Créer mon compte"
                />
            </form>
        </>
    )
}