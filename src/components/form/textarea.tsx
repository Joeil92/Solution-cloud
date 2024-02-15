import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";
import { Control, Controller, FieldError } from "react-hook-form";
interface Props {
    name: string
    defaultValue?: string
    cols?: number
    rows?: number
    label?: string
    placeholder?: string
    required?: boolean
    control: Control<any>
    errors: FieldError | undefined
}

export default function Textarea({ name, defaultValue, cols, rows, label, placeholder, required, control, errors }: Props) {
    return (
        <Controller
            render={({ field }) => (
                <Container className="my-3">
                    {
                        label
                            ? <label
                                htmlFor={name}
                                className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
                            >{label}</label>
                            : null
                    }
                    <textarea
                        {...field}
                        cols={cols || 30}
                        rows={rows || 5}
                        id={name}
                        className={`appearance-none block w-full text-gray-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none`}
                        placeholder={placeholder}
                    />
                    {
                        errors?.type === "required" && <Typography className="text-red-500 text-xs">Ce champ est obligatoire</Typography>
                    }
                </Container>
            )}
            name={name}
            defaultValue={defaultValue}
            control={control}
            rules={{ required: required }}
        />
    )
}