export default function SmallNovedad() {
    return (
        <>
            <div className="NovedadContainer">
                <div className="NovedadHeader">
                    <img src="/assets/icons/shines.png" />
                    <h5>Novedad</h5>
                </div>
            </div>
            <style jsx>{`
                .NovedadContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                    padding: 2px 10px;
                    border-radius: 2px;
                    background-color: var(--manantial-color);
                }
                .NovedadHeader
                {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 14px;
                }
                .NovedadHeader img
                {
                    width: 10px;
                    height: 10px;
                }
            `}</style>
        </>
    )
}