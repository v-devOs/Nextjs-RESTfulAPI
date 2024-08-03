'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  title: string,
  path: string,
  icon: React.ReactNode
}


export const SidebarItem = ({ title, path, icon }: Props) => {

  const pathName = usePathname()

  return (
    <>
      <li>
        <Link
          href={path}
          className={`
            relative px-4 py-3 flex items-center space-x-4 rounded-xl 
            ${pathName === path ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''} 
            hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
          `}>
            {icon}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      </li>
    </>
  )
}
