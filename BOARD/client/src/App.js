import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Create from "./routes/Create";
import Update from "./routes/Update";
import Delete from "./routes/Delete";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route path="/users" exact={true} component={Home} />
      <Route path="/users/:id" component={Detail} />
      <Route path="/create" component={Create} />
      <Route path="/update/:id" component={Update} />
      <Route path="/delete/:id" component={Delete} />
    </HashRouter>
  );
}

export default App;
