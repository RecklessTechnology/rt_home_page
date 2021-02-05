import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// components
import Layout from "./Layout";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <PublicRoute path="/" component={Layout} />
      </Switch>
    </HashRouter>
  );


  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
