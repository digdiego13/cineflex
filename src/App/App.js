import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Topo from '../Compartilhado/Topo';
import Home from './Home';
import Sessoes from './Sessoes/Sessoes';
import Assentos from './Assentos/Assentos';
import Sucesso from './Sucesso/Sucesso';
import '../Compartilhado/Voltar'
import { useState } from 'react';
import Voltar from '../Compartilhado/Voltar';


export default function App () {

  
  const [pathAtual, setPathAtual] = useState('/')
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
      <Voltar pathAtual={pathAtual}/>
      <Switch>
        <Route path="/" exact>
          <Home setPathAtual={setPathAtual}/>
        </Route>
        <Route path="/sessoes/:idFilme" exact>
          <Sessoes setPathAtual={setPathAtual}/>
        </Route>
        <Route path="/assentos/:idSessao" exact>
          <Assentos alterarAssentos={alterarAssentos} objetoAssentos={objetoAssentos} setPathAtual={setPathAtual}/>
        </Route>
        <Route path="/sucesso/" exact>
          <Sucesso objetoAssentos={objetoAssentos} setPathAtual={setPathAtual}/>
        </Route>
      </Switch>
    
    
    </BrowserRouter>
  )
}
