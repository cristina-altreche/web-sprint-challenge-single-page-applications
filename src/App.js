import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home.js";
import Form from "./components/Form.js";


const App = () => {
  return (
    <div className="App">
      <nav>
      <h1 className="store-header">Lambda Eats</h1>
      <div className="nav-links">
        <Link to ="/">Home</Link>
        <Link to ="/Form">Form</Link>
      </div>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Form">
        <Form/>
      </Route>
    </div>
  );
};
export default App;
