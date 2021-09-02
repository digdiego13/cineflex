import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import StepComment from "./StepComment";
import { Link } from "react-router-dom";

export default function Home() {
    const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");
    promise.then((resposta)=> {
        setFilmes(...filmes, resposta.data)
    })
  }
  ,[])

  if(filmes.length === 0) {
    return (
      <Loading />
    )
  }
  console.log(filmes)
  return (
      <>
        <StepComment step="Selecione o filme" />
        <div className="conteudo-filmes">
            {filmes.map((filme, index)=> {
               return(
               <Link to={`/sessoes/${filme.id}`} key={filme.id}><img className="conteudo-imagem"src={filme.posterURL} /></Link>
               )    
            })}
        </div>
      </>
  )
}