// App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainHeader from "./components/MainHeader";
import FirstPage from "./pages/FirstPage";
import NotFound from "./pages/NotFound";
import TeamScore from "./pages/TeamScore";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/TeamScore" element={<TeamScore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
