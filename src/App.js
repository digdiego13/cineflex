import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Topo from './Topo';
import Home from './Home';

export default function App () {

  


  return(
    <BrowserRouter>
      <Topo />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    
    
    </BrowserRouter>
  )
}
