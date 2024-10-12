import './estudiar.css'
import { LoadRfonicos } from './loadRfonicos';
import { LoadRsintacticos } from './loadRsintacticos';

function EstudiarContent() {
    return (
        <div className='recursosContainer'>
            <LoadRfonicos/>
            <LoadRsintacticos/>
            </div>
    );
}

export default EstudiarContent;