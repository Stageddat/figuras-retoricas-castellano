import figurasRetoricasJSON from '../../db/figurasRetoricas.json'

export function FigurasRetoricas() {
    const entries = Object.entries(figurasRetoricasJSON);

    return (
        <div className='parentContainer'>
            {entries.map(([key, value], index) => (
                <div key={index} className='recursoItem'>
                    <div className='recursoHeader'>{key}</div>
                    <div
                        className='recursoDefinicion'
                        dangerouslySetInnerHTML={{ __html: value.Definicion }}
                    />
                    <div
                        className='recursoEjemplo'
                        dangerouslySetInnerHTML={{ __html: value.Ejemplo }} />
                </div>
            ))}
        </div>
    );
}

