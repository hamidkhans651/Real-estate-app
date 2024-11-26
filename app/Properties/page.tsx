'use client'



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
  }, {
    title: "Cozy Cottage",
    img: "/images/property-3.jpg",
    price: "$700,000",
  },
];

export default function Hero() {
  return (
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
  );
}
