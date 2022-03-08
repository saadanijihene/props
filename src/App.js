import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const alertMyInput = (name) => alert(name);
  return (
    <div>
      <Profile
        name="Saadani Jihene"
        alertMyInput={alertMyInput}
        bio="I don't even know myself"
        profession="high priestess"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg"
          alt="Logo"
        />
      </Profile>
    </div>
  );
}

export default App;
