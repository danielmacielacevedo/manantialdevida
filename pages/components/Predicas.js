import Link from 'next/link';
import PredicadorCard from './Predicadores/PredicadorCard';
import NewsBar from './NewsBar';


export default function PredicasBar() {
    return (
        <>
            <div className='PredicasBarContainer'>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCard nombre="PastorIsaac" />
                        <PredicadorCard nombre="PastoraDina" />
                    </div>
                </div>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCard nombre="AdrielRamos" />
                        <PredicadorCard nombre="AnitaMinchaca" />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorCard nombre="EmmanuelAguilar" />
                        <PredicadorCard nombre="FlorFernandez" />
                    </div>
                </div>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCard nombre="FranciscoGarcia" />
                        <PredicadorCard nombre="FranciscoSerrano" />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorCard nombre="JuanPabloRodriguez" />
                        <PredicadorCard nombre="KarlaCervantes" />
                    </div>
                </div>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCard nombre="LuisRios" />
                        <PredicadorCard nombre="MagdielPastrana" />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorCard nombre="ObedGarcia" />
                        <PredicadorCard nombre="OmarMorales" />
                    </div>
                </div>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCard nombre="OswaldoAli" />
                        <PredicadorCard nombre="VeliaAcevedo" />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorCard nombre="WillyMartinez" />
                        <PredicadorCard nombre="YolandaPerez" />
                    </div>
                </div>
            </div>
            <NewsBar />
            <style jsx>{`
                .PredicasBarContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    padding: 0 20px;
                    gap: 20px;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--primary-color)
                }
                .PredicasContainer
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
                    .PredicasContainer
                    {
                        flex-direction: column;
                    }
                }
            `}</style>
        </>
    )
}