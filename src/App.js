import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Shoes from "./containers/Shoes/Shoes";
import SelectedShoe from "./containers/SelectedShoe/SelectedShoe";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Shoes} />
          <Route path="/selected-shoe" component={SelectedShoe} />
          <Route />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
