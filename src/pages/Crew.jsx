import React, { useEffect, useState } from 'react'
import { background_destination_desktop, background_destination_mobile, image_anousheh_ansari, image_douglas_hurley, image_mark_shuttleworth, image_victor_glover } from '../assets/images';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




export default function Crew() {
    const [backgroundImage, setBackgroundImage] = useState(background_destination_desktop)

    useEffect(() => {
        const updateBackgroundImage = () => {
            setBackgroundImage(window.innerWidth < 768 ? background_destination_mobile : background_destination_desktop);
        }
        updateBackgroundImage();
        window.addEventListener('resize', updateBackgroundImage);

        return () => window.removeEventListener('resize', updateBackgroundImage);
    }, [])

    return (
        <div className='h-screen bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Header />
            <div className='flex justify-center md:justify-start z-0 gap-3  md:translate-y-10 md:ml-[13rem] mt-4 md:mt-0'><p className='text-gray-500 md:text-[1.4rem] text-[26px] font-thin '>02</p><p className='text-white  md:text-2xl text-[26px] font-thin '>MEET THE CREW</p></div>
            <Swiper
                modules={[Autoplay, Pagination, Scrollbar, A11y, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <div className=''>
                    <SwiperSlide>
                        <div className='md:flex grid place-items-center md:place-items-start md:ml-[13rem] m-5 md:m-0 z-50'>
                            <div className='md:mt-[11rem] mt-0 order-2 md:order-1'>
                                <p className='text-gray-500 md:text-3xl text-xl tracking-wide font-serif font-thin mb-3 text-center md:text-start'>DEVELOPER</p>
                                <p className='text-white md:text-3xl text-[21px] -mt-2 font-serif tracking-[0.5rem] font-thin mb-3 text-center md:text-start'>PROGRAMMER PRAD</p>
                                <article className='text-white md:text-[16px] text-[17px] font-sans font-thin max-w-[27rem] text-center md:text-start -mt-2 md:mt-0 mb-4 md:mb-0'>My name is Pradeep (he/him). I'm a self-taught front-end developer who is passionate about learning new technologies & building things.
                                    I'm an art and design enthusiast, so I truly love bringing ideas to life in the form of beautiful and responsive websites.</article>
                            </div>
                            <img className='object-cover md:ml-[10rem] md:h-[30rem] md:translate-y-1 -translate-y-2 h-[23rem] pb-3 md:pb-0 z-50 order-1 md:order-2' src={image_douglas_hurley} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex grid place-items-center md:place-items-start md:ml-[13rem] m-5 md:m-0 z-50'>
                            <div className='md:mt-[11rem] mt-0 order-2 md:order-1'>
                                <p className='text-gray-500 md:text-3xl text-xl tracking-wide font-serif font-thin mb-3 text-center md:text-start'>PILOT</p>
                                <p className='text-white md:text-3xl text-[21px] -mt-2 font-serif tracking-[0.5rem] font-thin mb-3 text-center md:text-start'>VICTOR GLOVER</p>
                                <article className='text-white md:text-[16px] text-[17px] font-sans font-thin max-w-[27rem] text-center md:text-start -mt-2 md:mt-0 mb-4 md:mb-0'>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</article>
                            </div>
                            <img className='object-cover md:ml-[10rem] md:h-[30rem] md:translate-y-1 -translate-y-2 h-[23rem] pb-3 md:pb-0 z-50 order-1 md:order-2' src={image_victor_glover} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex grid place-items-center md:place-items-start md:ml-[13rem] m-5 md:m-0 z-50'>
                            <div className='md:mt-[11rem] mt-0 order-2 md:order-1'>
                                <p className='text-gray-500 md:text-3xl text-xl tracking-wide font-serif font-thin mb-3 text-center md:text-start'>DEVELOPER</p>
                                <p className='text-white md:text-3xl text-[21px] -mt-2 font-serif tracking-[0.5rem] font-thin mb-3 text-center md:text-start'>ANOUSEH ANSARI</p>
                                <article className='text-white md:text-[16px] text-[17px] font-sans font-thin max-w-[27rem] text-center md:text-start -mt-2 md:mt-0 mb-4 md:mb-0'>My name is Pradeep (he/him). I'm a self-taught front-end developer who is passionate about learning new technologies & building things.
                                    I'm an art and design enthusiast, so I truly love bringing ideas to life in the form of beautiful and responsive websites.</article>
                            </div>
                            <img className='object-cover md:ml-[10rem] md:h-[30rem] md:translate-y-1 -translate-y-2 h-[23rem] pb-3 md:pb-0 z-50 order-1 md:order-2' src={image_anousheh_ansari} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex grid place-items-center md:place-items-start md:ml-[13rem] m-5 md:m-0 z-50'>
                            <div className='md:mt-[11rem] mt-0 order-2 md:order-1'>
                                <p className='text-gray-500 md:text-3xl text-xl tracking-wide font-serif font-thin mb-3 text-center md:text-start'>DEVELOPER</p>
                                <p className='text-white md:text-3xl text-[21px] -mt-2 font-serif tracking-[0.5rem] font-thin mb-3 text-center md:text-start'>MARK SHUTTLEWORTH</p>
                                <article className='text-white md:text-[16px] text-[17px] font-sans font-thin max-w-[27rem] text-center md:text-start -mt-2 md:mt-0 mb-4 md:mb-0'>My name is Pradeep (he/him). I'm a self-taught front-end developer who is passionate about learning new technologies & building things.
                                    I'm an art and design enthusiast, so I truly love bringing ideas to life in the form of beautiful and responsive websites.</article>
                            </div>
                            <img className='object-cover md:ml-[10rem] md:h-[30rem] md:translate-y-1 -translate-y-2 h-[23rem] pb-3 md:pb-0 z-50 order-1 md:order-2' src={image_mark_shuttleworth} alt="" />
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    )
}
