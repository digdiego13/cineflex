
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import StepComment from "./StepComment";
import { Link } from "react-router-dom";
import Rodape from "./Rodape";
import './Assentos.css'
import Assento from './Assento';

export default function Assentos () {

    const params = useParams()
    const id = params.idSessao
    const [assentosEscolhidos, setAssentosEscolhidos] = useState([]) 
    const reservaAssentos = {
        id: assentosEscolhidos,
        name: "Vou pegar ainda",
        cpf:"vou pegar ainda"
    }
    const [assentos, setAssentos] = useState([]);
    const {movie, seats, day, name: hour} = assentos

    console.log(id)
    useEffect(()=> {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`);
        promise.then((resp) => {setAssentos(resp.data)})
        promise.catch((resp)=>(alert("Algo deu errado")))
    },[])

    if(assentos.length === 0){
        return(
        <Loading />
        )
    }
    console.log(seats)

  

    return(
        <>
        <StepComment step="Selecione o(s) assento(s)" />
        <div className="conteudo">
            <div className="assentos">
                {seats.map((seat, index)=> {
                    return(<Assento assentosEscolhidos={assentosEscolhidos} key={index} id={seat.id} isAvailable={seat.isAvailable} name={seat.name} />)
                    
                })}
              
            </div>
            <div className="legenda">
                <div>
                    <div className="assento verde"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className="assento cinza"></div>
                    <p>Disponivel</p>
                </div>
                <div>
                    <div className="assento amarelo"></div>
                    <p>Indisponivel</p>
                </div>
                
            </div>
            
        </div>

        <Rodape tituloFilme={movie.title} imagemFilme={movie.posterURL} sessaoFilme={day.weekday} sessaoHora={hour} />
        </>
    )
}