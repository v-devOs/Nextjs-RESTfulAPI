import Link from "next/link"
import { CiBookmarkCheck } from "react-icons/ci"

const menuItems = [
  {
    title: 'Dashboard',
    icon: <CiBookmarkCheck size={30} />,
    href: ''
  },
  {
    title: 'Categories',
    icon: <CiBookmarkCheck size={30} />,
    href: ''
  },
]

export const SidebarItem = () => {
  return (
    <>
      {
        menuItems.map(({ title, icon, href }) => (
          <li key={title}>
            <Link href={href} className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
              { icon }
              <span className="-mr-1 font-medium">{ title }</span>
            </Link>
          </li>
        ))
      }
    </>
  )
}
