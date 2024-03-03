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
    value: string
    label?: string
    placeholder?: string
    errors: FieldError | undefined
    rules?: Rules
}

export default function Radio({ control, name, value, label, placeholder, errors, rules }: Props) {
    return (
        <Controller
            render={({ field }) => (
                <Container className="flex items-center my-3">
                    <input
                        {...field}
                        type="radio"
                        value={value}
                        placeholder={placeholder}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                    />
                    {label && <label
                        htmlFor={name}
                        className="ms-2 text-sm font-medium text-gray-900"
                    >{label}</label>}
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