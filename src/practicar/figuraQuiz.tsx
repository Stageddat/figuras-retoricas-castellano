import { useState, useEffect } from "react";
import { loadfigurasRetoricasJSON } from '../utils/loadFigurasRetoricas';

type Pregunta = [string, string]; // [definicion, nombre]
type RespuestaUsuario = {
    pregunta: string;
    respuestaCorrecta: string;
    respuestaUsuario: string;
};

function FiguraQuiz() {
    const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
    const [puntuacion, setPuntuacion] = useState(0);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [opciones, setOpciones] = useState<string[]>([]);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [respuestas, setRespuestas] = useState<RespuestaUsuario[]>([]);

    // Cargar preguntas y opciones
    useEffect(() => {
        const figuras = loadfigurasRetoricasJSON();
        const preguntasMezcladas = Object.entries(figuras)
            .map(([nombre, datos]) => [datos.Definicion, nombre] as Pregunta)
            .sort(() => Math.random() - 0.5);

        setPreguntas(preguntasMezcladas);
        if (preguntasMezcladas.length > 0) {
            generarOpciones(preguntasMezcladas[0][1]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Generar opciones aleatorias
    const generarOpciones = (respuestaCorrecta: string) => {
        const figuras = loadfigurasRetoricasJSON();
        const todasOpciones = Object.keys(figuras);

        const opcionesAleatorias = todasOpciones
            .filter(opcion => opcion !== respuestaCorrecta)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        setOpciones(mezclarArray([respuestaCorrecta, ...opcionesAleatorias]));
    };

    const mezclarArray = <T,>(array: T[]): T[] => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    const manejarRespuesta = (nombreSeleccionado: string) => {
        const [definicion, respuestaCorrecta] = preguntas[preguntaActual];

        setRespuestas(prev => [
            ...prev,
            {
                pregunta: definicion,
                respuestaCorrecta,
                respuestaUsuario: nombreSeleccionado
            }
        ]);

        if (nombreSeleccionado === respuestaCorrecta) {
            setPuntuacion(puntuacion + 1);
        }

        if (preguntaActual < preguntas.length - 1) {
            setPreguntaActual(preguntaActual + 1);
            generarOpciones(preguntas[preguntaActual + 1][1]);
        } else {
            setMostrarResultado(true);
        }
    };

    const terminarQuiz = () => {
        setMostrarResultado(true);
    };

    if (mostrarResultado) {
        return (
            <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center">Resultado Final</h2>

                    <div className="bg-[#0a0a0a] border-2 border-[#272727] p-6 rounded-lg mb-8 text-center">
                        <p className="text-2xl text-gray-200">
                            Acertaste <span className="font-bold text-green-400">{puntuacion}</span> de{' '}
                            <span className="font-bold">{respuestas.length}</span> preguntas
                        </p>
                    </div>

                    <div className="space-y-6">
                        {respuestas.map((respuesta, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg border-2 ${respuesta.respuestaUsuario === respuesta.respuestaCorrecta
                                    ? 'border-green-900/30'
                                    : 'border-red-900/30'
                                    } bg-[#0a0a0a]`}
                            >
                                <div className="text-xl text-gray-200 mb-4">
                                    <span className="font-bold">{respuesta.pregunta}</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-400">Tu respuesta:</p>
                                        <p
                                            className={`text-lg font-semibold ${respuesta.respuestaUsuario === respuesta.respuestaCorrecta
                                                ? 'text-green-400'
                                                : 'text-red-400'
                                                }`}
                                        >
                                            {respuesta.respuestaUsuario}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">Respuesta correcta:</p>
                                        <p className="text-lg font-semibold text-gray-200">
                                            {respuesta.respuestaCorrecta}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-[#0a0a0a] border-2 border-[#272727] text-gray-100 font-bold py-2 px-4 rounded-lg transition duration-200 hover:border-gray-600 hover:scale-105"
                        >
                            Reiniciar Quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (preguntas.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-black">
                <p className="text-2xl text-gray-400">Cargando preguntas...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center">
                    <span className="text-lg text-gray-400">
                        Pregunta {preguntaActual + 1} de {preguntas.length}
                    </span>
                    <div className="w-full bg-[#0a0a0a] border-2 border-[#272727] rounded-full h-2.5 mt-2">
                        <div
                            className="bg-gray-600 h-2.5 rounded-full"
                            style={{ width: `${((preguntaActual + 1) / preguntas.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border-2 border-[#272727] p-6 rounded-lg mb-8">
                    <div className="text-2xl text-gray-200 leading-relaxed">
                        "{preguntas[preguntaActual][0]}"
                    </div>
                    <p className="mt-4 text-gray-400">¿Qué figura retórica es esta?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {opciones.map((nombre) => (
                        <button
                            key={nombre}
                            onClick={() => manejarRespuesta(nombre)}
                            className="bg-[#0a0a0a] border-2 border-[#272727] text-gray-100 text-xl font-semibold py-4 px-6 rounded-lg transition duration-200 hover:border-gray-600 hover:scale-105"
                        >
                            {nombre}
                        </button>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={terminarQuiz}
                        className="bg-[#0a0a0a] border-2 border-[#272727] text-gray-100 font-bold py-2 px-4 rounded-lg transition duration-200 hover:border-gray-600 hover:scale-105"
                    >
                        Terminar Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FiguraQuiz;