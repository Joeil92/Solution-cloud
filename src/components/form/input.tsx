import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";
import { Control, Controller, FieldError } from "react-hook-form";

type Type = 'text' | 'password' | 'number' | 'date'

interface Rules {
    required: boolean
}

interface Props {
    control: Control<any>
    name: string
    label?: string
    type?: Type
    placeholder?: string
    errors: FieldError | undefined
    rules?: Rules
}

export default function Input({ control, name, label, type = 'text', placeholder, errors, rules }: Props) {
    return (
        <Controller
            render={({ field }) => (
                <Container className="my-3">
                    {label && <label
                        htmlFor={name}
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >{label}</label>}
                    <input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        className="appearance-none block w-full text-gray-700 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none"
                    />
                    {
                        errors?.type === 'required' && <Typography className="text-red-500 text-xs">Ce champ est obligatoire</Typography>
                    }
                </Container>
            )}
            name={name}
            rules={rules}
            control={control}
        />
    )
}