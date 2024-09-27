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
        <label for="Wybierz" class="from-label">Wybierz rodzaj filmu</label>
        <select id="Select" class="form-label">
          <option></option>
          <option>Komedia</option>
          <option>Sensacyjny</option>
          <option>Horror</option>
          <option>Obyczajowy</option>
        </select>
        <div><button type="submit" class="btn btn-primary">Zastosuj</button></div>
      </form>
    </div>
  );
}

export default App;
