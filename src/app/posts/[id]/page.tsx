import {PostProps} from "../page";
import { PostInfo } from "./_components/post";
import { Suspense } from "react";

// rota dinâmica
export default async function DetailPost({
    params
}: {
    params: Promise<{ id: string }> // id é o nome da rota
}) {

   
    const{ id } = await params;

   

    return(
        <div>
            <h1>
                Detalhes do post: id = {id}
            </h1>

            <Suspense fallback={<h1>Carregando...</h1>}> {/* o componente dentro do fallback será exibido enquanto o carregamento do PostInfo ocorre */}
                <PostInfo id={id}/>
            </Suspense>
            
        </div>
    )
}