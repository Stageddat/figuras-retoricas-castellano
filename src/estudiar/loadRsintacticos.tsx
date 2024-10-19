import rsintacticos from '../../db/rsintacticos.json'

export function Rsintacticos() {
    const entries = Object.entries(rsintacticos);

    return (
        <div className='parentContainer'>
            <h3 className='recursoCategoryHeader'>Recursos Sintácticos</h3>
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

