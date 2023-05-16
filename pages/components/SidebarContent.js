import { useContext } from "react"
import { UserContext } from "../UserProvider"
import MenuMembers from "./MenuMembersGlobal"

export default function SidebarContent() {

    const { user } = useContext(UserContext)

    return (
        <>
            {user && user.email &&
                <div className="SidebarSectionContent">
                   <MenuMembers />
                </div>
            }
        </>
    )
}