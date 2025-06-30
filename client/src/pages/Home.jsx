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
      <div className="home">
        <div className="bg-gradient-to-br from-indigo-100 to-white pt-4">
          <HomeSlider />
          <CatSlider />
        </div>
        <section>
          <div className="container pt-10 w-full mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="leftSec w-full md:w-[40%]">
                <h1 className="text-3xl md:text-5xl text-left font-semibold">Popular Products</h1>
                <p className="text-left text-md">Do not miss the current offers until the end of this Month</p>
              </div>
              <div className="rightSec w-full md:w-[60%] mt-4 md:mt-0">
                <ScrollableTabs className="w-full" />
              </div>
            </div>
            <ProductSlider items={6} />
          </div>
        </section>
        <section className="py-6 w-full px-2 md:px-14 md:pl-19">
          <div className="containerHome flex flex-col md:flex-row gap-8">
            <div className="part1 w-full md:w-[70%]">
              <HomeSliderV2 />
            </div>
            <div className="part2 flex w-full md:w-[30%] flex-col px-0 md:px-6 gap-4 justify-center mt-6 md:mt-0">
              <BannerBoxV2 info={"right"} title="Buy Men's Footwear at low price" link={"/"} price={"$12"} src={"/public/BannerBoxV2Img1.jpg"} />
              <BannerBoxV2 info={"left"} title="Buy Apple's Iphone" link={"/"} price={"$100"} src={"/public/BannerBoxV2Img2.jpg"} />
            </div>
          </div>
        </section>
        <Section className="flex flex-col mx-auto bg-white items-center pt-5 justify-center" />
        <AdBannerSliderV2 items={[3]} spaceBetween={15} />
      </div>
      <section className="container bg-gradient-to-br to-indigo-50 from-white pt-5 px-2 md:px-10 w-full mx-auto">
        <h1 className="text-3xl md:text-5xl text-left font-semibold px-2 md:px-7">Latest Products</h1>
        <ProductSlider items={6} />
      </section>
      <section className="pt-2 px-2 md:px-6 shadow-lg bg-gradient-to-tr to-indigo-50 from-white rounded-b-[2vw] w-full mx-auto">
        <AdBannerSliderV2 items={[2]} spaceBetween={5} />
      </section>
    </>
  )
}

export default Home