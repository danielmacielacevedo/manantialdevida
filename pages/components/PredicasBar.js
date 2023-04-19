import Link from 'next/link';
import PredicadorImage from './Predicadores/PredicadorImage';

export default function PredicasBar() {
    return (
        <>
            <div className='PredicasBarContainer'>
                <h2>PRÉDICAS</h2>
                <div className='PredicasBar'>
                    <div className='PredicadoresContainer'>
                        <PredicadorImage nombre='PastorIsaac' />
                        <PredicadorImage nombre='PastoraDina' />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorImage nombre='AnitaMinchaca' />
                        <PredicadorImage nombre='VeliaAcevedo' />
                    </div>
                </div>
                <Link className='FullButton' href='/predicas'>VER PRÉDICAS</Link>
                <div className='PredicasBar'>
                    <div className='PredicadoresContainer'>
                        <PredicadorImage nombre='KarlaCervantes' />
                        <PredicadorImage nombre='AdrielRamos' />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorImage nombre='OswaldoAli' />
                        <PredicadorImage nombre='FamAguilarFernandez' />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .PredicasBarContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    padding: 20px 20px 0 20px;
                    gap: 20px;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--primary-color);
                }
                .PredicasBar
                {
                    display: flex;
                    width: 100%;
                    height: auto;
                    gap: 20px;
                }
                .PredicadoresContainer
                {
                    display: flex;
                    width: 100%;
                    height: auto;
                    gap: 20px;
                }
                @media only screen and (max-width: 860px) 
                {
                    .PredicasBar
                    {
                        flex-direction: column;
                    }
                }
            `}</style>
        </>
    )
}