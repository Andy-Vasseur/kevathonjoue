import { useState } from "react"

function App() {

  const [inputData, setInputData] = useState('')
  const [shuffleData, setShuffleData] = useState([])
  const [randomResult, setRandomResult] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleShuffle = () => {
    const dataArr = inputData.split(',').map(item => item.trim());
    const shuffledArray = shuffleArray(dataArr);
    setShuffleData(shuffledArray);
    const randomIndex = Math.floor(Math.random() * shuffledArray.length);
    setRandomResult(shuffledArray[randomIndex]);
  };

  return (
    <div className="App">
      <h1>KeVaThonJoué</h1>
      <div className="App__results">
        <h2>Résultats:</h2>
        <p>
          {randomResult}
        </p>
      </div>
      <div className="App__inputs">
        <label htmlFor="games">
          Entrez le nom des jeux à choisir aléatoirement (séparés par des virgules) :
        </label>
        <textarea
          placeholder="Exemple : Mario Kart, Minecraft, Among Us, ..."
          value={inputData}
          onChange={handleInputChange}
        />
        <button onClick={handleShuffle}>Shuffle</button>
      </div>
    </div>
  )
}

export default App