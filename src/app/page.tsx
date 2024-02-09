import Image from "next/image";
import Navigation from '@/components/herocomponents/header/header'
import HeroMain from '@/components/herocomponents/heromain'
import HeroImagems from "@/components/herocomponents/hero.imgs.collection/heroimages";

export default function Home() {
  return (
   <>
   <Navigation />
   <HeroMain />
   <HeroImagems />
   
   
   </>
  );
}
