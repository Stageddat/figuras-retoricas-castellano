import { ejemploValue } from '../../types/contentType';

export function renderMetonimiaExample() {
    return (
        <div className='w-full border-0 rounded-md'>
            <table className="w-full bg-gray-800 border-collapse border border-gray-700 shadow-lg">
                <thead>
                    <tr className="bg-gray-900 text-gray-100">
                        <th className="px-4 py-2 text-left">Categoría</th>
                        <th className="px-4 py-2 text-left">Ejemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-gray-800 even:bg-gray-700">
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">La parte por todo</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Veinte abriles</td>
                    </tr>
                    <tr className="odd:bg-gray-800 even:bg-gray-700">
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Todo por la parte</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">La universidad está revolucionando</td>
                    </tr>
                    <tr className="odd:bg-gray-800 even:bg-gray-700">
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Continente por contenido</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Tomar unas copas</td>
                    </tr>
                    <tr className="odd:bg-gray-800 even:bg-gray-700">
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Objeto por materia</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Lo hirió con el hierro</td>
                    </tr>
                    <tr className="odd:bg-gray-800 even:bg-gray-700">
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Singular por plural</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">El niño es un ser indefenso</td>
                    </tr>
                    <tr className="odd:bg-gray-800 even:bg-gray-700">
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">N. determinado por N. indeterminado</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">¡Se lo he dicho mil veces!</td>
                    </tr>
                    <tr className="odd:bg-gray-800 even:bg-gray-700">
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Especie por género</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">El animal embistió con furia</td>
                    </tr>
                    <tr className="odd:bg-gray-800 even:bg-gray-700">
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Término de significado amplio por restringido</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">El personal de la fábrica está en huelga</td>
                    </tr>
                    <tr className="odd:bg-gray-800 even:bg-gray-700">
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">Abstracto por concreto</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-gray-100">La ignorancia es atrevida</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export function renderSinecdoqueExample(ejemplo: ejemploValue) {
    return (
        <div className='sinecdoqueEjemplo'>
            <div>Este es un ejemplo especial para Sinecdoque:</div>
            <div dangerouslySetInnerHTML={{ __html: ejemplo }} />
        </div>
    );
}

export function renderDefaultExample(ejemplo: ejemploValue) {
    return (
        <div className='recursoEjemplo' dangerouslySetInnerHTML={{ __html: ejemplo }} />
    );
}
