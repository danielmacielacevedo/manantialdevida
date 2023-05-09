import Link from 'next/link';
import Image from 'next/image'
import CoverPredica from './CoverPredica';

export default function Cover() {
    return (
        <>
            <div className='CoverContainer'>
                <CoverPredica nombre="PastorIsaac" indice="5" />
            </div>
            <style jsx>{`

                .CoverContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 650px;
                    {/* padding: 20px; */}
                    background-color: var(--primary-color);
                    // background-color: red;
                    justify-content: center;
                    align-items: center;
                    gap: 80px;
                }
                .CoverImage
                {
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                    margin-bottom: 80px;
                }

                @media only screen and (max-width: 860px) {
                    .CoverContainer
                    {
                        height: 450px;
                    }
                    .CoverImage
                    {
                        width: 300px;
                    }
                }

            `}</style>
        </>
    )
}