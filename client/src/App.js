import "./App.css";
import UserListe from "./components/UserListe";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./components/AddUser";
function App() {
  return (
    <div className="App">
      <AddUser />
      <UserListe />
    </div>
  );
}

export default App;
