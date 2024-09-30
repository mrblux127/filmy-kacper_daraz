import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
function App() {
  return (
      <div className="App">
      <form>
        <div class="mb-3">
          <div id="film" class="form-label">Tytuł filmu</div>
          <input type="text" class="form-control" id="film"/>
        </div>
        <div id="Wybierz" class="from-label">Wybierz rodzaj filmu </div>
        <select id="Select" class="form-control">
          <option></option>
          <option>Komedia</option>
          <option>Sensacyjny</option>
          <option>Horror</option>
          <option>Obyczajowy</option>
        </select>
        <div><button type="submit" class="btn btn-primary">Dodaj</button></div>
      </form>
    </div>
  );
}

export default App;
