import figurasRetoricasJSON from '../../db/figurasRetoricas.json'
import { renderMetonimiaExample, renderSinecdoqueExample, renderDefaultExample } from './renderEjemplos';

export function FigurasRetoricas() {
    const entries = Object.entries(figurasRetoricasJSON);

    return (
        <div className='parentContainer'>
            {entries.map(([key, value], index) => {
                const isMetonimia = key.startsWith('Metonimia');
                const isSinecdoque = key.startsWith('Sinécdoque');

                return (
                    <div key={index} className='recursoItem'>
                        <div className='recursoHeader'>{key}</div>
                        <div
                            className='recursoDefinicion'
                            dangerouslySetInnerHTML={{ __html: value.Definicion }}
                        />
                        {isMetonimia ? (
                            renderMetonimiaExample()
                        ) : isSinecdoque ? (
                            renderSinecdoqueExample()
                        ) : (
                            renderDefaultExample(value.Ejemplo)
                        )}
                    </div>
                );
            })}
        </div>
    );
}
