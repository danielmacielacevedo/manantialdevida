export default function SmallNovedad() {
    return (
        <>
            <div className="NovedadContainer">
                <div className="NovedadHeader">
                    <img src="/assets/icons/shines.png" />
                    {/* <h6>Novedad</h6> */}
                </div>
            </div>
            <style jsx>{`
                .NovedadContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                    padding: 8px 8px;
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
                .NovedadHeader h6
                {
                    font-size: 12px;
                    color: var(--secondary-color)
                }
            `}</style>
        </>
    )
}