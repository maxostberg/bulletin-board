import "./App.css";
import logo from "./assets/Bulletin.png";

/* Bulletin Import */
import BulletinBoard from "./Components/BulletinBoard/BulletinBoard";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Hej" className="logo"></img>
      <BulletinBoard />
    </div>
  );
}

export default App;
