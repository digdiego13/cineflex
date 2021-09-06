export default function Rodape ({imagemFilme, tituloFilme, sessaoFilme, sessaoHora}) {

    return(
        <div className="rodape">
            <img src={imagemFilme} />
            <div>
                <p>{tituloFilme}</p>
                {sessaoFilme !== undefined ? <p>{sessaoFilme} - {sessaoHora}</p> : "" }
                
            </div>
        </div>
    )
}