import  Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center mt-9">
            <h1 className="text-center font-bold mt-9 text-6xl">Erro 404 - página não encontrada</h1>
            <p>Essa página não existe</p>
            <Link href='/'  className="underline hover:text-gray-500">
            Voltar para home
            </Link>
        </div>
    )
}