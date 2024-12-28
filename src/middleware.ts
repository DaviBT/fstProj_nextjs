import { NextResponse, NextRequest } from "next/server";


export function middleware (request: NextRequest){

    const authenticated = false; // user não logado

    if(request.nextUrl.pathname.startsWith('/dashboard') && !authenticated){
        console.log('acesso negado')
        return NextResponse.redirect(new URL('/', request.url))
    } // se não tiver autenticado, vai voltar para a home (redirecionado)

    return NextResponse.next()
}