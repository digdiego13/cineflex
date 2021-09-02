import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import StepComment from "./StepComment";
import "./sessoes.css";
import { Link } from "react-router-dom";

export default function Sessoes() {

    const params = useParams()
    const id = params.idSessao
    const [sessao, setSessao] = useState({});
   
    console.log(id)
    useEffect(()=> {
    const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${id}/showtimes`);
    promise.then((resp) => {setSessao(resp.data)})
    promise.catch((resp)=>(console.log(resp.data.message)))
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
                {sessao.days.map((day,index) =>{
                    return(
                        <>
                    <h2>{day.weekday} - {day.date}</h2>
                    <div className="horarios">15h</div>
                    </>
                    )
                    
                })}
            </div> : ''}
            
        </>
    )
    
    
}