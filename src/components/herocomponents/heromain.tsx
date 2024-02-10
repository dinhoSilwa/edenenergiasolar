import Link from "next/link";
import Image from "next/image";
import {Medal , MapPinned} from 'lucide-react'
import { IconCreditCardFilled } from '@tabler/icons-react';
import CallTocationMain from '@/components/calltoaction/calltoactionnutton'

const HeroMain : React.FC = () => {
 return(
  <>
  
  <section className=" flex flex-col mt-10 mb-16 px-8">


<h3 className="font-light mb-2">Chega de pagar <span className="font-bold text-green-600">contas de energia abusivas</span></h3>
  <h1 className="text-[40px] w-[80%] leading-[45px] font-extrabold text-zinc-800 mb-10">Reduza sua conta de energia em até 95% com Energia Solar</h1>
  

  <ul className="flex flex-col gap-6">
   <li className="flex gap-1">
   <Medal className="text-green-600 font-extrabold" /> <span className="text-green-600 font-bold">25 anos</span> 
   <span className="text-zinc-600"> de garantia de geração</span>
   </li>

   <li className="flex gap-1">
   <IconCreditCardFilled className="text-green-600 font-extrabold" /> 
   <span className="text-zinc-600"> Parcelamos</span>
   <span className="text-green-600 font-bold"> em até 72x</span> 
   
   </li>

   <li className="flex gap-1">
  

   <MapPinned className="text-green-600 font-extrabold" /> <span className="text-green-600 font-bold">Dinponivél </span> 
   <span className="text-zinc-600"> em todo Brasil</span>
   </li>
  </ul>

  </section>
  <CallTocationMain/>

 
  
  </>
 );
}

export default HeroMain;