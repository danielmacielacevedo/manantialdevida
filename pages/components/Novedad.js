export default function Novedad(props) {
    return (
        <>
            <div className="NovedadContainer">
                <div className="NovedadHeader">
                    <img src="/assets/icons/shines.png" />
                    <h5>Novedad</h5>
                </div>
                <div className="NovedadContent">{props.content}</div>
            </div>
            <style jsx>{`
                .NovedadContainer
                {
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    border-radius: 10px;
                    background-color: var(--manantial-color);
                    gap: 10px
                }
                .NovedadHeader
                {
                    display: flex;
                    align-items: center;
                    gap: 10px
                }
                .NovedadHeader img
                {
                    width: 20px;
                    height: 20px;
                }
            `}</style>
        </>
    )
}