import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState } from 'react';
function App() {


  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(`Tytuł: ${tytul}, Rodzaj: ${rodzaj}`);
  }
  return (
      <div className="App">
      <form>
        <div class="mb-3">
          <div id="film" className="form-label">Tytuł filmu</div>
          <input type="text" className="form-control" id="film"/>
        </div>
        <div id="Wybierz" className="from-label">Wybierz rodzaj filmu </div>
        <select id="Select" className="form-control">
          <option></option>
          <option>Komedia</option>
          <option>Sensacyjny</option>
          <option>Horror</option>
          <option>Obyczajowy</option>
        </select>
        <div><button type="submit" className="btn btn-primary">Dodaj</button></div>
      </form>
    </div>
  );
}

export default App;
