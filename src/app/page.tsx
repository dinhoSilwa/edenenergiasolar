import Image from "next/image";
import Navigation from '@/components/herocomponents/header/header'
import HeroMain from '@/components/herocomponents/heromain'
import HeroImagems from "@/components/herocomponents/hero.imgs.collection/heroimages";
import Firstadvantage from '@/components/advantages/firstadvantage'
import Firstbenefits from '@/components/firstbenefits/benefits'
import Maintestimonies from '@/components/testimonies/maintestimonies'


export default function Home() {
  return (
   <>
   <Navigation />
   <HeroImagems />
   <HeroMain />
   <Firstadvantage />
   <Firstbenefits />
   <Maintestimonies />
 
   
   
   </>
  );
}
