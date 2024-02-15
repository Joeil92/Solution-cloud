import { Control, Controller, FieldError, Merge } from "react-hook-form";
import Select from 'react-select'
import Container from "@SC/ui/container/container";
import Typography from "@SC/ui/typography/typography";
import { useEffect, useState } from "react";
import { getDatabase } from "@SC/services/firebase/firebase";

interface Props {
    name: string
    label: string
    placeholder?: string
    endpoint: string
    optionValue: string
    defaultValue?: string | number | null
    isMulti?: boolean
    required?: boolean
    disabled?: boolean
    control: Control<any>
    errors: Merge<FieldError, (FieldError | undefined)[]> | undefined
}

export default function Entity({ name, label, placeholder, endpoint, optionValue, defaultValue = "", isMulti = false, required = false, disabled = false, control, errors }: Props) {
    const [options, setOptions] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatabase(endpoint);
            setOptions(data);
        }

        fetchData();
    }, []);

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
                    <Select
                        {...field}
                        placeholder={placeholder}
                        onChange={(e) => field.onChange(`collection/${e.id}`)}
                        getOptionLabel={(option) => option[optionValue]}
                        getOptionValue={(option) => option.id}
                        value={options.find(e => e.id === Number(defaultValue))}
                        className="text-gray-900"
                        options={options}
                        isClearable={true}
                        isDisabled={disabled}
                        isMulti={isMulti}
                        closeMenuOnSelect={!isMulti}
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