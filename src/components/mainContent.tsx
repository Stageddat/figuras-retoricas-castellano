export default function MainContent() {
    return (
        <div className="h-screen bg-black flex flex-col justify-center items-center p-4 overflow-hidden">
            <h2 className="text-4xl font-bold text-gray-100 mb-2">
                Figuras Retóricas
            </h2>

            <p className="text-gray-400 mt-2 text-justify mb-4 max-w-lg">
                Basado en las figuras retóricas de la EBAU 2025 (según el modelo de la Generalitat de Cataluña).
                <a
                    href="https://universitats.gencat.cat/web/.content/01_acces_i_admissio/proves-acces-PAU-PAP/ambits/llengua-castellana-i-literatura/02_PAU25_Castella_LlistaPAU.pdf"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                > Ver lista oficial</a>
            </p>



            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                <a
                    href="/estudiar"
                    className="bg-[#0a0a0a] border-2 border-[#272727] text-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                    Estudiar
                </a>
                <a
                    href="/practicar"
                    className="bg-[#0a0a0a] border-2 border-[#272727] text-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                    Practicar
                </a>
            </div>
        </div>
    );
}