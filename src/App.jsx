// App.jsx
import {
  HashRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import MainHeader from "./components/MainHeader";
import FirstPage from "./pages/FirstPage";
import NotFound from "./pages/NotFound";
import TeamScore from "./pages/TeamScore";

const ScrollToHashElement = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((location) => {
      const targetElement = document.getElementById(
        decodeURIComponent(location.hash.slice(1))
      );

      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
      }
    });

    return () => unlisten();
  }, [history]);

  return null;
};

function App() {
  return (
    <Router basename={import.meta.env.VITE_PUBLIC_URL}>
      <ScrollToHashElement />
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
