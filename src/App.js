import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Welcome to my dictionary app</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/sara-touaiti-0350841b4/"
              target="blank"
            >
              Sara Touaiti
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
