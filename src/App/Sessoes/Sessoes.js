import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Compartilhado/Loading";
import StepComment from "../../Compartilhado/StepComment";
import "./sessoes.css";
import { Link } from "react-router-dom";
import Rodape from "../../Compartilhado/Rodape";

export default function Sessoes({setPathAtual}) {
    setPathAtual('/sessoes');
    const params = useParams()
    const id = params.idFilme
    const [sessao, setSessao] = useState([]);
    const days = sessao.days
    console.log(id)
    useEffect(()=> {
    const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`);
    promise.then((resp) => {setSessao(resp.data)})
    promise.catch((resp)=>(alert("Deu K.O")))
    },[])


    console.log(sessao.days)

    if(sessao.length === 0){
        return(
        <Loading />
        )
    }

    return (
        <>
            <StepComment step="Selecione o horario"/>
            {sessao.length !== 0 ? <div className="sessoes">
                {days.map((day,index) =>{
                    return(
                        <>
                    <h2 key={id}>{day.weekday} - {day.date}</h2>
                    <div className="flex">
                        {day.showtimes.map((showtime)=> (
                        <Link to={`/assentos/${showtime.id}`}><div className="horarios" key={showtime.id}>{showtime.name}</div></Link>
                        
                    ))}
                    </div>
                    
                    
                    </>
                    )
                    
                })}
            </div> : ''}
            <Rodape tituloFilme={sessao.title} imagemFilme={sessao.posterURL} />
            
            
        </>
    )
    
    
}