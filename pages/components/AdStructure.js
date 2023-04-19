import Link from 'next/link';

export default function AdStructure(props) {

  return (
    <>
        <div className="LinkContainer">
          <Link href='/'>
            <div className="PredicadorContainer">
              <div className="ImageContainer">
                <img src={props.src} alt={props.alt} /> 
                {/* /assets/ads/aniversario.jpg */}
              </div>
              <div className="PredicadorData">
                <h3>{props.content}</h3> 
                {/* 19, 21, 22 & 23 de Abril */}
              </div>
            </div>
          </Link>
        </div>
        <style jsx>{`
            .LinkContainer
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: auto;
            }
            .PredicadorContainer
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: auto;
            }
            .ImageContainer
            {
                display: flex;
                width: 100%;
                height: 150px;
                justify-content: center;
                align-items: center;
            }
            .ImageContainer img
            {
                display: flex;
                width: 100%;
                height: 100%;
                object-fit: cover;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                justify-self: center;
                align-self: center;
                border-radius: 20px 20px 0 0;
            }
            .PredicadorData
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 60px;
                justify-content: center;
                align-items: center;
                text-align: center;
                border-radius: 0 0 20px 20px;
                font-size: 12px;
                background-color: var(--light-grey);
                color: var(--primary-color);
            }
            .PredicadorData span
            {
              font-size: 10px;
            }

            @media only screen and (max-width: 860px)
            {
              .LinkContainer
              {
                max-width: none;
              }
            }
        `}</style>
    </>
  );
}





