
import Header from "./Components/Header";
import Table from "./Components/Table"
import UserFormParent from "./Components/Form/UserFormParent"
function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <UserFormParent />
      </div>
      <div>
        <Table />
      </div>

    </div>
  );
}

export default App;
