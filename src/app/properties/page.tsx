import Image from "next/image"
import Nav from "../components/nav";
import Search from "../components/search"
import React from 'react'

const page = () => {
    return (
        <div>
            <Nav />
            <Search />
            {/* // properties ggrid  */}

            <div className="bg-[#FFFFFF] py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-8">Introducing Our Latest Product</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-100 rounded-lg shadow-lg p-4">
                            <div className="relative overflow-hidden">
                                <Image className="object-cover  w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" height={100} width={100} alt="Product" />
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text- mt-4">26 Old Street Miami, OR 12870</h3>
                            <p className="text-gray-500 text-sm mt-2">.</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-gray-900 font-bold text-lg">$29.99</span>
                                <button className="bg-gray-900 text-white py-2 px-2 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                            </div>
                        </div>
                        <div className="bg-slate-100 rounded-lg shadow-lg p-4">
                            <div className="relative overflow-hidden">
                                <Image className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" height={100} width={100} alt="Product" />
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mt-4">26 Old Street Miami, OR 12870</h3>
                            <p className="text-gray-500 text-sm mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed

                                ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-gray-900 font-bold text-lg">$29.99</span>
                                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                            </div>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-lg shadow-lg p-4">
                            <div className="relative overflow-hidden ">
                                <Image className="object-cover w-full h-full rounded-lg" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" height={100} width={100} alt="Product" />
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mt-4">26 Old Street Miami, OR 12870</h3>
                            <p className="text-gray-500 text-sm mt-4 m-30">.</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-gray-900 font-bold text-lg">$29.99</span>
                                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default page

