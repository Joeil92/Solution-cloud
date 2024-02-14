import RegisterForm from "@SC/form/registerForm/registerForm";
import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";

export default function Register() {
    return (
        <>
            <Container className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Container className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <Container className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <Typography tag="h1" className="font-bold">Créer mon compte</Typography>
                        <RegisterForm />
                    </Container>
                </Container>
            </Container>
        </>
    )
}