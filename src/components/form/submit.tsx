import Loader from "@SC/components/loader/loader"

interface Props {
    value: string
    disabled?: boolean
    loading?: boolean
}

export default function Submit({ value, disabled = false, loading = false }: Props) {
    return (
        <button
            type="submit"
            disabled={disabled}
            className="text-white uppercase text-xs font-medium bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full py-3 px-4 my-3 text-center"
        >{loading ? <Loader /> : value }</button>
    )
}