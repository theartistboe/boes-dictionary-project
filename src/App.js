import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Boe's Dictionary App
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>Coded by <a href="https://github.com/theartistboe/boes-dictionary-project">Isaboe Hollis 😼</a></small>
      </footer>
      </div>
    </div>
  );
}
