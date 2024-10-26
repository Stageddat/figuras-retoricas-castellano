import { renderMetonimiaExample, renderSinecdoqueExample, renderDefaultExample } from './renderEjemplos';
import { loadfigurasRetoricasJSON } from '../utils/loadFigurasRetoricas';

export function FigurasRetoricas() {
    const figurasRetoricasJSON = loadfigurasRetoricasJSON();
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
