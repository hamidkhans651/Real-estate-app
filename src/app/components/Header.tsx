import Image from "next/image"


export default function header() {
    const menuList = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about-us",
        },
        {
            name: "Contact",
            link: "/contact-us",
        },
    ];
    return <nav>
        <h1 className="sticky top-0 z-50 bg-white bg-opacity-65 backdrop-blur-2xl py-3 px-4 md:py-4 md:px-16 border-b flex items-center justify-between">Real-estate-app</h1>



    </nav>
}