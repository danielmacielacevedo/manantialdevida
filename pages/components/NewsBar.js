import Link from 'next/link';

export default function NewsBar() {
    return (
        <>
            <div className='NewsContainer'>
                <h2>INFO MANANTIAL</h2>
                <div className='NewsTextContainer'>
                    <p>Ya puedes ver aquí nuestros anuncios, servicios, actividades, eventos especiales, sus horarios y como llegar.</p>
                    <p><strong>"¡Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en armonía!"</strong></p>
                </div>
                <Link id='predicas' className='PrimaryButton' href='/info'>VER INFO</Link>
            </div>
            <style jsx>{`
                .NewsContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 50vh;
                    min-height: 400px;
                    gap: 40px;
                    justify-content: center; 
                    align-items: center;
                    margin-top: 20px;
                    padding: 20px; 
                    background-color: var(--light-grey)
                }
                .NewsTextContainer
                {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    text-align: center;
                    color: var(--secondary-color);
                }
            `}</style>
        </>
    )
}