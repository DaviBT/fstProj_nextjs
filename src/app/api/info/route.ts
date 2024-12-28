


export async function GET(){
    return Response.json({
        name: 'davi',
        instagram: '@davi',
        youtube: '@youtubedavi',
    })
}

// route handlers
// post(cadastrar), put (atualizar), delete...
// response.json -> mostra que a resposta do método GET da API será um objeto em forma de json