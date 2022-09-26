import ProgressBar from "./ProgressBar";
import array from "./data";

function App() {
  return (
    <div className="App">
      <ProgressBar array={array} height={'20px'} width={'800px'}/>
    </div>
  );
}

export default App;
