import './estudiar.css'
import { LoadRfonicos } from './loadRfonicos';
import { LoadRsintacticos } from './loadRsintacticos';
import { LoadRLexicoSemantico } from './loadRlexicosemantico';

function EstudiarContent() {
    return (
        <div className='recursosContainer'>
            <LoadRfonicos/>
            <LoadRsintacticos/>
            <LoadRLexicoSemantico/>
            </div>
    );
}

export default EstudiarContent;