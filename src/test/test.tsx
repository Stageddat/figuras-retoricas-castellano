import '../estudiar/estudiar.css'
import { useState } from 'react';
import { ContentType } from '../../types/contentType';

export function TestContent() {
    // Define what type of content to show
    const [currentContent, setCurrentContent] = useState('default');

    // Handle the content when clicking the button
    const handleButtonClick = (content: ContentType) => {
        setCurrentContent(content);
    };

    // Render the content according to button response
    const renderContent = () => {
        switch (currentContent) {
            case 'testConNombre':
                return "testConNombre";
            case 'testConSignificado':
                return "testConSignificado";
            default:
                return (
                    <div id="appContent">
                        <p className='gameModeText'>Elige modo de prueba:</p>

                        <div className='gameModeButtonContainer'>
                            <button
                                className='gameModeButton'
                                onClick={() => handleButtonClick("testConNombre")}>Test con nombre</button>

                            <button className='gameModeButton'
                                onClick={() => handleButtonClick("testConSignificado")}>Test con significado</button>
                        </div>

                    </div>
                );
        }
    };

    return (
        <>
            {renderContent()}
        </>
    )
}

export default TestContent;