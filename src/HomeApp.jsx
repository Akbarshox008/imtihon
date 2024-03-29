import React from 'react'
import FirstPage from './FirstPage/FirstPage';
import FourthPage from './FourthPage/FourthPage';
import SecondPage from './SecondPage/SecondPage';
import Slider from './SliderPage/Slider';
import ThirdPage from './ThirdPage/ThirdPage';
import HomeFooter from './HomeFooter/HomeFooter';
import Korzinka from './Korzinka/Korzinka';
import Shopping from './Shopping/Shopping';
const HomeApp = () => {
  return (
    <div>
      <Shopping/>
      <FirstPage/>
      <Korzinka/>
      <Slider/>
      <ThirdPage/>
      <SecondPage/>
      <FourthPage/>
      <HomeFooter/>
    </div>
  )
}

export default HomeApp