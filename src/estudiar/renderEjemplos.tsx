import { ejemploValue } from '../../types/contentType';

export function renderMetonimiaExample() {
    return (
        <div className='tableContainer'>
            <table className="ejemploTable">
                <thead>
                    <tr className="bg-gray-900 text-gray-100">
                        <th className="px-4 py-2 text-left">Categoría</th>
                        <th className="px-4 py-2 text-left">Ejemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">La parte por todo</td>
                        <td className="fileraTable">Veinte abriles</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Todo por la parte</td>
                        <td className="fileraTable">La universidad está revolucionando</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Continente por contenido</td>
                        <td className="fileraTable">Tomar unas copas</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Objeto por materia</td>
                        <td className="fileraTable">Lo hirió con el hierro</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Singular por plural</td>
                        <td className="fileraTable">El niño es un ser indefenso</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">N. determinado por N. indeterminado</td>
                        <td className="fileraTable">¡Se lo he dicho mil veces!</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Especie por género</td>
                        <td className="fileraTable">El animal embistió con furia</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Término de significado amplio por restringido</td>
                        <td className="fileraTable">El personal de la fábrica está en huelga</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Abstracto por concreto</td>
                        <td className="fileraTable">La ignorancia es atrevida</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export function renderSinecdoqueExample() {
    return (
        <div className='tableContainer'>
            <table className="ejemploTable">
                <thead>
                    <tr className="bg-gray-900 text-gray-100">
                        <th className="px-4 py-2 text-left">Categoría</th>
                        <th className="px-4 py-2 text-left">Ejemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Causa por efecto</td>
                        <td className="fileraTable">Se suicidó por el trabajo</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Efecto por causa</td>
                        <td className="fileraTable">Se suicidó por el estrés</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Objeto por el lugar donde se produce</td>
                        <td className="fileraTable">Se bebió un Oporto</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Autor por instrumento</td>
                        <td className="fileraTable">Es un gran pincel</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Obra por autor</td>
                        <td className="fileraTable">Tiene un Picasso en casa</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Carácter moral por la realidad física</td>
                        <td className="fileraTable">No tiene corazón</td>
                    </tr>
                    <tr className="fileraColorTable">
                        <td className="fileraTable">Signo/símbolo</td>
                        <td className="fileraTable">La media luna dominó España</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export function renderDefaultExample(ejemplo: ejemploValue) {
    return (
        <div className='recursoEjemplo' dangerouslySetInnerHTML={{ __html: ejemplo }} />
    );
}
