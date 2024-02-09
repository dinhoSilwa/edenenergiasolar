import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <>
      <nav>
        <ul className="bg-green-700 h-16 flex items-center justify-end text-white ">
         
            <Link href="/rota-da-simulacao">
            <li className="ml-auto mr-8 bg-green-800 h-12 px-3 w-36 text-sm flex items-center justify-center rounded-md hover:bg-green-500"> Fazer Simulação</li>
            </Link>
         
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
