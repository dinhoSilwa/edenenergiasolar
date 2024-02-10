import advantageone from '../advantages/imgs/advantage1.png'
import Image from 'next/image';
import CallTocationMain from '@/components/calltoaction/calltoactionnutton'

const Firstadvantage = () =>{
 return(
  <>
  <section className='w-full mt-20 flex items-center flex-col'>
  <Image src={advantageone} style={{width : "350px"}} alt={"image da primeira sessão de vantagens"} />
  
  <h1 className="text-[40px] w-[80%] leading-[45px] font-extrabold text-zinc-900 mb-10">Por que investir em 
<span className='text-green-500'> energia solar </span>é o 
melhor negócio?</h1>

  <article className='w-[75%] text-left flex flex-col gap-6 text-zinc-800 mb-10'>
  <p>A energia solar é uma opção altamente vantajosa para proprietários de residências e empresas que buscam economizar dinheiro e ser mais sustentáveis. 
</p>

<p>Além dos benefícios já mencionados, a energia solar também oferece independência energética, já que os proprietários podem gerar sua própria eletricidade e reduzir a dependência de fornecedores de energia. 
</p>


<p>Além disso, os sistemas solares são silenciosos e não emitem poluição sonora, o que os torna ideais para áreas residenciais e urbanas. Os painéis solares também são duráveis e resistentes, podendo durar mais de 25 anos, o que resulta em ainda mais 
economia a longo prazo.
</p>
  </article>

  <CallTocationMain/>

  </section>
  </>
 )
}

export default Firstadvantage;