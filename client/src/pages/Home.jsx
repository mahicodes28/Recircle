import React, { useContext, useEffect } from 'react'
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
import AdBannerSlider from "../components/AdsBannerSlider"
import { AppContext } from '../context/AppProvider'

function Home() {

  const {productsByCategory, productId, productById, fetchProductById, products, fetchProduct} = useContext(AppContext);

  useEffect(()=>{
    fetchProduct(); // fetch all products for the slider
    fetchProductById(productId);
  },[])

  // Sort products by createdAt descending
  const sortedProducts = (products || []).slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <div className="home overflow-hidden px-4" >
        <div className=" bg-black text-white pt-4">
          <HomeSlider />
          <CatSlider />
        </div>
        <section>
          <div className="container  !mb-[-30%] px-12 xl:!mb-10 xl:!mb-0 xl:!mb-10 !pt-6 w-full ">
            <div className="flex flex-col md:flex-row md:justify-between xl:items-center gap-4">
              <div className="leftSec w-full md:w-[40%] ">
                <h1 className="text-3xl md:text-5xl text-left font-semibold">Popular Products</h1>
                <p className="text-left text-md">Do not miss the current offers until the end of this Month</p>
              </div>
              <div className="rightSec !text-white w-full md:w-[60%] mt-4  md:mt-0">
                <ScrollableTabs className="w-full" />
              </div>
            </div>
            <ProductSlider productsByCategory={productsByCategory}  items={5} />
          </div>
        </section>
        <section className="!py-6 !w-full px-2 md:!px-14 md:!pl-19">
          <div className="containerHome flex flex-col md:flex-row gap-8">
            <div className="part1 w-full md:w-[70%]">
              <HomeSliderV2 width={"1/2"} />
            </div>
            <div className="part2 flex w-full md:w[30%] xl:w-[30%] xl:flex-col md:flex-col !px-0 md:!px-6 gap-4 justify-center !mt-6 md:!mt-0">
            <BannerBoxV2 width={1/2} height={"14vh"} info={"left"} title="Maggie Noodles" link={"/"} price={"12"} src={"https://res.cloudinary.com/deg0bizoi/image/upload/v1752504570/IMG_1015_zwsyt4.png"} />

              <BannerBoxV2 width={1/2} height="14vh" info={"left"} title="Amul Doodh 1 litre" link={"/"} price={"28"} src={"https://res.cloudinary.com/deg0bizoi/image/upload/v1752504416/IMG_1011_kfcxod.png"} />
            </div>
          </div>
        </section>
        <Section className="flex flex-col  bg-white items-center !pt-5 justify-center" />
        <AdBannerSlider spaceBetween={"15"} items={"2"}  />
      </div>
      <section className="container  bg-black !mb-[-40%] xl:!mb-0 sm:!mb-0 md:!mb-0 !pt-5 px-2 md:!px-10 !w-full mx-auto">
        <h1 className="text-2xl xl:text-5xl md:text-5xl text-left font-semibold !px-6 xl:!px-8 md:!px-7">Latest Products</h1>
        <ProductSlider productsByCategory={sortedProducts} items={5} />
      </section>
      {/* New section for all products sorted by createdAt */}

      <section className="!pt-2 px-2 md:!px-6 shadow-lg bg-black rounded-b-[2vw] !w-full mx-auto">
        <AdBannerSliderV2 width={"full"} items={[2]} spaceBetween={5} />
      </section>
    </>
  )
}

export default Home