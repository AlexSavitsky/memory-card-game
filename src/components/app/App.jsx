import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "../title/Title";
import GameInterface from "../gameInterface/GameInterface";
import StartMenu from "../startMenu/StartMenu";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Title label={"Card MEMory Game"} />
        <Routes>
          <Route path="/" element={<StartMenu />}/>
          <Route path="/game" element={<GameInterface />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
