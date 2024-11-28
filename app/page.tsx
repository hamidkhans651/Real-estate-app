
import { title, subtitle } from "@/components/primitives";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { SearchIcon,  } from "@/components/icons";

import Midsections from "../components/Midsections"
import { Kbd } from "@nextui-org/kbd";

import { Input } from "@nextui-org/input";




export default function Home() {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}></Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />);
  return (
    <main className="" >
      <section className=" flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-cover bg-center " style={{ backgroundImage: 'url(/assets/images/prop3.webp)' }} >
        <div className="inline-block max-w-xl text-center justify-center pt-16 ">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">

        </div>

        <div className="mt-8">
          {/* Search Input (Desktop) */}
          {searchInput}

        </div>
      </section>
      <Midsections />
    </main>
  );
}
