import React, { useEffect, useState } from 'react'
import { background_home_desktop, background_home_mobile } from '../assets/images'
import Header from '../components/Header';



export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(background_home_desktop);
 

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(background_home_mobile);
      }
      else {
        setBackgroundImage(background_home_desktop);
      }
    };

    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);

    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, []);


  return (
    <div className="bg-cover h-screen relative" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <Header />
      <body>
        <div className='md:flex grid place-content-center  md:justify-between justify-items-center md:mx-10 md:mt-40 md:gap-28 gap-14 mt-32'>
          <div className=' md:max-w-[25rem] max-w-[20rem] md:ml-40'>
            <h3 className='text-white tracking-[0.4rem] font-[0.5px] md:text-2xl text-sm md:text-start text-center'>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className='text-white md:text-[6.5rem] tracking-[1rem] md:text-start text-center font-serif font-thin text-[4rem]'>SPACE</h1>
            <p className='text-white md:max-w-[24rem] text-sm font-mono md:text-start text-center font-thin'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className='flex md:mr-32 md:mt-14 bg-white rounded-[100%] w-48 h-48 justify-center items-center '>
            <p className='font-serif tracking-widest text-xl'>EXPLORE</p>
          </div>
        </div>
      </body>
    </div>
  )
};
