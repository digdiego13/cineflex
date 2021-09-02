import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Topo from './Topo';
import Home from './Home';
import Sessoes from './Sessoes';
import Assentos from './Assentos';
import Sucesso from './Sucesso';

export default function App () {

  


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
          <Assentos />
        </Route>
        <Route path="/sucesso" exact>
          <Sucesso />
        </Route>
      </Switch>
    
    
    </BrowserRouter>
  )
}
