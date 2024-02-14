import LoginForm from "@SC/form/loginForm/loginForm";
import Button from "@SC/ui/button/button";
import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    return (
        <>
            <Container className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Container className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <Container className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <Typography tag="h1" className="font-bold">Se connecter</Typography>
                        <LoginForm />
                        <Typography className="text-center">Vous n'avez pas encore de compte ?</Typography>
                        <Button 
                            type="primary-outline"
                            onClick={() => navigate('/register')}
                        >Créer un compte</Button>
                    </Container>
                </Container>
            </Container>
        </>
    )
}