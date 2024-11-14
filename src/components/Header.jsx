import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/navLinks';

export default function Header() {
    const [navShow, setNavShow] = useState(false);
    const location = useLocation();

    useEffect(() => {
        return () => {
            setNavShow(false);
        };
    }, [location.pathname]);


    return (
        <header className='md:flex relative  md:pt-10 md:place-items-center '>
            <div className=' ml-[2.5rem] mt-[3rem] md:flex absolute md:pl-9 md:mt-0 mx-auto'>
                <Link to={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                </Link>
            </div>
            <hr className=' md:border-t border-t-0 md:border-gray-300 md:min-w-[27rem] md:ml-[9rem] md:translate-x-16 md:z-50' />
            <nav className={`flex flex-col flex-wrap md:flex-shrink-0 md:flex-row md:justify-content-center  md:place-content-center md:justify-evenly md:pr-32 md:pl-20 md:ml-8 md:z-10 bg-white bg-opacity-5 backdrop-blur-md md:flex-1 md:h-[6rem] md:pt-0 md:static ${navShow ? "left-0" : "left-[100vw]"} h-screen w-full ml-[7rem] gap-7 pl-10 pt-[9rem] z-50 absolute `}>
                {navLinks.map((data) => (
                    <Link key={data.id} to={data.url} className='text-white z-50 text-base font-normal relative  tracking-widest md:py-9 '>
                        {data.name}
                    </Link>
                ))}
                <div onClick={() => setNavShow(false)} className='md:hidden absolute top-[3.6rem] left-[13rem]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>
                </div>
            </nav>
            <div onClick={() => setNavShow(true)} className='flex justify-end mr-[2.5rem] mt-[3.3rem] p-2 rounded-md md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#ffffff" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
            </div>
        </header>
    )
};

