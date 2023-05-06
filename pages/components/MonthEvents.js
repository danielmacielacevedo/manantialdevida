import Link from 'next/link';

export default function MonthEvents() {
    return (
        <div className='MonthEventsContainer'>
            <h2>MÁS EVENTOS ABRIL</h2>
            <div className='ArticlesContainer'>
                <article className='ArticleContainer'>
                    <img src='/assets/eventos/entrada_triunfal.jpg' />
                    <div>
                        <h3>HOSSANA</h3>
                        <p>Domingo 02 de Abril</p>
                        <Link className='SecondaryButton' href='/@pastoradina/hossana'>VER SERVICIO</Link>
                    </div>
                </article>
                <article className='ArticleContainer'>
                    <img src='/assets/eventos/getsemani.jpg'/>
                    <div>
                        <h3>GETSEMANÍ</h3>
                        <p>Miércoles 05 de Abril</p>
                        <Link className='SecondaryButton' href='/@veliaacevedo/getsemani'>VER SERVICIO</Link>
                    </div>
                </article>
            </div>
            <div className='ArticlesContainer'>
                <article className='ArticleContainer'>
                    <img src='/assets/eventos/crucifixion.jpg' />
                    <div>
                        <h3>CRUCIFIXIÓN</h3>
                        <p>Viernes 07 de Abril</p>
                        <Link className='SecondaryButton' href='/@franciscoserrano/crucifixion'>VER SERVICIO</Link>
                    </div>
                </article>
                <article className='ArticleContainer'>
                    <img src='/assets/eventos/el-vive.jpg' />
                    <div>
                        <h3 id='predicas'>ÉL VIVE</h3>
                        <p>Domingo 09 de Abril</p>
                        <Link className='SecondaryButton' href='/@pastorisaac/el-vive'>VER SERVICIO</Link>
                    </div>
                </article>
            </div>
            <style jsx>{`
                .MonthEventsContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                    padding: 20px 20px 0 20px;
                    gap: 20px;
                    background-color: var(--primary-color)
                }
                .ArticlesContainer
                {
                    display: flex;
                    width: 100%;
                    height: auto;
                    gap: 20px;
                }
                .ArticleContainer
                {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    width: 100%;
                    height: auto;
                    gap: 10px;
                    align-items: center;
                }
                .ArticleContainer img
                {
                    width: 100%;
                    height: auto;
                    max-height: 180px;
                    object-fit: cover;
                    border-radius: 10px;
                }
                .ArticleContainer p
                {
                    font-size: 14px;
                    font-weight: 100;
                }
                .ArticleContainer div
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    align-items: center;
                    gap: 10px; 
                }
            `}</style>
        </div>
    )
}