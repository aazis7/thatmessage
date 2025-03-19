import { Link } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { links } from '@/utils/navLinks'

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 mx-auto font-lato">
      <div>
        <Link
          className="text-2xl font-bold font-caveat cursor-pointer"
          to={'/'}
        >
          ThatMessage
        </Link>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center gap-x-2 md:gap-x-4">
              {links.map(({ label, path }) => (
                <Link key={label} to={path} className="[&.active]:font-bold">
                  <NavigationMenuLink>{label}</NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
