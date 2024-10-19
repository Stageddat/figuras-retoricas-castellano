import rlexicosemantico from '../../db/rlexicosemantico.json'

export function RLexicoSemantico() {
    const entries = Object.entries(rlexicosemantico);

    return (
        <div className='parentContainer'>
            <h3 className='recursoCategoryHeader'>Recursos léxico-semánticos</h3>
            {entries.map(([key, value], index) => (
                <div key={index} className='recursoItem'>
                    <div className='recursoHeader'>{key}</div>
                    <div className='recursoDefinicion'>{value.Definicion}</div>
                    <div className='recursoEjemplo'>{value.Ejemplo}</div>
                </div>
            ))}
        </div>
    );
}