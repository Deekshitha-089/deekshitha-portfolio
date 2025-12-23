import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
}
