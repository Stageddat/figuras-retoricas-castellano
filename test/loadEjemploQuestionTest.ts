import { loadEjemplosJSON } from "../src/utils/loadEjemplosData";
import { loadfigurasRetoricasJSON } from "../src/utils/loadFigurasRetoricas";

// QUE PUTA MIERDA ES ESTA?!?!?!?!

function EjemploQuestion() {
    // Cargar los ejemplos de caca :D
    const ejemplosData = loadEjemplosJSON();

    // Cargar posibles respuestas de todos las figuras pa tocarte la polla
    const possibleAnswers = Object.keys(loadfigurasRetoricasJSON());

    // Elegir ejemplo como pregunta
    const avaibleQuestions = Object.entries(ejemplosData);
    const currentEjemplo = avaibleQuestions[Math.floor(Math.random() * avaibleQuestions.length)];

    // Elegir pregunta (ejemplo)
    const currentQuestion = currentEjemplo[0];
    console.log(currentQuestion);

    // Elegir respuesta correcta
    const possibleCorrectAnswer = Object.keys(currentEjemplo[1]);
    const correctAnswer = possibleCorrectAnswer[Math.floor(Math.random() * possibleCorrectAnswer.length)];

    // Filtrar la respuesta correcta de las posibles respuestas
    const incorrectAnswers = possibleAnswers.filter(answer => answer !== correctAnswer);

    // Seleccionar 3 respuestas incorrectas aleatorias
    const selectedIncorrectAnswers: string[] = [];
    while (selectedIncorrectAnswers.length < 3) {
        const randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
        const selectedAnswer = incorrectAnswers[randomIndex];
        if (!selectedIncorrectAnswers.includes(selectedAnswer)) {
            selectedIncorrectAnswers.push(selectedAnswer);
        }
    }

    // Combinar respuesta correcta con las incorrectas
    const combinedAnswers = [...selectedIncorrectAnswers, correctAnswer];

    // Mezclar las respuestas para que no siempre esté en la misma posición
    const shuffledAnswers = combinedAnswers.sort(() => Math.random() - 0.5);

    console.log(shuffledAnswers);
    return ("e");
}

export default EjemploQuestion;