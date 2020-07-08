import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import AppRouter from "./routers/app-router";

import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path={"/app"} component={AppRouter} />
        <Redirect to={"/app/home"} component={AppRouter} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
