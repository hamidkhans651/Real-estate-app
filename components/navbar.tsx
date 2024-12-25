'use client'

import Image from "next/image";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { useUser, SignOutButton, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'



export const Navbar = () => {
  const { user, isSignedIn } = useUser(); // This will give you the current user and their authentication state



  return (
    <main>


      <NextUINavbar maxWidth="xl" position="sticky">
        {/* Left-side Branding */}
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">


              <p className="font-bold text-inherit">Hamid-Homes</p>
            </NextLink>
          </NavbarBrand>

          {/* Navbar Links (Desktop) */}
          <ul className="hidden lg:flex gap-9 justify-center ml-80">

            {siteConfig.navItems.map((item) => (


              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}


                </NextLink>

              </NavbarItem>

            ))}
          </ul>
          <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
            {/* Theme Switcher */}
            <NavbarItem className="hidden sm:flex gap-2">
              <ThemeSwitch />
            </NavbarItem>

            {/* Render Authentication buttons based on user sign-in status */}

          </NavbarContent>
          <div className="items-center hidden  md:block ">
            {isSignedIn ? (
              <>

                <UserButton />
              </>
            ) : (
              <div className="flex items-center gap-x-5">
                <Link href="/sign-in">
                  <button className="w-[100px] ">
                    Sign in
                  </button>
                </Link>

              </div>
            )}
          </div>
        </NavbarContent>
        {/* Mobile View */}
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          {/* Mobile Theme Switch */}
          <ThemeSwitch className="hidden lg " />
          {/* Mobile Menu Toggle */}
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu>
          {/* Mobile Search Input */}

          {/* Mobile Navbar Links */}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {isSignedIn ? (
              <nav>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/home">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard">
                      <a>Dashboard</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/properties">
                      <a>Properties</a>
                    </Link>
                  </li>
                  <li>
                    <button>
                      <SignOutButton />
                    </button>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/home">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/properties">
                      <a>Properties</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/agents">
                      <a>Agents</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sign-in">
                      <a>Sign-in</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          {/* {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem> */}
          {/* ))} */}
        </div>
      </NavbarMenu>
    </NextUINavbar>
    </main >

  );
};
