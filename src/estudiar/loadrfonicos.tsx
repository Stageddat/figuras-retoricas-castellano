import rfonicos from '../../db/rfonicos.json'

export function Rfonicos() {
    const entries = Object.entries(rfonicos);

    return (
        <div className='parentContainer'>
            <h3 className='recursoCategoryHeader'>Recursos fónicos</h3>
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

