import { Switch, Route, Redirect } from "react-router-dom";

import AllQoutes from "./pages/AllQoutes";
import QouteDetail from "./pages/QouteDetail";
import NewQoute from "./pages/NewQoute";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQoutes />
      </Route>
      <Route path="/quotes/:qouteId">
        <QouteDetail />
      </Route>
      <Route path="/new-qoute">
        <NewQoute />
      </Route>
    </Switch>
  );
}

export default App;
