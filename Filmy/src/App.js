import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="film" class="form-label">Tytuł filmu</label>
          <input type="text" class="form-control" id="film"/>
        </div>
        <button type="submit" class="btn btn-primary">Zastosuj</button>
      </form>
    </div>
  );
}

export default App;
