export default function MainContent() {
    return (
        <div className="h-screen bg-gray-900 flex flex-col justify-center items-center p-4 overflow-hidden">
            <h2 className="text-4xl font-bold text-gray-100 mb-8">
                Figuras Retóricas
            </h2>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                <a
                    href="/estudiar"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Estudiar
                </a>
                <a
                    href="/practicar"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Practicar
                </a>
            </div>
        </div>
    );
}