

import StepComment from '../../Compartilhado/StepComment'
import './Sucesso.css'
import '../App.css'
import { Link } from 'react-router-dom'



export default function Sucesso ({objetoAssentos, setPathAtual}) {
    console.log(objetoAssentos)
    setPathAtual('/sucesso/');
    
    return(
        <>
        <StepComment step={`Tudo Pronto! \n Confira suas informacoes`} classe='escrita-sucesso'/>
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
        <div className='botao-home'>
        <Link to='/'><button className='botao-laranja'>Voltar para Home</button></Link>
        </div>

        </>
    )
}