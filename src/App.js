import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Welcome to My <span>Dictionary App</span>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            © Designed and developed by{" "}
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
