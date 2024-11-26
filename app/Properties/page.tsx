'use client'


import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const heroCards = [
  {
    title: "Luxury Villa",
    img: "/images/property-1.jpg",
    price: "$2,000,000",
  },
  {
    title: "Modern Apartment",
    img: "/images/property-2.jpg",
    price: "$1,500,000",
  },
  {
    title: "Cozy Cottage",
    img: "/images/property-3.jpg",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/images/property-3.jpg",
    price: "$700,000",
  }, {
    title: "Cozy Cottage",
    img: "/images/property-3.jpg",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/images/property-3.jpg",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/images/property-3.jpg",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/images/property-3.jpg",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/images/property-3.jpg",
    price: "$700,000",
  },
];

export default function Hero() {




  return (
    <main>
      <div className="rounded-2xl flex justify-center items-center text-white pb-20">
        <Input
          label="Search"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-white">
        {heroCards.map((card, index) => (
          <Card shadow="sm" key={index} isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={card.title}
                className="w-full object-cover h-[200px]"
                src={card.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{card.title}</b>
              <p className="text-default-500">{card.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>



    </main>

  );
}
