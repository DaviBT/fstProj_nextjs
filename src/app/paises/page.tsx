// função que será carregada no CLIENT SIDE 
async function handleFetchPaises(){
    'use server'

    var listPaises = ["Brasil, ", "Canadá, ", "EUA, ", "Inglaterra, ", "Austrália, "]

    return listPaises 
}

export default function Paises(){
    return(
        <div>
            <div>
                <h1>Pag Paises</h1>
            </div>

            <button onClick={handleFetchPaises}>
                mostrar paises atendidos por nossa empresa
            </button><br />

            <h3>
                {handleFetchPaises()}
            </h3>
        </div>
    )
}