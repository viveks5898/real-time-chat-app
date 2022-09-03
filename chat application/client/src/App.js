import "./App.css";
import { BrowserRouter, Route, Link, Router, Routes } from "react-router-dom";
import Join from "./Component/Join";
import Chat from "./Component/Chat";
import Array from "./Component/Array";

function App() {
  return (
    
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/data" element={<Array/>} />


   
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
