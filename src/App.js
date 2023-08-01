import './App.css';
import SeparetionBars from "./components/SeparationBars"

function App() {
  return (
    <div className="App">
      <div className="spacer"></div>
      <SeparetionBars
      color={"#04AA6D"}
      shadowColor={"0px 0px 5px 0px #04aa6d8f"}
      direction={"right"}
      />
      <div className="spacer"></div>
      <SeparetionBars
      color={"#33D7FF"}
      shadowColor={"0px 0px 5px 0px rgb(51 215 255 / 47%)"}
      direction={"left"}
      />
      <div className="spacer"></div>
      <SeparetionBars
      color={"rgb(255 204 51)"}
      shadowColor={"0px 0px 5px 0px rgb(255 204 51 / 45%)"}
      direction={"left"}
      multiway={true}
      />
    </div>
  );
}

export default App;
