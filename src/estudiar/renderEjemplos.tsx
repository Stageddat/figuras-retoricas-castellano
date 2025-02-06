import { ejemploValue } from '../../types/contentType';

export function renderMetonimiaExample() {
    return (
        <div className="overflow-x-auto rounded-lg border-2 border-[#272727]">
            <table className="min-w-full bg-[#0a0a0a]">
                <thead>
                    <tr className="text-gray-100 border-b border-[#272727]">
                        <th className="px-4 py-3 text-left">Categoría</th>
                        <th className="px-4 py-3 text-left">Ejemplo</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ["La parte por todo", "Veinte abriles"],
                        ["Todo por la parte", "La universidad está revolucionando"],
                        ["Continente por contenido", "Tomar unas copas"],
                        ["Objeto por materia", "Lo hirió con el hierro"],
                        ["Singular por plural", "El niño es un ser indefenso"],
                        ["N. determinado por N. indeterminado", "¡Se lo he dicho mil veces!"],
                        ["Especie por género", "El animal embistió con furia"],
                        ["Término de significado amplio por restringido", "El personal de la fábrica está en huelga"],
                        ["Abstracto por concreto", "La ignorancia es atrevida"],
                    ].map(([categoria, ejemplo], index) => (
                        <tr key={index} className="border-b border-[#272727]">
                            <td className="px-4 py-3 text-gray-300">{categoria}</td>
                            <td className="px-4 py-3 text-gray-300">{ejemplo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function renderSinecdoqueExample() {
    return (
        <div className="overflow-x-auto rounded-lg border-2 border-[#272727]">
            <table className="min-w-full bg-[#0a0a0a]">
                <thead>
                    <tr className="text-gray-100 border-b border-[#272727]">
                        <th className="px-4 py-3 text-left">Categoría</th>
                        <th className="px-4 py-3 text-left">Ejemplo</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ["Causa por efecto", "Se suicidó por el trabajo"],
                        ["Efecto por causa", "Se suicidó por el estrés"],
                        ["Objeto por el lugar donde se produce", "Se bebió un Oporto"],
                        ["Autor por instrumento", "Es un gran pincel"],
                        ["Obra por autor", "Tiene un Picasso en casa"],
                        ["Carácter moral por la realidad física", "No tiene corazón"],
                        ["Signo/símbolo", "La media luna dominó España"],
                    ].map(([categoria, ejemplo], index) => (
                        <tr key={index} className="border-b border-[#272727]">
                            <td className="px-4 py-3 text-gray-300">{categoria}</td>
                            <td className="px-4 py-3 text-gray-300">{ejemplo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function renderDefaultExample(ejemplo: ejemploValue) {
    return (
        <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: ejemplo }} />
    );
}