
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const NavBar = () => {
  return (

    <nav className="bg-gray-100 py-6 px-8">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center mx-5">
          <img src="https://ninico-nextjs.vercel.app/assets/img/logo/logo.png" alt="Logo" className="h-7" />
        </div>


        <div className="flex-1 ml-12">
          <input type="text" placeholder="Search Products..."
            className="w-full bg-gray-200 text-white rounded-md px-4 py-3"
          />
        </div>

        <div className="ml-4">

          <select className="bg-gray-200 text-black rounded-md px-4 py-3">
            <option value="en"> English</option>
            <option value="en">Arbic</option>
            <option value="fr">spenish</option>
            <option value="fr">madarianh</option>
          </select>
        </div>


        <div className="ml-0">
          <select className="bg-gray-200 text-black rounded-md px-4 py-3 mx-5">
            <option value="en">USD</option>
            <option value="en">YEAN</option>
            <option value="fr">EURO</option>
          </select>
        </div>


        <div className="flex items-center space-x-8 ml-10 text-xl ">

          <a className="h-18 mx-0"> <i class="fa-solid fa-cart-shopping"></i><span class="inline-flex items-center rounded-md bg-red-700 px-1 py-0 text-xs font-medium text-red-100 ring-1 ring-inset ring-red-100/10" style={{ borderRadius: "30px" }}>0</span> </a>
          <a className="h-18 mx-5"> <i class="fa-regular fa-user"></i> </a>
          <a className="h-18 mx-5"> <i class="fa-regular fa-heart"></i> <span class="inline-flex items-center rounded-md bg-red-700 px-1 py-0 text-xs font-medium text-red-100 ring-1 ring-inset ring-red-100/10" style={{ borderRadius: "30px" }}>0</span></a>

        </div>
      </div>



      <div className="flex " style={{ display: "flex", padding: "10px" }}>

        <div className="flex flex-col w-56 h-full text-white my-5 " >
          <div className="flex items-center justify-center h-16 border-b border-gray-950">
            <h1 className="text-xl font-bold bg-red-700 " style={{ height: "63px", width: "100%", textAlign: "center", padding: "15px", borderRadius: "10px 10px 0px 0px " }}> <i class="fa-solid fa-bars mr-2"></i>  Categories</h1>
          </div>


          <div className="flex flex-col flex-grow p-4 font-semibold">

            <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-regular fa-user text-red-700 mr-2" ></i> Candles</a>
            <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-brands fa-pagelines text-red-700 mr-2"></i> Handmade</a>
            <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-solid fa-shoe-prints text-red-700 mr-1"></i> Ginft Sets</a>
            <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-regular fa-face-smile text-red-700 mr-2"></i> Plastic Gift</a>
            <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-regular fa-futbol text-red-700 mr-2"></i> Handy Cream</a>
            <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-regular fa-chess-king text-red-700 mr-2"></i> Cosmatic</a>
            <a href="#" className="text-gray-900 hover:text-red-800 mb-5"> <i class="fa-solid fa-gift text-red-700 mr-2"></i> Silk Accessories</a>
            <a href="#" className="text-gray-950 hover:text-red-800 mb-4"> Value of The Day</a>
            <a href="#" className="text-gray-950 hover:text-red-800 mb-4"> Top 100 products</a>
            <a href="#" className="text-gray-950 hover:text-red-800 mb-4"> New Arrivels</a>
          </div>
        </div>


        <div class="hidden md:block" >
          <div class="ml-10 mt-8 flex items-baseline  " style={{ fontWeight: "700" }} >

            <div className="ml-2" style={{ fontWeight: "700" }}>
              <select className="bg-gray-100   py-2 hover:text-red-800">
            <option value="en" > Home</option>
            <option value="en">Wooden Home</option>
            <option value="fr">Fation Home</option>
            <option value="fr">Furniture Home</option>
            <option value="fr">cosmetic Home</option>
            <option value="fr">Food Grosery</option>
         
          </select>
            
            
            </div>

            <div className="ml-2">
              <select className="bg-gray-100 text-black  py-2 hover:text-red-800" >
                <option value="en" > Shope</option>
                <option value="en">Shope 2</option>
                <option value="fr">Shope detail</option>
                <option value="fr">Shope detail 2</option>
                <option value="fr">Sing in</option>
                <option value="fr">Sing out</option>
                <option value="fr">Cart</option>
                <option value="fr">Location</option>
              </select>
            </div>

            <div className="ml-2">
              <select className="bg-gray-100 text-black  py-2 hover:text-red-800" >
                <option value="en" > Page</option>
                <option value="en">Arbic</option>
                <option value="fr">spenish</option>
                <option value="fr">madarianh</option>
              </select>
            </div>

            <div className="ml-2">
              <select className="bg-gray-100 text-black  py-2 hover:text-red-800" >
                <option value="en"> Blog</option>
                <option value="fr">Blog Detail</option>
              </select>
            </div>

            <div className="ml-2">
              <select className="bg-gray-100 text-black rounded-md py-2 hover:text-red-800" >
                <option value="en" > Contact</option>
              </select>
            </div>

            <div className="flex space-x-6 ml-24" >
              <a className="h-18 mx-0"> <i class="fa-solid fa-phone" style={{ color: "darkred" }}></i> 908.408.501.89 </a>
              <a className="h-18 mx-0" > <i class="fa-solid fa-location-dot" style={{ color: "darkred" }}></i> Find store </a>
            </div>

          </div>






          <div className="flex " style={{ display: "flex", borderRadius: "10px", marginTop: "10px" }}>


            <div id="indicators-carousel" class="relative w-full h-full mt-3" data-carousel="static" style={{ width: "800px " }}>
              <div class="relative h-56 rounded-lg md:h-96">

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div class="" data-carousel-item="active">
                      <img src="https://wp.hixstudio.net/ninico/wp-content/uploads/2023/02/banner-1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                      <h1 className='absolute top-4 text-lg'>Accessories</h1>
                      <h1 className=' absolute top-8'>up to 40%  off latest creations</h1>
                    </div>
                  </SwiperSlide>


                  <SwiperSlide>
                    <div class=" duration-700 ease-in-out" data-carousel-item="active">
                      <img src="https://ninico-nextjs.vercel.app/assets/img/slider/banner-2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                  </SwiperSlide>


                  <SwiperSlide>
                    <div class=" duration-700 ease-in-out" data-carousel-item="active">
                      <img src="https://wp.hixstudio.net/ninico/wp-content/uploads/2023/02/banner-3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                  </SwiperSlide>

                </Swiper>



              </div>

            </div>


            <div className="side">

              <div className="flex items-center mx-1 ml-5 mt-3 ">
                <img src="https://ninico-nextjs.vercel.app/assets/img/slider/banner-slider-01.jpg" alt="Logo" className="h-1" style={{ height: "200px", borderRadius: "10px" }} />
              </div>

              <div className="flex items-center mx-1 ml-5 mt-4">
                <img src="https://ninico-nextjs.vercel.app/assets/img/slider/banner-slider-02.jpg" alt="Logo" className="h-1" style={{ height: "200px", borderRadius: "10px" }} />
              </div>
            </div>
        </div>
    </div>
   
      </div>
    </nav>
  
  
    
    
    
    
    
 

  );
};




export default NavBar;