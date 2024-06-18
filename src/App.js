import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './index.css'

import { Autoplay, Pagination } from 'swiper/modules'

export default function App() {
  return (
    <>
      <div className="shadow-md w-full h-[60px] flex items-center justify-center bg-white">
        <p className='font-bold text-[20px]'>Nama Website</p>
      </div>
      <h1 className='w-fit mx-auto mt-[40px] font-bold text-[24px]'>List Of Our Products</h1>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="h-[60vh] mt-[40px]"
      >
        <SwiperSlide>
          <div className='w-[80%] mx-auto h-[60vh]'>
            <img src="/img/img.jpg" alt="images" className='w-full h-[75%]' />
            <div className="h-[20%] p-4 bg-[#141414]">
              <h3 className='text-white font-bold text-[17px]'>Nama Produk</h3>
              <p className='text-white text-[12px]'>Deskripsi Produk</p>
              <p className='text-white text-[12px]'>Rp. 200.000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[80%] mx-auto h-[60vh]'>
            <img src="/img/img.jpg" alt="images" className='w-full h-[75%]' />
            <div className="h-[20%] p-4 bg-[#141414]">
              <h3 className='text-white font-bold text-[17px]'>Nama Produk</h3>
              <p className='text-white text-[12px]'>Deskripsi Produk</p>
              <p className='text-white text-[12px]'>Rp. 200.000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[80%] mx-auto h-[60vh]'>
            <img src="/img/img.jpg" alt="images" className='w-full h-[75%]' />
            <div className="h-[20%] p-4 bg-[#141414]">
              <h3 className='text-white font-bold text-[17px]'>Nama Produk</h3>
              <p className='text-white text-[12px]'>Deskripsi Produk</p>
              <p className='text-white text-[12px]'>Rp. 200.000</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
