export default function Button({children, onClick}) {
    return (
        <>
            <button onClick={onClick}>{children}</button>
            <style jsx>{`
                button {
                    display: flex;
                    width: 100%;
                    height: auto;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 10px;
                    font-size: 16px;
                    font-weight: 700;
                    cursor: pointer;
                    gap: 20px;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--secondary-color);
                    color: var(--primary-color);
                    transition: .4s
                }
                button:hover
                {
                    background-color: var(--light-grey);
                    color: var(--secondary-color);
                }
            `}</style>
        </>
    )
}