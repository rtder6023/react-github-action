import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button
            data-testid="minus-button"
            disabled={disabled}
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            disabled={disabled}
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
          <div>
            <button
              style={{ backgroundColor: "blue" }}
              data-testid="on/off-button"
              onClick={() => setDisabled((prev) => !prev)}
            >
              on/off
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
