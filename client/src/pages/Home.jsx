import React from 'react'
import HomeSlider from '../components/HomeSlider'
import CatSlider from '../components/CatSlider'
import Section from '../components/Section'
import AdBannerSliderV2 from '../components/AdBannerSliderV2'
import ScrollableTabs from '../components/ScrollablTabs'
import ProductSlider from '../components/ProductSlider'
import Footer from '../components/Footer'
import HomeSliderV2 from '../components/HomesliderV2'
import BannerBoxV2 from '../components/BannerBoxV2'
import Header from "../components/header"

function Home() {
  return (
    <>
     
     <div className="home  "> 
     
     <div className="bg-zinc-200 !pt-4">
      <HomeSlider /> 
    <CatSlider />

     </div>
     <section>
<div className='container !pt-10 w-full mx-auto'>
  <div className='flex justify-between  items-center '>
    <div className="leftSec w-[40%]">
      <h1 className='!text-5xl text-left font-600'>Popular Products</h1>
      <p className='!text-left !text-md'>Do not miss the current offers until the end of this Month</p>
    </div>
    <div className="rightSec !w-[60%]" >
      <ScrollableTabs className="!w-full" />
    </div>
  </div>
       <ProductSlider items={6} />
       
</div>

     </section>
      <section className='py-6  w-full  !px-14 !pl-19'>
      <div className="containerHome  flex gap-8">
        <div className="part1 w-[70%]">
         <HomeSliderV2/>  
        </div>
        <div className="part2 flex w-[30%]  flex-col  !px-6 gap-4 justify-center">
          <BannerBoxV2 info={"right"} title="Buy Men's Footwear at low price" link={"/"} price={"$12"} src={"/public/BannerBoxV2Img1.jpg"}/>
          <BannerBoxV2 info={"left"} title="Buy Apple's Iphone" link={"/"} price={"$100"}  src={"/public/BannerBoxV2Img2.jpg"} />
        </div>
      </div>

    </section>
    <Section className="flex flex-col mx-auto !bg-white items-center !pt-5 justify-center">
    </Section>
    <AdBannerSliderV2 items={[3]} spaceBetween={15} />
    </div>
    <section className='container !pt-5 !px-10 !w-full mx-auto  bg-gray-100'>
      <h1 className='!text-5xl text-left font-600 !px-7'>Latest Products</h1>
     
      <ProductSlider items={6} />
    </section>
    <section className='bg-gray-100 !pt-2 !px-6 !shadow-lg  rounded-b-[2vw]  !w-full mx-auto'>
    <AdBannerSliderV2  items={[2]} spaceBetween={5} />
    </section>
    </>
)
}

export default Home