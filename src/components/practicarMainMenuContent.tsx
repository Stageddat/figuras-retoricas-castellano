import { Link } from "react-router-dom";

function PracticarMainMenuContent() {
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center p-4">
            <p className="text-xl sm:text-2xl font-semibold text-gray-100 mb-6 sm:mb-8 text-center">
                Elige modo de prueba:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                <Link
                    to="mixto"
                    className="bg-[#0a0a0a] border-2 border-[#272727] text-gray-100 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center transition duration-200 ease-in-out transform hover:scale-105 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                    Mixto
                </Link>
                <Link
                    to="nombre"
                    className="bg-[#0a0a0a] border-2 border-[#272727] text-gray-100 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center transition duration-200 ease-in-out transform hover:scale-105 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                    Nombre
                </Link>
                <Link
                    to="significado"
                    className="bg-[#0a0a0a] border-2 border-[#272727] text-gray-100 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center transition duration-200 ease-in-out transform hover:scale-105 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                    Significado
                </Link>
                <Link
                    to="ejemplo"
                    className="bg-[#0a0a0a] border-2 border-[#272727] text-gray-100 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center transition duration-200 ease-in-out transform hover:scale-105 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                    Ejemplo
                </Link>
            </div>
        </div>
    );
}

export default PracticarMainMenuContent;