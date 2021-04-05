

import Home from "./component/Home";
import Contact from "./component/Contact"

import ReactDom from "react-dom";
import {  Route, Switch } from "react-router-dom";

function App() {
  return (
    
   <Switch>
        <Route path="/" component={Home} />

       <Route path="/contact" component={Contact}/>
    </Switch>
   

  );

}


export default App;
