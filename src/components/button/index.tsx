'use client'

import { useState } from "react"

export function Button(){

    const [nome, setNome] = useState("davi")

    function thename(nome:any, setNome:any) {
        if(nome === "davi"){
            setNome("davi torres")
        } else {
            setNome("davi")
        }
        // se o nome for davi ele vai mudar para davi torres e vice-versa 
    }

    return(
        <div>
            <button onClick={() => thename(nome, setNome)}
            >Alterar nome</button><br />
            <h3>Nome: {nome}</h3>
        </div>
    )
}