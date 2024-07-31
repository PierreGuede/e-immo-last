
import { NAVLIST } from "@/config/navBar"
import Link from "next/link"

type NavBarList = typeof NAVLIST[number]

interface NavListProps{
    list : NavBarList,
    handleClick ? : ()=> void
}

export const NavBarItem = ({list , handleClick }: NavListProps)=>{
    return(
        <Link href={list?.href} onClick={handleClick} className={"flex items-center justify-center h-7 " + (({ isActive } : any)=> isActive ? " active" : " hover:text-[#26484a] transition ")}> { list.icon ? <list.icon className="w-4 h-4 flex items-center justify-center "/> : list.name } </Link>
    )
}
