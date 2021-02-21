import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Link to="/something">Page 1</Link>{" "}
    <Link to="/another">Page 2</Link>{" "}
    <Link to="/again">Page 3</Link>
      <Switch>
        <Route path="/something">
          <h1>Dolor</h1>
        </Route>
        <Route path="/another">
          <h1>Ipsum</h1>
        </Route>
        <Route path="/again">
          <h1>Lorem</h1>
        </Route>
        <Route exact path="/">
          <h1>Site entry</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
