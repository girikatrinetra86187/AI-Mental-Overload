import './App.css';
import mentalImg from "./images/mental-health.webp";

function App() {
  return (
    <div className="App">
      <h1>AI Mental Overload Prediction</h1>

      <img
        src={mentalImg}
        alt="Mental Health"
        width="500"
      />
    </div>
  );
}

export default App;