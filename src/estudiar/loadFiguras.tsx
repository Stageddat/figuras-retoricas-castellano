import { renderMetonimiaExample, renderSinecdoqueExample, renderDefaultExample } from './renderEjemplos';
import { loadfigurasRetoricasJSON } from '../utils/loadFigurasRetoricas';

export function FigurasRetoricas() {
    const figurasRetoricasJSON = loadfigurasRetoricasJSON();
    const entries = Object.entries(figurasRetoricasJSON);

    return (
        <div className="min-h-screen bg-black py-8 px-1 sm:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
                {entries.map(([key, value], index) => {
                    const isMetonimia = key.startsWith('Metonimia');
                    const isSinecdoque = key.startsWith('Sinécdoque');

                    return (
                        <div
                            key={index}
                            className="bg-[#0a0a0a] rounded-lg p-2 border-2 border-[#272727] sm:p-6">
                            <h2 className="text-2xl font-semibold text-gray-100 mb-2 border-b border-gray-800 pb-2">
                                {key}
                            </h2>
                            <div
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: value.Definicion }}
                            />
                            <b>Ejemplo:</b>

                            <div className="text-gray-300 text-lg">
                                {isMetonimia ? (
                                    renderMetonimiaExample()
                                ) : isSinecdoque ? (
                                    renderSinecdoqueExample()
                                ) : (
                                    renderDefaultExample(value.Ejemplo)
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}