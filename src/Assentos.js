
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import StepComment from "./StepComment";
import { Link } from "react-router-dom";
import Rodape from "./Rodape";
import './Assentos.css'
import Assento from './Assento';
import AssentosLegenda from "./AssentosLegenda";

export default function Assentos ({ alterarAssentos, objetoAssentos}) {
    const params = useParams()
    const id = params.idSessao
    const [assentosEscolhidos, setAssentosEscolhidos] = useState([]) 
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
    let reservaAssentos = {
        ids: assentosEscolhidos,
        name: "",
        cpf:"",
        filme: movie.title,
        data: day.date,
        horario: hour
    }
  
  function infoNome(event) {
      reservaAssentos.name = event.target.value
      alterarAssentos(reservaAssentos)
  }
  function infoCpf(event) {
    reservaAssentos.cpf = event.target.value;
    alterarAssentos(reservaAssentos)
    }
    
    function reservarPoltronas(){

    alterarAssentos(reservaAssentos)
    if(objetoAssentos.name === '' || objetoAssentos.cpf === '' || objetoAssentos.ids.length === 0){
        return alert("Faltam informacoes")
    }
    
    const promise = axios.post(`
    https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, objetoAssentos)
    
    promise.catch(()=> alert("Algo deu errado"))
    }

    return(
        <>
        <StepComment step="Selecione o(s) assento(s)" />
        <div className="conteudo">
            <div className="assentos">
                {seats.map((seat, index)=> {
                    return(<Assento assentosEscolhidos={assentosEscolhidos}
                         key={index} 
                         id={seat.id} 
                         isAvailable={seat.isAvailable} 
                         name={seat.name} 
                         alterarAssentos={alterarAssentos} />)
                })}
            </div>
            <AssentosLegenda />
            <div className="informacoes">
                <p>Nome do Comprador</p>
                <input type="text" placeholder='Coloque o seu nome...' onChange={infoNome} ></input>
            </div>
            <div className="informacoes">
                <p>CPF do Comprador</p>
                <input type="number" placeholder='Escreva seu CPF...' onChange={infoCpf} ></input>
            </div>
            <div>
            <Link to={`/sucesso/`}><button className='botao-laranja' onClick={reservarPoltronas}>Reservar Assento(s)</button></Link>
            
            </div>
               
        </div>  
               
        <Rodape tituloFilme={movie.title} imagemFilme={movie.posterURL} sessaoFilme={day.weekday} sessaoHora={hour} />
        </>
    )
}