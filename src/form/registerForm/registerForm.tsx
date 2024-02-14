import Input from "@SC/components/form/input"
import Submit from "@SC/components/form/submit"
import Container from "@SC/ui/container/container"
import { useForm } from "react-hook-form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface Inputs {
    email: string
    password: string
    plainPassword: string
    firstname: string
    lastname: string
}

export default function RegisterForm() {
    const auth = getAuth();
    const navigate = useNavigate();
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

        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/login');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
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
    )
}