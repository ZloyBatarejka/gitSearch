import React from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Profile } from "./pages/profile";
import { Alert } from "./components/alert";
import { AlertState } from "./context/alert/alertState";
import { GihubState } from "./context/github/githubState";
function App() {
  return (
    <GihubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: "Hello" }} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GihubState>
  );
}

export default App;
