
import { NAVLIST } from "@/config/navBar"
import { NavBarItem } from "./NavBarItem"

export const NavBarItems = ()=>{
    return(
        <nav className="p-4 flex items-end justify-end space-x-4 text-right w-full text-lg">
            {
            NAVLIST.map((link)=>{
                return ( <NavBarItem list={link}/>)
            })
            }
        </nav>
    )
}

