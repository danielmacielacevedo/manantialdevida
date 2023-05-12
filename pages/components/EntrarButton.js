import Link from "next/link"

export default function EntrarButton({children, props}) {
    return (
        <>
            <Link href="/entrar">
                <div className="Button">{children}</div>
            </Link>
            <style jsx>{`
                .Button {
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
                .Button:hover
                {
                    background-color: var(--light-grey);
                    color: var(--secondary-color);
                }
            `}</style>
        </>
    )
}