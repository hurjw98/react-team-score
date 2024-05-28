// App.jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import MainHeader from "./components/MainHeader";
import FirstPage from "./pages/FirstPage";
import NotFound from "./pages/NotFound";
import TeamScore from "./pages/TeamScore";

function App() {
  return (
    <Router basename={import.meta.env.VITE_PUBLIC_URL}>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route path="/TeamScore" component={TeamScore} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
