import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Topo from './Topo';
import Home from './Home';
import Sessoes from './Sessoes';
import Assentos from './Assentos';
import Sucesso from './Sucesso';
import { useState } from 'react';


export default function App () {

  

  let [objetoAssentos, setObjetosAssentos] = useState({
    ids: [],
    name: "Vou pegar ainda",
    cpf:"12956329774",
    filme:"",
    data:'',
    horario:''
  })
  console.log(objetoAssentos);

  function alterarAssentos(assentosEscolhidos) {
    objetoAssentos = assentosEscolhidos
    setObjetosAssentos({...objetoAssentos})
    console.log(objetoAssentos)
  }
  


  


  return(
    <BrowserRouter>
      <Topo />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sessoes/:idFilme" exact>
          <Sessoes />
        </Route>
        <Route path="/assentos/:idSessao" exact>
          <Assentos  alterarAssentos={alterarAssentos} objetoAssentos={objetoAssentos}/>
        </Route>
        <Route path="/sucesso/" exact>
          <Sucesso objetoAssentos={objetoAssentos}/>
        </Route>
      </Switch>
    
    
    </BrowserRouter>
  )
}
