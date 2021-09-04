import { useState } from "react"
export default function Assento({assentosEscolhidos, isAvailable, id, name, selecionar, alterarAssentos, reservaAssentos}) {
    
    let [classeSelecionado, setClasseSelecionado] = useState('')
    function selecionar() {

        if(classeSelecionado !== '') {
            assentosEscolhidos.forEach(element => {
                element === id ? assentosEscolhidos.splice(assentosEscolhidos.indexOf(element), 1) : console.log('')
            });
            setClasseSelecionado('')
            alterarAssentos(reservaAssentos)
        }else{
            assentosEscolhidos.push(id)
            setClasseSelecionado('selecionado')
            alterarAssentos(reservaAssentos)
        }
       
       
    }
    function alertaSelecionado () {
        alert('assento nao disponivel')
    }
    return(
        <>
            {isAvailable ? 
            <button className={`assento ${classeSelecionado} `} onClick={selecionar}>{name}</button>
            : <button className={`assento indisponivel`} onClick={alertaSelecionado}>{name}</button>
                 
            }
            
        </>
    )
}