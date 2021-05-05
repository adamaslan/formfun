
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import { Result } from "./Result";
import Header from "./Header";


function App() {
  return (
    <>
      <Header> Shipping Label </Header>
      <Router> 
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/step4" component={Step4} />
          <Route path="/step5" component={Step5} />
          
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
