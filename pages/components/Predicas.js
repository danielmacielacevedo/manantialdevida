import Link from 'next/link';
import PredicadorCardPredicas from './Predicadores/PredicadorCardPredicas';
import NewsBar from './NewsBar';


export default function PredicasBar() {
    return (
        <>
            <div className='PredicasBarContainer'>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="PastorIsaac" />
                        <PredicadorCardPredicas nombre="PastoraDina" />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="AdrielRamos" />
                        <PredicadorCardPredicas nombre="AnitaMinchaca" />
                    </div>
                </div>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="EmmanuelAguilar" />
                        <PredicadorCardPredicas nombre="FlorFernandez" />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="FranciscoGarcia" />
                        <PredicadorCardPredicas nombre="FranciscoSerrano" />
                    </div>
                </div>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="JuanLeyva" />
                        <PredicadorCardPredicas nombre="JuanPabloRodriguez" />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="KarlaCervantes" />
                        <PredicadorCardPredicas nombre="LeonorRuiz" />
                    </div>
                </div>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="LuisRios" />
                        <PredicadorCardPredicas nombre="MagdielPastrana" />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="ObedGarcia" />
                        <PredicadorCardPredicas nombre="OmarMorales" />
                    </div>
                </div>
                <div className='PredicasContainer'>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="OswaldoAli" />
                        <PredicadorCardPredicas nombre="VeliaAcevedo" />
                    </div>
                    <div className='PredicadoresContainer'>
                        <PredicadorCardPredicas nombre="WillyMartinez" />
                        <PredicadorCardPredicas nombre="YolandaPerez" />
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