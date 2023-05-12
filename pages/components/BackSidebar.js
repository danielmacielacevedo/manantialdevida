import { useContext } from 'react';
import { UserContext } from '../UserProvider';

export default function BackHeader() {
    const { user } = useContext(UserContext);

    return (
        <>
            {user && user.email && 
                <div className="BackHeaderContainer"></div>
            }
            <style jsx>{`
                .BackHeaderContainer
                {
                    display: flex;
                    flex: 1;
                    width: 100%;
                    max-width: 270px;
                    height: 80px;
                    background: var(--primary-color);
                    transition: .2s;
                }
                @media only screen and (max-width: 1024px)
                {
                    .BackHeaderContainer
                    {
                        max-width: 134px;
                    }
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