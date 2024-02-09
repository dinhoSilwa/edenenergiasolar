"use client"
import bannerMan from './heromangroup.png'
import helmetLeft from './Helmetleft.png'
import helmetRight from './Helmetright.png'
import painelLeft from './painelleft.png'
import painelRight from './painelright.png'
import painelMiddle from './Painelmiddle.png'
import Image from 'next/image';
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import { useEffect , useRef , useLayoutEffect } from 'react'


const HeroImagems : React.FC = () => {

 const containnerEffect = useRef(null)

 useLayoutEffect(() =>{
     gsap.registerPlugin(ScrollTrigger);
     containnerEffect.current = gsap.timeline({
      scrollTrigger: {
      trigger : ".containerEffectScrorll",
       scrub: true,
       // markers : true,
       start: "top 600px",
       end: "bottom 800px"
     }
     }).fromTo(".bannerMan",{opacity : 0.8}, {opacity : 1}).fromTo(".imgLeft", {opacity : 0 , bottom : "300"} , {opacity : 1 , bottom : "360px"})
     .fromTo(".painelmiddle", { right : "-200px" , opacity : 0} , { right : "-40px", opacity : 1})
     .fromTo(".helmetRight", { top : "200px", opacity : 0 } , { top : "300px", opacity : 1 })
     
     
 })

 

 return(
  <>
<div className='flex items-center justify-center relative mt-10 border containerEffectScrorll'>
 
<Image src={helmetLeft} alt="banner man" style={{maxWidth : '200px'}} className="absolute left-[20px] imgLeft" />
<Image src={painelLeft} alt="banner man" style={{maxWidth : '200px'}} className="painelLeft absolute z-50 top-96 left-8" />
<Image src={painelMiddle} alt="banner painel middle" style={{maxWidth : '600px'}} className="painelmiddle absolute" />
<Image src={bannerMan} alt="banner man" style={{maxWidth : '500px'}} className="bannerMan z-40 ml-auto mr-auto" />
<Image src={painelRight} alt="banner painel direito" style={{maxWidth : '130px'}} className="absolute z-40 right-[50px]" />
<Image src={helmetRight} alt="banner man" style={{maxWidth : '400px'}} className="helmetRight absolute left-80 z-50  " />

</div>

<section className='h-[975px]'>
 ksjda

</section>
  </>
 );
}

export default HeroImagems;