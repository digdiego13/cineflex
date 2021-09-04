

import StepComment from "./StepComment";
import './Sucesso.css'



export default function Sucesso ({objetoAssentos}) {
    console.log(objetoAssentos)
    
    
    return(
        <>
        <StepComment step="Confira suas informacoes" />
        <div className="conteudo-sucesso">
            <h1>Filme e Sessao</h1>
            <p>{objetoAssentos.filme}</p>
            <p>{objetoAssentos.data}</p>
            <h1>Assentos</h1>
            {objetoAssentos.ids.map(element => {
                element = element.toString()
                let nAssento = `${element[element.length-2]}${element[element.length-1]}`
                return(<p>Assento {nAssento}</p>)
                
            })}
            <h1>Dados do Comprador</h1>
            <p>{objetoAssentos.name}</p>
            <p>CPF {objetoAssentos.cpf}</p>
        </div>

        </>
    )
}