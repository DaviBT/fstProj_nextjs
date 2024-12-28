// página carregada no SERVER SIDE, com componente BUTTON carregado no CLIENT SIDE
// página com server component sem revalidate irá gerar os componentes estaticamente uma única vez -> para evitar isso, ter componentes client com 'use state' ou colocar revalidate

import {Button} from '@/components/button'
import Link from "next/link";

export interface PostProps{
    id: number;
    title: string;
    body: string
    userId:number;
}

interface ResponseProps{
    posts: PostProps[];
}


export default async function PostsPage(){

    const response = await fetch('https://dummyjson.com/posts', {
        cache: 'force-cache',
        next: {
            revalidate: 3600 // o cache ficará no navegador por 3600s (1h), não será necessário fazer a requisição novamente nesse período 
            //  o padrão é no-storage
        }
    })

    const data:ResponseProps  = await response.json();

    console.log(data);


    return(
    <div>

        <h1 className="text-center t-5 mb-2 font-bold text-3xl">Essa é a página posts</h1>

        <div className='bg-white text-black text-center'>
            <Button />
        </div>
    
        <div className="flex flex-col gap-4 mx-2">
            {data.posts.map(post => (
                <div key={post.id} className="bg-grey-200 p-4 rounded-md">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link className="text-blue-400" href={`/posts/${post.id}`}>
                    Acessar detalhes
                    </Link>
                </div>
            ))}
        </div>

    </div>

    )
}