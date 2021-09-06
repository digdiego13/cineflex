import './Voltar.css'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components';
import { useState } from 'react';

export default function Voltar({pathAtual}) {
    
    const history = useHistory();
     

    function HandleClick() {
        history.goBack();
        console.log(history)
       
    }
   
return(
<div onClick={HandleClick} className={pathAtual ==='/sessoes' ? 'botao-voltar' : 'escondido'}><ion-icon name="arrow-back-circle-outline"></ion-icon></div>
)
}
