import "./App.scss";
import TravelInfo from "./component/TravelInfo";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <TravelInfo />
      </div>
    </>
  );
}

export default App;
