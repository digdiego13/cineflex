
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import StepComment from "./StepComment";
import { Link } from "react-router-dom";
import Rodape from "./Rodape";
import Assento from './Assento';
import AssentosLegenda from "./AssentosLegenda";
import './Sucesso.css'



export default function Sucesso ({objetoAssentos}) {
    console.log(objetoAssentos)
    
    return(
        <>
        <StepComment step="Confira suas informacoes" />
        <div className="conteudo-sucesso">
            <h1>Filme e Sessao</h1>
            <p>Nome do Filme</p>
            <p>dia do filme</p>
            <h1>Assentos</h1>
            <p>Assento 1</p>
            <p>Assento 2</p>
            <h1>Dados do Comprador</h1>
            <p>Nome do comprador</p>
            <p>CPF do comprador</p>
        </div>

        </>
    )
}