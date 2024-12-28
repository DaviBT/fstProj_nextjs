import { PostProps } from "../../page";

// server component (está fazendo a requisição HTTP)
export async function PostInfo({ id  }: { id: string }){

    await new Promise(resolve => setTimeout(resolve, 4000)) // simula a lentidão da API -> espera 4s para fazer a requisição 

    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data: PostProps  = await response.json();

    return(
        <div>
            <h2>{data.title}</h2> 
            <p>{data.body}</p>
        </div>
    )
}