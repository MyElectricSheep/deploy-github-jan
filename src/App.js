import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

const getPath = (path) => {
 if (process.env.NODE_ENV === 'production') {
   return process.env.PUBLIC_URL + path
 } else {
   return path
 }
}

function App() {
  return (
    <div className="App">
    <Link to="/something">Page 1</Link>{" "}
    <Link to="/another">Page 2</Link>{" "}
    <Link to="/again">Page 3</Link>
      <Switch>
        <Route path={getPath("/something")}>
          <h1>Dolor</h1>
        </Route>
        <Route path={getPath("/another")}>
          <h1>Ipsum</h1>
        </Route>
        <Route path={getPath("/again")}>
          <h1>Lorem</h1>
        </Route>
        <Route exact path={getPath("/")}>
          <h1>Site entry</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
