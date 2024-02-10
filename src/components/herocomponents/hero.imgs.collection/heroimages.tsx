"use client"
import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImg from '@/components/herocomponents/hero.imgs.collection/Logo.png'


import bannerMan from './heropng.png';


const HeroImagems: React.FC = () => {
  const containnerEffect = useRef<gsap.core.Timeline | undefined>();

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   if (!containnerEffect.current) {
  //     containnerEffect.current = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".containerEffectScrorll",
  //         scrub: true,
  //         markers : true,
  //         start: "top 100px",
  //         end: "bottom 800px"
  //       }
  //     })
  //     .fromTo(".bannerMan", { opacity: 0.8 }, { opacity: 1 })
  //     .fromTo(".helmetLeft" , {top : "100px", left : "10px"} , { top : "150px", left : "10px"})
  //     .fromTo(".painelLeft", {top : "250px", opacity : 0.8}, {top : "260px", opacity : 1})
  //     .fromTo(".painelmiddle", {left : "300px"} , { left : "100px"})
  //     .fromTo(".painelRight", {left : 0} , { left : "200px"})
  //   }
  // }, []);

  return (
    <>
      <Image src={logoImg} alt="logo hero main" style={{width : '100px '}} className=" mt-8 ml-8" />

      <div className=' w-full flex items-center justify-center relative mt-10 border containerEffectScrorll'>

        <Image src={bannerMan} alt="banner man" style={{ maxWidth: '450px' }} className="" />

      </div>
    </>
  );
}

export default HeroImagems;
