import routes from "./routes.js";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './layout/Navbar';

const mapRoutes = routes => {
  return routes.map((prop, key) => {
    let Component = prop.component;
    return (
      <Route exact
        path={prop.path}
        render={props => <Component {...props} />}
        key={key}
      />
    )
  });
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>{mapRoutes(routes)}</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
