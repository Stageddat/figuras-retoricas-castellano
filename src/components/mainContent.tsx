import { Link } from "react-router-dom";

function MainContent() {
    return (
        <>
            <p className="gameModeText">Elige modo de juego:</p>
            <div className="gameModeButtonContainer">
                <Link className="gameModeButton" to="/estudiar">Estudiar</Link>
                <Link className="gameModeButton" to="/practicar">Practicar</Link>
            </div>
        </>);
}

export default MainContent;
