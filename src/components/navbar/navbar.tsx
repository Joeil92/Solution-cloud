import { AuthContext } from "@SC/contexts/authContext";
import { useContext } from "react";

export default function Navbar() {
    const { currentUser, signOut } = useContext(AuthContext);

    return (
        <>
            <nav className="bg-primary-300 border-gray-200 mb-6 z-10 relative">
                <div className="flex flex-wrap items-center justify-between mx-auto p-2">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                    <a href="/">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Silk road</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="/shop" className="block py-2 px-3 text-gray-900 rounded md:hover:text-primary-900 md:p-0">Boutique</a>
                            </li>
                            {currentUser
                                ? <li onClick={() => signOut()}>
                                    <a href="#" className="block text-red-500 py-2 px-3 rounded md:p-0">Se déconnecter</a>
                                </li>
                                : <li>
                                    <a href="/login" className="block text-primary-900 py-2 px-3 rounded md:p-0">Se connecter</a>
                                </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}