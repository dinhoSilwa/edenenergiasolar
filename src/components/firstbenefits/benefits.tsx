
import CallTocationMain from '@/components/calltoaction/calltoactionnutton'
import {Sun , PiggyBank, Home, Factory, PlugZap, Wrench, Landmark} from 'lucide-react'
const Firstbenefits = () => {
 return(
  <>
  
<header className="flex justify-center">
<h1 className="mt-10 text-[22px] w-[75%] leading-[30px] font-extrabold text-zinc-800 mb-10 text-center">Veja os benefícios de ter <span className="text-green-600">energia solar em sua residência</span></h1>

 </header>  

<section className="flex flex-wrap items-center justify-center gap-2">
 <article className="hover:bg-slate-200 w-[40%] h-[150px] bg-zinc-300 rounded-lg flex flex-col items-center justify-center">
 <span className='flex flex-col items-center justify-center text-center px-6 gap-2'>
 <Sun className="text-green-900" /> <p>Redução das Contas de Energia</p>
 </span>
 </article>

 <article className="hover:bg-slate-200 w-[40%] h-[150px] bg-zinc-300 rounded-lg flex flex-col items-center justify-center">
 <span className='flex flex-col items-center justify-center text-center px-6 gap-2'>
 <PiggyBank className="text-green-900" /><p>Economia a Longo Prazo</p>
 </span>
 </article>


 <article className="hover:bg-slate-200 w-[40%] h-[150px] bg-zinc-300 rounded-lg flex flex-col items-center justify-center">
 <span className='flex flex-col items-center justify-center text-center px-6 gap-2'>
 <Wrench className="text-green-900" /> <p>Baixa Manutenção</p>
 </span>
 </article>




 <article className="hover:bg-slate-200 w-[40%] h-[150px] bg-zinc-300 rounded-lg flex flex-col items-center justify-center">
 <span className='flex flex-col items-center justify-center text-center px-6 gap-2'>
 <Factory className="text-green-900" /><p>Redução de Carbono</p>
 </span>
 </article>


 <article className="hover:bg-slate-200 w-[40%] h-[150px] bg-zinc-300 rounded-lg flex flex-col items-center justify-center">
 <span className='flex flex-col items-center justify-center text-center px-6 gap-2'>
 <PlugZap className="text-green-900" /><p>Independência Energética</p>
 </span>
 </article>

 <article className="hover:bg-slate-200 w-[40%] h-[150px] bg-zinc-300 rounded-lg flex flex-col items-center justify-center">
 <span className='flex flex-col items-center justify-center text-center px-6 gap-2'>
 <Landmark className="text-green-900" /><p>Incentivo Fiscal</p>
 </span>
 </article>
 
 



</section>

<CallTocationMain/>

  </>
 );
}

export default Firstbenefits;