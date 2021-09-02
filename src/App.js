import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Topo from './Topo';
import Home from './Home';
import Sessoes from './Sessoes';

export default function App () {

  


  return(
    <BrowserRouter>
      <Topo />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sessoes/:idSessao" exact>
          <Sessoes />
        </Route>
      </Switch>
    
    
    </BrowserRouter>
  )
}
