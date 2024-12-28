import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'home - projeto NextJS para aprender na prática',
  description: 'aprendendo NEXTJS',
  openGraph: {
    title: 'Projeto para aprender NextJS',
    description: 'aprendendo NEXTJS',
    images: [],
  },
  alternates: {
    canonical: 'https://projetonextjs.com/',
    languages: {
      'pt-BR': '/pt-BR',
    },
  },
  robots:{
    index:true,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true,
    }
  }
}

export default function Home(){
  return(
    <div>
      <h1>Pagina Home</h1>
    </div>
  )
}