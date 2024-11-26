'use client'


import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const heroCards = [
  {
    title: "Luxury hamis Villa",
    img: "/assets/images/prop3.webp",
    price: "$2,000,000",
  },
  {
    title: "Modern Apartment",
    img: "/assets/images/prop3.webp",
    price: "$1,500,000",
  },
  {
    title: "Cozy Cottage",
    img: "/assets/images/prop3.webp",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/assets/images/prop3.webp",
    price: "$700,000",
  }, {
    title: "Cozy Cottage",
    img: "/assets/images/prop2.webp",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/assets/images/prop3.webp",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/assets/images/prop4.webp",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/assets/images/prop5.webp",
    price: "$700,000",
  },
  {
    title: "Cozy Cottage",
    img: "/assets/images/prop6.webp",
    price: "$700,000",
  },
];

export default function Hero() {




  return (
    <main>
      <div className="rounded-2xl flex justify-center items-center text-white pb-4">
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
      <div className="gap-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
