import { Star } from 'lucide-react';
import testemunho from './img.collection/Ellipse 9.png'
import testemunho2 from './img.collection/Ellipse 8.png'

import Image from 'next/image';

const Maintestimonies = () => {
  return (
    <>
      <section className='bg-zinc-200'>

        <header className="flex justify-center">
          <h1 className="mt-10 text-[22px] w-[75%] leading-[30px] font-extrabold text-zinc-800 mb-10 text-center">Veja O que nossos
            clientes falam
            sobre nosso
            serviço.</h1>

        </header>

        <section className="flex justify-center items-center flex-col">



          <article className="w-[80%] bg-zinc-100 flex flex-col items-center justify-center rounded-lg pt-8 mb-10 pb-8">
            <Image src={testemunho} style={{ width: "100px" }} alt='man' className='mb-8' />
            <header className='flex flex-col items-center justify-center gap-4 mb-6'>
              <p className='font-bold text-green-600 text-[18px]'>Bruno Pessoa - 22 anos</p>
              <span className='flex gap-1 text-orange-500'><Star /><Star /><Star /><Star /><Star /></span>
              <p className='font-bold'>Corretor de Imóveis</p>
            </header>
            <p className='w-[80%] text-[18px] italic text-green-900'>"Com a energia solar, não apenas economizei dinheiro, mas também valorizei minha casa. É incrível como algo tão simples pode fazer uma grande diferença no dia a dia."</p>
          </article>


                 
          <article className="w-[80%] bg-zinc-100 flex flex-col items-center justify-center rounded-lg pt-8 mb-10 pb-8">
            <Image src={testemunho2} style={{ width: "100px" }} alt='man2' className='mb-8' />
            <header className='flex flex-col items-center justify-center gap-4 mb-6'>
              <p className='font-bold text-green-600 text-[18px]'>Pedro Peixoto - 35 anos</p>
              <span className='flex gap-1 text-orange-500'><Star /><Star /><Star /><Star /><Star /></span>
              <p className='font-bold'>Engenheiro cívil</p>
            </header>
            <p className='w-[80%] text-[18px] italic text-green-900'>"Nunca imaginei que poderia ser tão fácil e gratificante adotar a energia solar. Agora, sinto-me mais independente e confiante em relação às minhas despesas de energia."</p>
          </article>


        </section>

      </section>
    </>
  );
}

export default Maintestimonies;