"use client"

import * as React from "react"
import { FormattedMessage } from "react-intl"
import { Menu } from "lucide-react"

// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
//   NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
//   NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", id: "navbar.home", defaultMessage: "Home" },
  { href: "/#offers", id: "navbar.offers", defaultMessage: "Offers" },
  { href: "/#bus", id: "navbar.busTickets", defaultMessage: "Bus Tickets" },
  { href: "/#plane", id: "navbar.planeTickets", defaultMessage: "Plane Tickets" },
  { href: "/blog", id: "navbar.guide", defaultMessage: "Guide" },
]

export function NavigationMenuComponent() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden text-primary-blue hover:text-secondary-blue bg-white border-primary-purple hover:border-primary-purple"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="text-primary-blue hover:text-secondary-blue font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <a href={item.href} >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
