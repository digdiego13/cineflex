export default function Rodape ({imagemFilme, tituloFilme, sessaoFilme}) {

    return(
        <div className="rodape">
            <img src={imagemFilme} />
            <div>
                <p>{tituloFilme}</p>
                {sessaoFilme !== undefined ? <p>{sessaoFilme}</p> : "" }
                
            </div>
        </div>
    )
}