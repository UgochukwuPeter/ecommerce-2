import React from 'react'
import Header  from '../components/Header';
import Categories from '../components/Categories';
import FlashSales from '../components/FlashSales';
import TopSelling from '../components/TopSelling';
import AdvertSection3 from '../components/AdvertSection3';
import PhoneDeals from '../components/PhoneDeals';
import BestPhoneDeals from '../components/BestPhoneDeals';
import ApplianceDeal from '../components/ApplianceDeal';

const Home = () => {
  return (
    <div>
      <Header/>
      <Categories/>
      <FlashSales/>
      <TopSelling/>
      <AdvertSection3/>
      <PhoneDeals/>
      <BestPhoneDeals/>
      <ApplianceDeal/>
    </div>
  )
}

export default Home