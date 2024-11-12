import React from 'react'
import Link from 'next/link'

const nav = () => {

        //     document.getElementById("hamburger").onclick = function toggleMenu() {
    //     const navToggle = document.getElementsByClassName("toggle");
    //     for (let i = 0; i < navToggle.length; i++) {
    //       navToggle.item(i).classList.toggle("hidden");
    //     }
    //   };

  return (
    <div>
        {/* <!-- nav bar section --> */}
        <nav className="flex flex-wrap items-center justify-between p-3 text-gray-900 bg-[#ffff]">
                <div className="text-xl">Real estate </div>
                <div className="flex md:hidden">
                    <button id="hamburger">
                        <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                        <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                    </button>
                </div>
                <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
                  <Link href="/" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Home
                  
                  </Link> 

                    <Link href="/properties" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Properties
                   </Link>
                    <a href="#aboutus" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">About us
                    </a>
                    <Link href="/user-dashbaord" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Profile
                    </Link>
                    <a href="#contactUs" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Visit Us
                    </a>
                </div>

                <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
                    <a href="tel:+123">
                        <div className="flex justify-end ">
                            <div className="flex items-center h-10 w-30  hover:text-blue-500 text-gray-900  font-medium p-2">
                                {/* <!-- Heroicon name: phone --> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" stroke-linejoin="round"
                                        d="" />
                                </svg> */}
                                Login
                            </div>
                            <br />
                            <div className="flex items-center  h-10 w-30   hover:text-blue-500 text-gray-900 font-medium p-2">
                                {/* <!-- Heroicon name: phone --> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" stroke-linejoin="round"
                                        d="" />
                                </svg> */}
                                Sign-In
                            </div>
                        </div>
                    </a>
                </div>

            </nav>
    </div>
  )
}

export default nav
