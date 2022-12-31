import React from 'react'
import { MetafyLogo, SearchIcon } from '../../assets'

const HomeComp = () => {

    const odata = [
        'No. Of Transactions ?',
        'Contracts Deployed ?',
        'First transaction ?',
        'Total NFTs Collected ?',
        'ERC-20 Tokens Collected ?',
        'How many times you swapped ?'
    ]

    return (
        <div className='text-white flex flex-col justify-center items-center font-Inter'>
            <div className='flex items-center justify-center space-x-7 pt-[8vh]'>
                <MetafyLogo className='w-[50px]' />
                <div className='border h-[4vh]'></div>
                <h1 className='text-4xl'>#ETHUnwrapped2022</h1>
            </div>

            <div className="relative group mt-[10vh]">
                <div className=" absolute -inset-0.5 bg-gradient-to-r translate-y-[-0.4rem] from-[#EB8145] to-[#1E99FE] rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r translate-y-[0.4rem] from-[#EA245A] to-[#6A38F5] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative text-white px-[7vw] py-10 bg-[#181818] rounded-lg leading-none flex items-center divide-x divide-gray-600">

                    <div>

                        <div className='flex flex-col items-center'>
                            <div className='text-4xl font-semibold'>
                                Your 2022 ETH Web3 Journey UnWrapped
                            </div>
                            <div className='text-4xl font-medium my-11'>
                                Find Your
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <div className=' grid gap-4 grid-cols-2 '>
                                {odata.map((item, index) => (
                                    <div key={index} className='flex items-center font-medium space-x-4 mx-9'>
                                        <div className='w-3 h-3 bg-[#F3D503] rounded-full'></div>
                                        <div className='text-lg'>
                                            {item}
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center justify-center'>
                            <div className="flex items-top my-[6vh] justify-center content-center relative items-center w-full h-full">
                                <form method="GET">
                                    <div className="relative text-gray-600 focus-within:text-gray-400">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                                <SearchIcon className='w-[25px]' />
                                            </button>
                                        </span>
                                        <input type="search" name="q" className="py-2  text-sm w-[20vw] h-[5vh] text-white bg-[#262626] placeholder:text-[#747474] rounded-lg pl-16 focus:outline-none focus:bg-white focus:text-black" placeholder="Address : 0x...0f00" autoComplete="off" />
                                    </div>
                                </form>
                            </div>


                            <button className='border rounded-lg w-[170px] px-5 py-3 hover:bg-[#ffffff2a] mr-[7vw]'>
                                Get Your Unwrapped
                            </button>


                        </div>



                    </div>




                </div>
            </div>


        </div>
    )
}

export default HomeComp