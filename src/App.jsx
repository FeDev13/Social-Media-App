import { useState } from "react";
import Register from "./Components/Register";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
