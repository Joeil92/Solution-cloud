import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";
import { Control, Controller, FieldError } from "react-hook-form";

interface Rules {
    required?: boolean
    minLength?: number
}

interface Props {
    control: Control<any>
    name: string
    label?: string
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined
    errors: FieldError | undefined
    rules?: Rules
}

export default function File({ control, name, label, placeholder, onChange, errors, rules }: Props) {
    return (
        <Controller
            render={({ field }) => (
                <Container className="my-3">
                    {label && <label
                        htmlFor={name}
                        className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
                    >{label}</label>}
                    <input
                        {...field}
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => onChange(e)}
                        placeholder={placeholder}
                        ref={field.ref}
                        className="appearance-none block w-full text-gray-900 border rounded py-2 px-3 mb-3 leading-tight focus:outline-none"
                    />
                    {
                        errors?.type === 'required' && <Typography className="text-red-500 text-xs">Ce champ est obligatoire</Typography>
                    }
                    {
                        errors?.type === 'minLength' && <Typography className="text-red-500 text-xs">Ce champ est a une taille minimale à respecter</Typography>
                    }                    
                </Container>
            )}
            name={name}
            rules={rules}
            control={control}
        />
    )
}