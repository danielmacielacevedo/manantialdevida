export default function BackHeader() {
    return (
        <>
            <div className="BackHeaderContainer"></div>
            <style jsx>{`
                .BackHeaderContainer
                {
                    display: flex;
                    flex: 1;
                    width: 100%;
                    max-width: 270px;
                    height: 80px;
                    background: var(--primary-color);
                }
                @media only screen and (max-width: 860px)
                {
                    .BackHeaderContainer
                    {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}